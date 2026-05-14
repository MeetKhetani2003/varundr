'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GALLERY_IMAGES, handleImageFallback, modernEase, fadeUpVariant, staggerContainer, BRAND } from '../lib/constants';
import { SectionHeading } from '../components/UIElements';
import { Building2, ShieldCheck, Microscope, Thermometer } from 'lucide-react';

export default function FacilitiesPage() {
  const facilities = [
    { title: 'Pathology Lab', size: 'large', image: GALLERY_IMAGES[2], icon: Microscope },
    { title: 'Digital X-Ray', size: 'small', image: GALLERY_IMAGES[3], icon: ShieldCheck },
    { title: 'OPD Chambers', size: 'small', image: GALLERY_IMAGES[0], icon: Building2 },
    { title: 'Minor Procedure Room', size: 'wide', image: GALLERY_IMAGES[1], icon: Thermometer },
    { title: 'Pharmacy', size: 'small', image: GALLERY_IMAGES[5], icon: Building2 },
    { title: 'Patient Waiting Area', size: 'small', image: GALLERY_IMAGES[4], icon: Building2 },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Cinematic Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <img src={GALLERY_IMAGES[0]} alt="Facilities Bg" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>
        <div className="main-container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-400 text-sm font-bold uppercase tracking-[0.3em] mb-6">Our Infrastructure</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight mb-8" style={{ fontFamily: 'var(--font-outfit)' }}>
              Premium <span className="font-bold" style={{ color: BRAND.teal }}>Facilities</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              We have invested in state-of-the-art medical infrastructure to ensure that every patient receives treatment in a safe, comfortable, and highly professional environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Bento Grid Facilities */}
      <section className="section-padding">
        <div className="main-container">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 auto-rows-[250px] md:auto-rows-[300px]">
            {facilities.map((facility, idx) => {
              let gridClass = 'col-span-1 row-span-1';
              if (facility.size === 'large') gridClass = 'md:col-span-2 md:row-span-2';
              if (facility.size === 'wide') gridClass = 'md:col-span-2 row-span-1';

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, ease: modernEase }}
                  className={`relative rounded-[3rem] overflow-hidden group cursor-pointer border border-slate-100 shadow-xl ${gridClass}`}
                >
                  <img src={facility.image} alt={facility.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" onError={handleImageFallback} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  <div className="absolute top-8 left-8">
                     <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                        <facility.icon className="w-6 h-6" />
                     </div>
                  </div>

                  <div className="absolute bottom-0 left-0 p-10 w-full">
                    <h3 className="text-white text-3xl font-bold" style={{ fontFamily: 'var(--font-outfit)' }}>{facility.title}</h3>
                    <p className="text-teal-400 text-sm font-bold uppercase tracking-widest mt-2 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">View Details</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
