'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GALLERY_IMAGES, handleImageFallback, modernEase } from '../lib/constants';
import { SectionHeading } from '../components/UIElements';

export default function FacilitiesPage() {
  const facilities = [
    { title: 'Pathology Lab', size: 'large', image: GALLERY_IMAGES[2] },
    { title: 'Digital X-Ray', size: 'small', image: GALLERY_IMAGES[3] },
    { title: 'OPD Chambers', size: 'small', image: GALLERY_IMAGES[0] },
    { title: 'Minor Procedure Room', size: 'wide', image: GALLERY_IMAGES[1] },
    { title: 'Pharmacy', size: 'small', image: GALLERY_IMAGES[5] },
    { title: 'Patient Waiting Area', size: 'small', image: GALLERY_IMAGES[4] },
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <SectionHeading subtitle="Infrastructure" title="Premium Facilities" />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 auto-rows-[250px] md:auto-rows-[300px]">
          {facilities.map((facility, idx) => {
            let gridClass = 'col-span-1 row-span-1';
            if (facility.size === 'large') gridClass = 'md:col-span-2 md:row-span-2';
            if (facility.size === 'wide') gridClass = 'md:col-span-2 row-span-1';

            return (
              <motion.div
                key={idx} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.05, ease: modernEase }}
                className={`relative rounded-[2rem] overflow-hidden group cursor-pointer border border-slate-200/50 shadow-sm ${gridClass}`}
              >
                <img src={facility.image} alt={facility.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={handleImageFallback} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-white text-2xl font-bold font-display" style={{ fontFamily: 'var(--font-outfit)' }}>{facility.title}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
