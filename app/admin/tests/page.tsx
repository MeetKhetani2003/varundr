'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function TestsAdminPage() {
  const router = useRouter();
  const [tests, setTests] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Form state
  const [isTestModalOpen, setIsTestModalOpen] = useState(false);
  const [isCatModalOpen, setIsCatModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', rate: '', tubeColor: 'None', categoryId: '' });
  const [catFormData, setCatFormData] = useState({ name: '', sortOrder: '0' });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [testsRes, catRes] = await Promise.all([
        fetch('/api/tests'),
        fetch('/api/test-categories')
      ]);
      setTests(await testsRes.json());
      setCategories(await catRes.json());
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const handleCreateTest = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/tests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, rate: parseFloat(formData.rate) })
    });
    setIsTestModalOpen(false);
    fetchData();
  };

  const handleDeleteTest = async (id: string) => {
    if (confirm('Are you sure?')) {
      await fetch(`/api/tests/${id}`, { method: 'DELETE' });
      fetchData();
    }
  };

  const handleCreateCat = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/test-categories', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...catFormData, sortOrder: parseInt(catFormData.sortOrder) })
    });
    setIsCatModalOpen(false);
    fetchData();
  };

  return (
    <div className="max-w-6xl mx-auto p-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Manage Tests</h1>
        <div className="flex gap-4">
          <button onClick={() => setIsCatModalOpen(true)} className="px-4 py-2 bg-slate-800 text-white rounded-lg font-medium">Add Category</button>
          <button onClick={() => setIsTestModalOpen(true)} className="px-4 py-2 bg-teal-600 text-white rounded-lg font-medium">Add Test</button>
        </div>
      </div>

      {loading ? <p>Loading...</p> : (
        <>
          <div className="mb-6">
            <input 
              type="text" 
              placeholder="Search tests by name or category..." 
              className="w-full md:w-1/2 border border-slate-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tests
              .filter(test => 
                test.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                test.category?.name?.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map(test => (
            <div key={test.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group cursor-pointer" onClick={() => router.push(`/admin/test-inquiries/${test.id}`)}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase">{test.category?.name}</span>
                  <h3 className="text-xl font-bold text-slate-900">{test.name}</h3>
                </div>
                <button onClick={(e) => { e.stopPropagation(); handleDeleteTest(test.id); }} className="text-red-500 hover:text-red-700">Delete</button>
              </div>
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: test.tubeColor === 'None' ? '#cbd5e1' : test.tubeColor.toLowerCase() }} />
                  <span className="text-sm text-slate-500">{test.tubeColor} Tube</span>
                </div>
                <div className="text-xl font-black text-teal-600">₹{test.rate}</div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100">
                 <p className="text-sm text-teal-600 font-bold">View Inquiries →</p>
              </div>
            </div>
            ))}
          </div>
        </>
      )}

      {isTestModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl max-w-md w-full">
            <h2 className="text-2xl font-bold mb-6">Add New Test</h2>
            <form onSubmit={handleCreateTest} className="flex flex-col gap-4">
              <input placeholder="Test Name" className="border p-2 rounded" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              <input type="number" placeholder="Rate (₹)" className="border p-2 rounded" required value={formData.rate} onChange={e => setFormData({...formData, rate: e.target.value})} />
              <select className="border p-2 rounded" required value={formData.categoryId} onChange={e => setFormData({...formData, categoryId: e.target.value})}>
                <option value="">Select Category</option>
                {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
              <select className="border p-2 rounded" required value={formData.tubeColor} onChange={e => setFormData({...formData, tubeColor: e.target.value})}>
                <option value="None">None</option>
                <option value="Purple">Purple (EDTA)</option>
                <option value="Red">Red (Clot Activator)</option>
                <option value="Blue">Blue (Sodium Citrate)</option>
                <option value="Grey">Grey (Fluoride)</option>
              </select>
              <div className="flex gap-4 mt-4">
                <button type="button" onClick={() => setIsTestModalOpen(false)} className="flex-1 p-2 border rounded">Cancel</button>
                <button type="submit" className="flex-1 p-2 bg-teal-600 text-white rounded">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isCatModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl max-w-md w-full">
            <h2 className="text-2xl font-bold mb-6">Add Category</h2>
            <form onSubmit={handleCreateCat} className="flex flex-col gap-4">
              <input placeholder="Category Name" className="border p-2 rounded" required value={catFormData.name} onChange={e => setCatFormData({...catFormData, name: e.target.value})} />
              <input type="number" placeholder="Sort Order" className="border p-2 rounded" value={catFormData.sortOrder} onChange={e => setCatFormData({...catFormData, sortOrder: e.target.value})} />
              <div className="flex gap-4 mt-4">
                <button type="button" onClick={() => setIsCatModalOpen(false)} className="flex-1 p-2 border rounded">Cancel</button>
                <button type="submit" className="flex-1 p-2 bg-slate-800 text-white rounded">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
