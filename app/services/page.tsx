'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Bone, Microscope, Activity, Stethoscope, Syringe, ClipboardList, Building, ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { BRAND, modernEase, fadeUpVariant, staggerContainer } from '../lib/constants';
import { Button, SectionHeading } from '../components/UIElements';

const services = [
  { 
    id: 'orthopedic-care', 
    title: 'Orthopedic Care', 
    icon: Bone, 
    desc: 'Specialized trauma, joint replacement, and sports medicine led by Dr. Varun Goel.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 'pathology-lab', 
    title: 'Pathology Lab', 
    icon: Microscope, 
    desc: 'Advanced in-house diagnostics with NABL standards and rapid result turnaround.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 'trauma-care', 
    title: 'Trauma Care', 
    icon: Activity, 
    desc: '24/7 emergency response for high-velocity injuries and complex fractures.',
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 'digital-xray', 
    title: 'Digital X-Ray', 
    icon: ClipboardList, 
    desc: 'High-resolution imaging with minimal radiation for accurate medical assessment.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 'joint-replacement', 
    title: 'Joint Replacement', 
    icon: Stethoscope, 
    desc: 'World-class knee and hip replacement procedures for a pain-free active life.',
    image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 'in-house-pharmacy', 
    title: '24/7 Pharmacy', 
    icon: Building, 
    desc: 'On-site pharmacy providing immediate access to all essential medications.',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800'
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200" alt="Services Bg" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>
        <div className="main-container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-400 text-sm font-bold uppercase tracking-[0.3em] mb-6">Care Excellence</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight mb-8" style={{ fontFamily: 'var(--font-outfit)' }}>
              Our Medical <span className="font-bold" style={{ color: BRAND.teal }}>Services</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              From advanced orthopedic surgeries to precision diagnostics, we provide a complete spectrum of healthcare services under one roof.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="section-padding">
        <div className="main-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((svc, idx) => (
              <motion.div
                key={svc.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { delay: idx * 0.1, duration: 0.8, ease: modernEase } }
                }}
                className="group relative h-[500px] rounded-[3.5rem] overflow-hidden border border-slate-100 bg-white shadow-sm hover:shadow-2xl transition-all"
              >
                <div className="absolute inset-0 z-0">
                  <img src={svc.image} alt={svc.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                </div>

                <div className="relative z-10 h-full flex flex-col justify-end p-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-slate-900 transition-colors">
                    <svc.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-outfit)' }}>{svc.title}</h3>
                  <p className="text-slate-200 text-lg mb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 line-clamp-2">
                    {svc.desc}
                  </p>
                  <Link href={`/services/${svc.id}`} className="inline-flex items-center gap-2 text-white font-bold text-lg group-hover:gap-4 transition-all">
                    Learn More <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Features Section */}
      <section className="section-padding bg-slate-50">
        <div className="main-container">
          <div className="bg-white rounded-[3rem] md:rounded-[4rem] p-6 sm:p-10 md:p-20 shadow-xl border border-slate-100 grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="text-center lg:text-left">
              <SectionHeading subtitle="Service Standards" title="Committed to Clinical Excellence" />
              <div className="space-y-4 md:space-y-6 mt-8 md:mt-10">
                {[
                  "NABL Standard Pathology Lab",
                  "Fellowship-Trained Orthopedic Surgeons",
                  "Minimally Invasive Surgical Techniques",
                  "Instant Digital X-Ray Processing",
                  "Comprehensive Post-Op Rehabilitation"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 md:gap-4 text-base sm:text-lg md:text-xl font-bold text-slate-800 text-left">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
               <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" alt="Excellence" className="w-full h-[300px] md:h-[500px] object-cover rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl" />
               <div className="absolute -bottom-6 -right-4 md:-bottom-10 md:-right-10 bg-[#0F5B5D] text-white p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-2xl">
                 <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">100%</div>
                 <div className="text-[10px] md:text-sm font-bold uppercase tracking-widest opacity-70 leading-tight">Accuracy<br className="md:hidden" /> Guarantee</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="section-padding">
        <div className="main-container text-center">
          <div className="bg-slate-950 rounded-[4rem] p-16 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 relative z-10" style={{ fontFamily: 'var(--font-outfit)' }}>Ready for a <br />consultation?</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
               <Link href="/appointment">
                 <Button className="h-16 px-12 rounded-2xl text-xl">Book Your Slot</Button>
               </Link>
               <Button variant="secondary" onClick={() => window.open('https://wa.me/917701010703', '_blank')} className="bg-white/10 border-white/20 text-white h-16 px-12 rounded-2xl text-xl">WhatsApp Us</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
