'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GALLERY_IMAGES, handleImageFallback, modernEase } from '../lib/constants';
import { SectionHeading } from '../components/UIElements';

export default function GalleryPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <SectionHeading subtitle="Visual Tour" title="Clinic Gallery" centered />

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mt-12">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05, ease: modernEase }}
              className="break-inside-avoid rounded-[2rem] overflow-hidden mb-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <img src={img} alt={`Gallery ${idx}`} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" onError={handleImageFallback} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
