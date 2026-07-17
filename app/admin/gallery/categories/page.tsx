'use client';

import React, { useState, useEffect } from 'react';
import { Trash2 } from 'lucide-react';

type Category = { _id: string; name: string; type: 'photo' | 'video'; sortOrder: number };

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [name, setName] = useState('');
  const [type, setType] = useState<'photo' | 'video'>('photo');

  const fetchCategories = async () => {
    const res = await fetch('/api/gallery-categories');
    if (res.ok) {
      setCategories(await res.json());
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;
    const res = await fetch('/api/gallery-categories', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, type }),
    });
    if (res.ok) {
      setName('');
      fetchCategories();
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this category?')) {
      const res = await fetch(`/api/gallery-categories/${id}`, { method: 'DELETE' });
      if (res.ok) fetchCategories();
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">Gallery Categories</h1>
      
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <h2 className="text-lg font-bold mb-4">Add New Category</h2>
        <form onSubmit={handleAdd} className="flex gap-4 items-end">
          <div className="flex-1">
            <label className="block text-sm font-medium text-slate-700 mb-1">Category Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="e.g. Clinic Rooms" />
          </div>
          <div className="w-48">
            <label className="block text-sm font-medium text-slate-700 mb-1">Type</label>
            <select value={type} onChange={(e) => setType(e.target.value as any)} className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option value="photo">Photo</option>
              <option value="video">Video</option>
            </select>
          </div>
          <button type="submit" className="px-6 py-2 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 h-[42px]">
            Add
          </button>
        </form>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="p-4 font-bold text-slate-700">Name</th>
              <th className="p-4 font-bold text-slate-700">Type</th>
              <th className="p-4 font-bold text-slate-700 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((c) => (
              <tr key={c._id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                <td className="p-4">{c.name}</td>
                <td className="p-4 capitalize">{c.type}</td>
                <td className="p-4 text-right">
                  <button onClick={() => handleDelete(c._id)} className="text-red-500 hover:text-red-700 p-2">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
            {categories.length === 0 && (
              <tr>
                <td colSpan={3} className="p-8 text-center text-slate-500">No categories found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
