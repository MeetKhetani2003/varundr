'use client';
import React, { useState, useEffect } from 'react';

export default function PackagesAdminPage() {
  const [packages, setPackages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', price: '', parametersCount: '', testsIncluded: '', purpose: '' });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch('/api/packages');
    setPackages(await res.json());
    setLoading(false);
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/packages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        price: parseFloat(formData.price),
        parametersCount: parseInt(formData.parametersCount)
      })
    });
    setIsModalOpen(false);
    fetchData();
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure?')) {
      await fetch(`/api/packages/${id}`, { method: 'DELETE' });
      fetchData();
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Manage Packages</h1>
        <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 bg-teal-600 text-white rounded-lg font-medium">Add Package</button>
      </div>

      {loading ? <p>Loading...</p> : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {packages.map(pkg => (
            <div key={pkg.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-xs font-bold uppercase tracking-widest mb-3">
                    {pkg.parametersCount} Parameters
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">{pkg.name}</h3>
                </div>
                <button onClick={() => handleDelete(pkg.id)} className="text-red-500 hover:text-red-700">Delete</button>
              </div>
              <div className="text-3xl font-black text-teal-600 mb-4">₹{pkg.price}</div>
              <p className="text-slate-500 text-sm mb-4">{pkg.purpose}</p>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Tests Included:</div>
              <p className="text-sm text-slate-600">{pkg.testsIncluded}</p>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl max-w-md w-full">
            <h2 className="text-2xl font-bold mb-6">Add New Package</h2>
            <form onSubmit={handleCreate} className="flex flex-col gap-4">
              <input placeholder="Package Name" className="border p-2 rounded" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              <input type="number" placeholder="Price (₹)" className="border p-2 rounded" required value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} />
              <input type="number" placeholder="Number of Parameters" className="border p-2 rounded" required value={formData.parametersCount} onChange={e => setFormData({...formData, parametersCount: e.target.value})} />
              <textarea placeholder="Tests Included (comma separated)" className="border p-2 rounded" required value={formData.testsIncluded} onChange={e => setFormData({...formData, testsIncluded: e.target.value})} />
              <textarea placeholder="Purpose / Description" className="border p-2 rounded" required value={formData.purpose} onChange={e => setFormData({...formData, purpose: e.target.value})} />
              
              <div className="flex gap-4 mt-4">
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 p-2 border rounded">Cancel</button>
                <button type="submit" className="flex-1 p-2 bg-teal-600 text-white rounded">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
