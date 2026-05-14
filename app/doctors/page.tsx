'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BRAND, DOCTORS, handleImageFallback, modernEase, fadeUpVariant, staggerContainer } from '../lib/constants';
import { SectionHeading, Button } from '../components/UIElements';
import { useAppointment } from '../lib/AppointmentContext';
import { ArrowRight, Star, Award, GraduationCap, CheckCircle2, MapPin, Clock, MessageCircle, Calendar, User } from 'lucide-react';
import Link from 'next/link';

export default function DoctorsPage() {
  const { openModal } = useAppointment();
  return (
    <div className="bg-slate-50 min-h-screen">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12">
            {DOCTORS.map((doc, idx) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden p-8 flex flex-col hover:shadow-xl transition-all"
              >
                {/* Header: Photo + Name + Stats */}
                <div className="flex gap-6 mb-8">
                  <div className="relative shrink-0">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-slate-100 relative z-10">
                      <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -top-1 -right-1 bg-[#0F5B5D] text-white rounded-full p-1 border-2 border-white z-20">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-2xl font-bold text-slate-900 truncate" style={{ fontFamily: 'var(--font-outfit)' }}>{doc.name}</h3>
                      <div className="flex items-center gap-1 bg-yellow-50 px-2 py-0.5 rounded-lg shrink-0">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-bold text-slate-700">4.9</span>
                      </div>
                    </div>
                    <div className="text-[#0F5B5D] font-bold text-sm mb-3">{doc.qualifications.split(',')[0]}</div>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex items-center gap-2 text-slate-500 text-xs">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>Raipur (Saddu & Areas)</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 text-xs">
                        <Clock className="w-3.5 h-3.5" />
                        <span>15+ Years Experience</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bio Quote Box */}
                <div className="bg-slate-50/80 p-6 rounded-3xl mb-6 flex-1 italic text-slate-600 text-sm leading-relaxed relative">
                  <span className="text-slate-200 text-4xl absolute -top-1 left-2 font-serif">"</span>
                  Verified & Trained expert. Specializing in advanced {doc.specialization.toLowerCase()} with a focus on patient outcomes.
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {doc.specialization.split('&').map((tag, i) => (
                    <span key={i} className="px-4 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-xs font-bold text-slate-600">
                      {tag.trim()}
                    </span>
                  ))}
                  <span className="px-3 py-1.5 text-xs font-bold text-[#0F5B5D]">+1 more</span>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3">
                  <button 
                    onClick={() => openModal(doc.id)}
                    className="w-full h-14 bg-[#0F5B5D] hover:bg-[#0c4a4c] text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-teal-900/20"
                  >
                    Quick Book Appointment <Calendar className="w-5 h-5" />
                  </button>
                  <div className="grid grid-cols-2 gap-3">
                    <Link 
                      href={`/doctors/${doc.id}`}
                      className="h-14 bg-slate-50 text-slate-900 border border-slate-200 hover:border-brand-teal hover:text-brand-teal rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
                    >
                      <User className="w-4 h-4" /> Profile
                    </Link>
                    <button 
                      onClick={() => window.open('https://wa.me/917701010703', '_blank')}
                      className="h-14 bg-white border border-slate-100 hover:bg-slate-50 text-slate-700 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all"
                    >
                      <MessageCircle className="w-5 h-5 text-[#25D366]" /> WA
                    </button>
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
                   <div className="text-4xl font-bold mb-1" style={{ color: BRAND.teal }}>{stat.value}</div>
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
