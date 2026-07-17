'use client';

import React, { useState, useEffect } from 'react';
import { Trash2, ImageIcon, Play, Edit } from 'lucide-react';

type Category = { _id: string; name: string; type: string };
type GalleryItem = { _id: string; url: string; type: 'photo' | 'video'; title?: string; categoryId?: Category };

export default function GalleryItemsPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  
  const [type, setType] = useState<'photo' | 'video'>('photo');
  const [categoryId, setCategoryId] = useState('');
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const fetchData = async () => {
    const [resItems, resCats] = await Promise.all([
      fetch('/api/gallery-items'),
      fetch('/api/gallery-categories')
    ]);
    if (resItems.ok) setItems(await resItems.json());
    if (resCats.ok) setCategories(await resCats.json());
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);

    let finalUrl = url;

    try {
      if (type === 'photo' && file) {
        const formData = new FormData();
        formData.append('file', file);
        const uploadRes = await fetch('/api/upload', { method: 'POST', body: formData });
        if (!uploadRes.ok) throw new Error('Upload failed');
        const uploadData = await uploadRes.json();
        finalUrl = uploadData.url;
      }

      const method = editingId ? 'PUT' : 'POST';
      const endpoint = editingId ? `/api/gallery-items/${editingId}` : '/api/gallery-items';

      const res = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, url: finalUrl, title, categoryId: categoryId || undefined }),
      });

      if (res.ok) {
        handleCancelEdit();
        fetchData();
      }
    } catch (err) {
      alert(`Error ${editingId ? 'updating' : 'adding'} item`);
    } finally {
      setUploading(false);
    }
  };

  const handleEdit = (item: GalleryItem) => {
    setEditingId(item._id);
    setType(item.type);
    setCategoryId(item.categoryId?._id || '');
    setTitle(item.title || '');
    setUrl(item.url);
    setFile(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setType('photo');
    setCategoryId('');
    setTitle('');
    setUrl('');
    setFile(null);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this item?')) {
      const res = await fetch(`/api/gallery-items/${id}`, { method: 'DELETE' });
      if (res.ok) fetchData();
    }
  };

  const filteredCategories = categories.filter(c => c.type === type);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">Gallery Items</h1>
      
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">{editingId ? 'Edit Item' : 'Add New Item'}</h2>
          {editingId && (
            <button type="button" onClick={handleCancelEdit} className="text-sm font-medium text-slate-500 hover:text-slate-800">
              Cancel Edit
            </button>
          )}
        </div>
        <form onSubmit={handleAdd} className="space-y-4">
          <div className="flex gap-4">
            <div className="w-1/3">
              <label className="block text-sm font-medium text-slate-700 mb-1">Type</label>
              <select value={type} onChange={(e) => { setType(e.target.value as any); setCategoryId(''); }} className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500">
                <option value="photo">Photo</option>
                <option value="video">Video URL</option>
              </select>
            </div>
            <div className="w-1/3">
              <label className="block text-sm font-medium text-slate-700 mb-1">Category (Optional)</label>
              <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500">
                <option value="">None</option>
                {filteredCategories.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
              </select>
            </div>
            <div className="w-1/3">
              <label className="block text-sm font-medium text-slate-700 mb-1">Title (Optional)</label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Item Title" />
            </div>
          </div>
          
          <div className="flex gap-4 items-end">
            <div className="flex-1">
              {type === 'photo' ? (
                <>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Upload Image {editingId && '(Leave blank to keep existing)'}</label>
                  <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} required={!editingId} className="w-full" />
                </>
              ) : (
                <>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Video URL (YouTube/Insta Embed URL)</label>
                  <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} required className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="https://www.youtube.com/embed/..." />
                </>
              )}
            </div>
            <button type="submit" disabled={uploading} className="px-8 py-2 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 h-[42px] disabled:opacity-50">
              {uploading ? (editingId ? 'Updating...' : 'Uploading...') : (editingId ? 'Update Item' : 'Add Item')}
            </button>
          </div>
        </form>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item._id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm group">
            <div className="aspect-square relative bg-slate-100 flex items-center justify-center">
              {item.type === 'photo' ? (
                <img src={item.url} alt={item.title || 'Gallery item'} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full relative">
                   <iframe src={item.url} className="w-full h-full pointer-events-none border-0" title="Video" />
                   <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <Play className="w-12 h-12 text-white opacity-80" />
                   </div>
                </div>
              )}
              <div className="absolute top-2 right-2 bg-white/90 backdrop-blur rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center gap-1">
                <button onClick={() => handleEdit(item)} className="p-1 text-teal-600 hover:text-teal-800" title="Edit">
                  <Edit className="w-4 h-4" />
                </button>
                <div className="w-px h-4 bg-slate-300" />
                <button onClick={() => handleDelete(item._id)} className="p-1 text-red-500 hover:text-red-700" title="Delete">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="p-3">
              <p className="font-bold text-slate-800 text-sm truncate">{item.title || 'Untitled'}</p>
              <div className="flex justify-between items-center mt-1 text-xs text-slate-500">
                <span className="capitalize flex items-center gap-1">
                  {item.type === 'photo' ? <ImageIcon className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                  {item.type}
                </span>
                {item.categoryId && <span className="bg-slate-100 px-2 py-0.5 rounded-md truncate max-w-[100px]">{item.categoryId.name}</span>}
              </div>
            </div>
          </div>
        ))}
        {items.length === 0 && (
          <div className="col-span-full p-12 text-center text-slate-500 bg-white rounded-2xl border border-slate-200">
            No gallery items found. Add some above!
          </div>
        )}
      </div>
    </div>
  );
}
