'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_IMAGES, handleImageFallback, modernEase, fadeUpVariant, staggerContainer, BRAND } from '../lib/constants';
import { SectionHeading, Button } from '../components/UIElements';
import { Play, Image as ImageIcon, Maximize2 } from 'lucide-react';
import { useAppointment } from '../lib/AppointmentContext';
import Link from 'next/link';

type Category = { _id: string; name: string; type: string };
type GalleryItem = { _id: string; url: string; type: 'photo' | 'video'; title?: string; categoryId?: Category };

export default function GalleryPage() {
  const { openModal } = useAppointment();
  const [activeTab, setActiveTab] = useState<'all' | 'photos' | 'videos'>('all');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resItems, resCats] = await Promise.all([
          fetch('/api/gallery-items'),
          fetch('/api/gallery-categories')
        ]);
        if (resItems.ok) setItems(await resItems.json());
        if (resCats.ok) setCategories(await resCats.json());
      } catch (err) {
        console.error('Failed to fetch gallery data', err);
      }
    };
    fetchData();
  }, []);

  const handleMainTabChange = (tab: 'all' | 'photos' | 'videos') => {
    setActiveTab(tab);
    setActiveCategory('all');
  };

  const currentCategories = categories.filter(c => {
    if (activeTab === 'photos') return c.type === 'photo';
    if (activeTab === 'videos') return c.type === 'video';
    return false;
  });
  
  const filteredItems = items.filter(item => {
    if (activeTab === 'photos' && item.type !== 'photo') return false;
    if (activeTab === 'videos' && item.type !== 'video') return false;
    if (activeCategory !== 'all' && item.categoryId?._id !== activeCategory) return false;
    return true;
  });

  const photos = filteredItems.filter(i => i.type === 'photo');
  const videos = filteredItems.filter(i => i.type === 'video');

  // fallback to static images if no dynamic photos
  const displayPhotos = photos.length > 0 ? photos : GALLERY_IMAGES.map((url, i) => ({
    _id: `static-${i}`, url, type: 'photo' as const
  }));

  // fallback to static videos if no dynamic videos
  const displayVideos = videos.length > 0 ? videos : [
    { _id: 'v1', title: "Orthopedic Excellence", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: 'video' as const },
    { _id: 'v2', title: "Diagnostic precision", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: 'video' as const },
  ];

  const actualPhotos = items.length > 0 ? photos : displayPhotos;
  const actualVideos = items.length > 0 ? videos : displayVideos;

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <img src={GALLERY_IMAGES[1]} alt="Gallery Bg" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-slate-900/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>
        <div className="main-container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-400 text-sm font-bold uppercase tracking-[0.3em] mb-6">Visual Tour</span>
            <h1 className="text-5xl md:text-7xl font-light text-white mb-8" style={{ fontFamily: 'var(--font-outfit)' }}>
              Explore <span className="font-bold text-teal-400">Our Facility</span>
            </h1>
            
            {/* Main Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <button 
                onClick={() => handleMainTabChange('all')}
                className={`px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-2 ${activeTab === 'all' ? 'bg-teal-600 text-white shadow-xl shadow-teal-900/20' : 'bg-white/10 text-slate-300 hover:bg-white/20'}`}
              >
                All Media
              </button>
              <button 
                onClick={() => handleMainTabChange('photos')}
                className={`px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-2 ${activeTab === 'photos' ? 'bg-teal-600 text-white shadow-xl shadow-teal-900/20' : 'bg-white/10 text-slate-300 hover:bg-white/20'}`}
              >
                <ImageIcon className="w-5 h-5" /> Photos
              </button>
              <button 
                onClick={() => handleMainTabChange('videos')}
                className={`px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-2 ${activeTab === 'videos' ? 'bg-teal-600 text-white shadow-xl shadow-teal-900/20' : 'bg-white/10 text-slate-300 hover:bg-white/20'}`}
              >
                <Play className="w-5 h-5" /> Videos
              </button>
            </div>
            
            {/* Category Tabs (Horizontal) */}
            <AnimatePresence>
              {(activeTab === 'photos' || activeTab === 'videos') && currentCategories.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  className="flex flex-wrap justify-center gap-3 overflow-hidden"
                >
                  <button
                    onClick={() => setActiveCategory('all')}
                    className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === 'all' ? 'bg-white text-slate-900' : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10'}`}
                  >
                    All {activeTab === 'photos' ? 'Photos' : 'Videos'}
                  </button>
                  {currentCategories.map(cat => (
                    <button
                      key={cat._id}
                      onClick={() => setActiveCategory(cat._id)}
                      className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === cat._id ? 'bg-white text-slate-900' : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10'}`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 2. Gallery Grid */}
      <section className="section-padding bg-slate-50/50 min-h-[500px]">
        <div className="main-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${activeCategory}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: modernEase }}
            >
              
              {(activeTab !== 'all' && actualPhotos.length === 0 && actualVideos.length === 0) && (
                <div className="text-center py-20 text-slate-500">
                  <p className="text-xl font-medium">No media found for this category.</p>
                </div>
              )}

              {/* Photos Grid */}
              {(activeTab === 'photos' || activeTab === 'all') && actualPhotos.length > 0 && (
                <div className="mb-20">
                  {(activeTab === 'all' && actualVideos.length > 0) && (
                    <div className="flex items-center gap-4 mb-12">
                      <div className="h-px flex-1 bg-slate-200" />
                      <span className="text-sm font-black text-slate-400 uppercase tracking-[0.4em]">Cinematic Photography</span>
                      <div className="h-px flex-1 bg-slate-200" />
                    </div>
                  )}
                  <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {actualPhotos.map((item, idx) => (
                      <motion.div
                        key={item._id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (idx % 10) * 0.05 }}
                        className="break-inside-avoid relative group rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all"
                      >
                        <img src={item.url} alt={(item as any).title || `Gallery ${idx}`} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" onError={handleImageFallback} />
                        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                            <Maximize2 className="w-8 h-8" />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Videos Grid */}
              {(activeTab === 'videos' || activeTab === 'all') && actualVideos.length > 0 && (
                <div>
                  {(activeTab === 'all' && actualPhotos.length > 0) && (
                    <div className="flex items-center gap-4 mb-12 mt-20">
                      <div className="h-px flex-1 bg-slate-200" />
                      <span className="text-sm font-black text-slate-400 uppercase tracking-[0.4em]">Clinical Case Studies & Tours</span>
                      <div className="h-px flex-1 bg-slate-200" />
                    </div>
                  )}
                  <div className="grid md:grid-cols-2 gap-12">
                    {actualVideos.map((item) => (
                      <div key={item._id} className="space-y-6">
                        <div className="aspect-video rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl relative bg-slate-200 group">
                          <iframe 
                            src={item.url} 
                            title={item.title || "Video"}
                            className="w-full h-full border-0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                          />
                        </div>
                        {item.title && (
                          <div className="px-8">
                             <h3 className="text-2xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'var(--font-outfit)' }}>{item.title}</h3>
                             <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest text-teal-600">
                               <Play className="w-4 h-4 fill-current" /> High Definition Video
                             </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="main-container text-center">
          <div className="bg-white/5 backdrop-blur-xl rounded-[4rem] p-16 md:p-24 relative overflow-hidden text-white border border-white/10">
             <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
             <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10" style={{ fontFamily: 'var(--font-outfit)' }}>Experience it in person.</h2>
             <p className="text-teal-50/70 text-xl mb-12 max-w-2xl mx-auto relative z-10">Schedule a facility tour or consult with our experts today.</p>
             <Button onClick={() => openModal()} variant="secondary" className="bg-white text-teal-600 hover:bg-teal-50 h-16 px-12 rounded-2xl text-xl font-bold shadow-2xl border-0 relative z-10">
               Visit Our Clinic
             </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
