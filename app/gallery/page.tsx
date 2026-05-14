'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_IMAGES, handleImageFallback, modernEase, fadeUpVariant, staggerContainer } from '../lib/constants';
import { SectionHeading, Button } from '../components/UIElements';
import { Play, Image as ImageIcon, Maximize2 } from 'lucide-react';
import Link from 'next/link';

const VIDEO_GALLERY = [
  { id: 1, title: "Orthopedic Excellence", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumbnail: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" },
  { id: 2, title: "Diagnostic precision", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumbnail: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" },
  { id: 3, title: "Patient Success Story", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumbnail: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800" },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'photos' | 'videos'>('all');

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-20 overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <img src={GALLERY_IMAGES[1]} alt="Gallery Bg" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>
        <div className="main-container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-400 text-sm font-bold uppercase tracking-[0.3em] mb-6">Visual Tour</span>
            <h1 className="text-5xl md:text-7xl font-light text-white mb-8" style={{ fontFamily: 'var(--font-outfit)' }}>
              Explore <span className="font-bold text-teal-400">Our Facility</span>
            </h1>
            
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <button 
                onClick={() => setActiveTab('all')}
                className={`px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-2 ${activeTab === 'all' ? 'bg-teal-600 text-white shadow-xl shadow-teal-600/20' : 'bg-white/5 text-slate-400 hover:bg-white/10'}`}
              >
                All Media
              </button>
              <button 
                onClick={() => setActiveTab('photos')}
                className={`px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-2 ${activeTab === 'photos' ? 'bg-teal-600 text-white shadow-xl shadow-teal-600/20' : 'bg-white/5 text-slate-400 hover:bg-white/10'}`}
              >
                <ImageIcon className="w-5 h-5" /> Photos
              </button>
              <button 
                onClick={() => setActiveTab('videos')}
                className={`px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-2 ${activeTab === 'videos' ? 'bg-teal-600 text-white shadow-xl shadow-teal-600/20' : 'bg-white/5 text-slate-400 hover:bg-white/10'}`}
              >
                <Play className="w-5 h-5" /> Videos
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Gallery Grid */}
      <section className="section-padding bg-slate-50/50">
        <div className="main-container">
          <AnimatePresence mode="wait">
            {/* Content for 'Photos' or 'All' */}
            {(activeTab === 'photos' || activeTab === 'all') && (
              <motion.div 
                key="photos-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-20"
              >
                {activeTab === 'all' && (
                  <div className="flex items-center gap-4 mb-12">
                    <div className="h-px flex-1 bg-slate-200" />
                    <span className="text-sm font-black text-slate-400 uppercase tracking-[0.4em]">Facility Photography</span>
                    <div className="h-px flex-1 bg-slate-200" />
                  </div>
                )}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                  {GALLERY_IMAGES.map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="break-inside-avoid relative group rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all"
                    >
                      <img src={img} alt={`Gallery ${idx}`} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" onError={handleImageFallback} />
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                          <Maximize2 className="w-8 h-8" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Content for 'Videos' or 'All' */}
            {(activeTab === 'videos' || activeTab === 'all') && (
              <motion.div 
                key="videos-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {activeTab === 'all' && (
                  <div className="flex items-center gap-4 mb-12 mt-32">
                    <div className="h-px flex-1 bg-slate-200" />
                    <span className="text-sm font-black text-slate-400 uppercase tracking-[0.4em]">Clinical Case Studies & Tours</span>
                    <div className="h-px flex-1 bg-slate-200" />
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-12">
                  {VIDEO_GALLERY.map((video) => (
                    <div key={video.id} className="space-y-6">
                      <div className="aspect-video rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl relative bg-slate-200 group">
                        <iframe 
                          src={video.url} 
                          title={video.title}
                          className="w-full h-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen
                        />
                      </div>
                      <div className="px-8">
                         <h3 className="text-2xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'var(--font-outfit)' }}>{video.title}</h3>
                         <div className="flex items-center gap-2 text-teal-600 font-bold text-sm uppercase tracking-widest">
                           <Play className="w-4 h-4 fill-current" /> High Definition Video
                         </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="section-padding bg-white">
        <div className="main-container text-center">
          <div className="bg-[#0F5B5D] rounded-[4rem] p-16 md:p-24 relative overflow-hidden text-white">
             <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
             <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10" style={{ fontFamily: 'var(--font-outfit)' }}>Experience it in person.</h2>
             <p className="text-teal-50/70 text-xl mb-12 max-w-2xl mx-auto relative z-10">Schedule a facility tour or consult with our experts today.</p>
             <Link href="/appointment" className="relative z-10 inline-block">
               <Button variant="secondary" className="bg-white text-[#0F5B5D] hover:bg-teal-50 h-16 px-12 rounded-2xl text-xl font-bold shadow-2xl border-0">
                 Visit Our Clinic
               </Button>
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
