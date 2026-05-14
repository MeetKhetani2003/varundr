'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Microscope, Building, HeartPulse, ArrowRight, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { BRAND, DOCTORS, handleImageFallback, fadeUpVariant, staggerContainer, modernEase } from '../lib/constants';
import { Button, SectionHeading } from '../components/UIElements';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* 1. Hero / Header Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=1200" alt="About Legacy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>
        <div className="main-container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-400 text-sm font-bold uppercase tracking-[0.3em] mb-6">Our Legacy</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight mb-8" style={{ fontFamily: 'var(--font-outfit)' }}>
              A Legacy of <br />
              <span className="font-bold" style={{ color: BRAND.teal }}>Healing & Trust</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Founded on the principles of clinical excellence and compassionate care, Care Plus Healthcentre has been Raipur's benchmark for orthopedic and diagnostic precision since 2015.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="section-padding">
        <div className="main-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <SectionHeading subtitle="Why We Exist" title="Driven by a Purpose Higher than Healthcare" />
              <div className="space-y-12 mt-12">
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 rounded-3xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <HeartPulse className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Mission</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      To provide world-class, accessible, and compassionate healthcare. We believe in accurate diagnosis and effective treatment plans delivered in an environment that promotes fast recovery.
                    </p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 rounded-3xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Microscope className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Vision</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      To be the most trusted healthcare destination in central India, known for clinical excellence, cutting-edge infrastructure, and unwavering patient commitment.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[4rem] overflow-hidden shadow-2xl h-[600px]"
            >
              <img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=1200" alt="Clinic Interior" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-xl rounded-[2.5rem] border border-white/20">
                <div className="text-white text-2xl font-bold mb-2">State-of-the-Art Facility</div>
                <p className="text-slate-200">Equipped with the latest technology for orthopedic surgery and pathology diagnostics.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Meet the Founders (Detailed Linkage) */}
      <section className="section-padding bg-slate-50">
        <div className="main-container">
          <SectionHeading subtitle="Leadership & Legacy" title="Meet the Visionaries" centered />
          
          <div className="grid lg:grid-cols-2 gap-12 mt-20 max-w-6xl mx-auto">
            {DOCTORS.map((doc, idx) => (
              <motion.div 
                key={doc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group flex flex-col items-center text-center"
              >
                <div className="w-48 h-48 rounded-full overflow-hidden mb-8 border-8 border-slate-50 shadow-xl group-hover:scale-105 transition-transform">
                  <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'var(--font-outfit)' }}>{doc.name}</h3>
                <div className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-6">{doc.qualifications}</div>
                <p className="text-slate-600 mb-10 leading-relaxed">
                  Leading with over 15 years of excellence, {doc.name.split(' ')[1]} has pioneered advanced medical practices in Raipur.
                </p>
                <Link href={`/doctors/${doc.id === 'dr-varun' ? 'dr-varun' : 'dr-neha'}`}>
                  <Button className="rounded-2xl px-8 h-14">View {doc.name.split(' ')[1]}'s Journey <ArrowRight className="ml-2 w-5 h-5" /></Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Trust Pillars */}
      <section className="section-padding bg-white">
        <div className="main-container">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "Excellence", desc: "Award-winning orthopedic procedures" },
              { icon: ShieldCheck, title: "Trust", desc: "10k+ satisfied patients and families" },
              { icon: CheckCircle2, title: "Precision", desc: "100% accurate pathology diagnostics" },
              { icon: Users, title: "Compassion", desc: "Patient-first care approach" }
            ].map((pillar, i) => (
              <div key={i} className="text-center p-8 rounded-[3rem] bg-slate-50 border border-slate-100">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mx-auto mb-6 text-teal-600">
                  <pillar.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{pillar.title}</h4>
                <p className="text-slate-500">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="section-padding">
        <div className="main-container">
          <div className="bg-[#0F5B5D] rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, #ffffff 0%, transparent 40%)' }} />
             <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10" style={{ fontFamily: 'var(--font-outfit)' }}>Ready to experience <br />world-class care?</h2>
             <Link href="/appointment" className="relative z-10 inline-block">
               <Button variant="secondary" className="bg-white text-[#0F5B5D] hover:bg-teal-50 h-16 px-12 rounded-2xl text-xl font-bold shadow-2xl border-0">
                 Book Your Visit Today
               </Button>
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
