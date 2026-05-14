'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BRAND, DOCTORS, handleImageFallback, modernEase, fadeUpVariant, staggerContainer } from '../lib/constants';
import { SectionHeading, Button } from '../components/UIElements';
import { ArrowRight, Star, Award, GraduationCap } from 'lucide-react';
import Link from 'next/link';

export default function DoctorsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Cinematic Header */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200" alt="Doctors Bg" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>
        <div className="main-container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-400 text-sm font-bold uppercase tracking-[0.3em] mb-6">Expertise & Care</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight mb-8" style={{ fontFamily: 'var(--font-outfit)' }}>
              Meet Our <span className="font-bold" style={{ color: BRAND.teal }}>Specialists</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Our clinic is founded and led by fellowship-trained experts committed to delivering world-class orthopedic and diagnostic precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Doctors Grid */}
      <section className="section-padding">
        <div className="main-container">
          <div className="grid lg:grid-cols-2 gap-16">
            {DOCTORS.map((doc, idx) => (
              <motion.div
                key={doc.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { delay: idx * 0.2, duration: 0.8, ease: modernEase } }
                }}
                className="group relative"
              >
                <div className="relative h-[600px] rounded-[4rem] overflow-hidden shadow-2xl border border-slate-100">
                  <img src={doc.image} alt={doc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={handleImageFallback} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 w-full p-12">
                    <div className="flex items-center gap-2 mb-4">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-white/70 text-xs font-bold uppercase tracking-widest ml-2">Top Rated Expert</span>
                    </div>
                    <h3 className="text-5xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-outfit)' }}>{doc.name}</h3>
                    <div className="text-teal-400 font-bold tracking-[0.2em] uppercase text-sm mb-6">{doc.qualifications}</div>
                    
                    <Link href={`/doctors/${doc.id}`}>
                      <Button className="h-14 px-8 rounded-2xl group/btn">
                        View Journey <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="mt-8 grid sm:grid-cols-2 gap-6 px-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                      <Award className="w-6 h-6" />
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{doc.specialization}</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{doc.bio.split('.')[0]}.</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Global Trust */}
      <section className="section-padding bg-slate-950 text-white">
        <div className="main-container text-center">
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md p-16 rounded-[4rem] border border-white/10 shadow-xl">
             <SectionHeading subtitle="Clinical Excellence" title="Committed to Raipur's Well-being" centered isDark />
             <p className="text-xl text-slate-400 mb-10 leading-relaxed">
               Our specialists are regular contributors to medical research and stay at the forefront of surgical and diagnostic innovations.
             </p>
             <div className="flex flex-wrap justify-center gap-12">
               {[
                 { label: "Patient Care", value: "100%" },
                 { label: "Success Rate", value: "99.8%" },
                 { label: "Years Exp", value: "15+" }
               ].map((stat, i) => (
                 <div key={i} className="text-center">
                   <div className="text-4xl font-bold text-teal-600 mb-1">{stat.value}</div>
                   <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
