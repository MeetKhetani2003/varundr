'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BRAND, DOCTORS, handleImageFallback, modernEase } from '../lib/constants';
import { SectionHeading } from '../components/UIElements';

export default function DoctorsPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <SectionHeading subtitle="Medical Experts" title="Meet Our Specialists" centered />

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {DOCTORS.map((doc, idx) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1, ease: modernEase }}
              className="bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-100 flex flex-col group hover:shadow-xl transition-shadow"
            >
              <div className="h-72 relative overflow-hidden">
                <img src={doc.image} alt={doc.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" onError={handleImageFallback} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <h3 className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-outfit)' }}>{doc.name}</h3>
                  <div className="text-white/90 font-bold tracking-wide uppercase text-sm">{doc.qualifications}</div>
                </div>
              </div>
              <div className="p-8 md:p-10 flex-1 flex flex-col">
                <p className="text-slate-700 whitespace-pre-line mb-8 font-semibold leading-relaxed border-l-4 pl-5 text-lg" style={{ borderColor: BRAND.teal }}>
                  {doc.specialization}
                </p>
                <p className="text-slate-500 leading-relaxed mb-8 text-lg">
                  {doc.bio}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {doc.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 bg-white text-slate-700 rounded-full text-xs font-bold uppercase tracking-wider border border-slate-200 shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
