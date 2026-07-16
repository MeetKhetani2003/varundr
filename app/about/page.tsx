'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Microscope, Building, HeartPulse, ArrowRight, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { BRAND, DOCTORS, handleImageFallback, fadeUpVariant, staggerContainer, modernEase } from '../lib/constants';
import { Button, SectionHeading } from '../components/UIElements';
import { useAppointment } from '../lib/AppointmentContext';
import { GraduationCap, Microscope as MicroscopeIcon } from 'lucide-react';

export default function AboutPage() {
  const { openModal } = useAppointment();
  return (
    <div className="bg-white">
      {/* 1. Hero / Header Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=1200" alt="About Legacy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>
        <div className="main-container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-400 text-sm font-bold uppercase tracking-[0.3em] mb-6">Our Legacy</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight mb-8" style={{ fontFamily: 'var(--font-outfit)' }}>
              A Legacy of <br />
              <span className="font-bold" style={{ color: BRAND.teal }}>Healing & Trust</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Founded on the principles of clinical excellence and compassionate care, Care Plus Healthcentre has been Raipur's benchmark for orthopedic and diagnostic precision since its launch in March 2026.
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
                      To provide the best, accessible, and compassionate healthcare. We believe in accurate diagnosis and effective treatment plans delivered in an environment that promotes fast recovery.
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
                      To be the most trusted healthcare destination in Raipur, Chhattisgarh, known for clinical excellence, cutting-edge infrastructure, and unwavering patient commitment.
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
              <img src="/images/healthcare.png" alt="Clinic Interior" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-xl rounded-[2.5rem] border border-white/20">
                <div className="text-white text-2xl font-bold mb-2">State-of-the-Art Facility</div>
                <p className="text-slate-200">Equipped with the latest technology for orthopedic surgery and pathology diagnostics.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Meet the Founders - Alternating Journey */}
      <section className="section-padding bg-slate-50 overflow-hidden">
        <div className="main-container">
          <SectionHeading subtitle="Leadership & Legacy" title="The Hands Behind the Healing" centered />

          <div className="space-y-32 mt-24">
            {/* Founder 1: Dr. Varun */}
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2 relative"
              >
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                  <img src={DOCTORS[0].image} alt={DOCTORS[0].name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-10 -right-10 md:right-10 bg-white p-6 rounded-3xl shadow-xl z-20 border border-slate-100 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 leading-tight">{DOCTORS[0].name}</div>
                    <div className="text-xs font-bold text-slate-300 uppercase tracking-widest">Founder & Chief Surgeon</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight" style={{ fontFamily: 'var(--font-outfit)' }}>
                  Healing Hands / <br />Modern Precision.
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-10">
                  {DOCTORS[0].name} began his journey in orthopedics with a clear vision—to bring advanced, evidence-based surgical services to Raipur with a focus on long-term recovery, not just temporary relief.
                </p>

                <div className="grid sm:grid-cols-2 gap-8 mb-10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-teal-600">
                      <GraduationCap className="w-6 h-6" />
                      <span className="font-bold text-slate-900">Early Foundation</span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Completed MS Ortho in 2008 followed by clinical fellowship at Apollo Hospital, Bangalore under renowned mentors.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-teal-600">
                      <Award className="w-6 h-6" />
                      <span className="font-bold text-slate-900">Specialized Training</span>
                    </div>
                    <ul className="text-slate-500 text-sm space-y-1">
                      <li>• Joint Replacement Specialist</li>
                      <li>• Trauma & Reconstruction</li>
                      <li>• Arthroscopy Certification</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm mb-10">
                  <div className="flex items-center gap-3 text-teal-600 mb-4">
                    <HeartPulse className="w-6 h-6" />
                    <span className="font-bold text-slate-900">Current Association</span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Currently associated with **Care Plus Healthcentre**, Raipur, where he leads a state-of-the-art orthopedic department equipped with advanced surgical protocols.
                  </p>
                </div>

                <blockquote className="text-xl italic text-slate-500 border-l-4 border-teal-500 pl-6 py-2">
                  "His vision is to build one of the most trusted orthopedic networks in Chhattisgarh, combining clinical excellence with compassionate care."
                </blockquote>
              </motion.div>
            </div>

            {/* Founder 2: Dr. Neha (Alternated) */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2 relative"
              >
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                  <img src={DOCTORS[1].image} alt={DOCTORS[1].name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-10 -left-10 md:left-10 bg-white p-6 rounded-3xl shadow-xl z-20 border border-slate-100 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 leading-tight">{DOCTORS[1].name}</div>
                    <div className="text-xs font-bold text-slate-300 uppercase tracking-widest">Co-Founder & Pathologist</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight" style={{ fontFamily: 'var(--font-outfit)' }}>
                  Diagnostics / <br />Precision Science.
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-10">
                  {DOCTORS[1].name} established the pathology division at Care Plus with a singular goal—to provide diagnostic reports that clinicians can trust implicitly for life-critical decisions.
                </p>

                <div className="grid sm:grid-cols-2 gap-8 mb-10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-teal-600">
                      <GraduationCap className="w-6 h-6" />
                      <span className="font-bold text-slate-900">Academic Excellence</span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Gold medalist in MD Pathology, with specialized training in Molecular Diagnostics and Hematology.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-teal-600">
                      <Microscope className="w-6 h-6" />
                      <span className="font-bold text-slate-900">Lab Leadership</span>
                    </div>
                    <ul className="text-slate-500 text-sm space-y-1">
                      <li>• Rigorous Quality Standards</li>
                      <li>• Automated Bio-Chemistry</li>
                      <li>• Advanced Cytology</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm mb-10">
                  <div className="flex items-center gap-3 text-teal-600 mb-4">
                    <Building className="w-6 h-6" />
                    <span className="font-bold text-slate-900">Centre of Excellence</span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    She leads the state-of-the-art pathology lab at **Care Plus**, ensuring zero-error reporting and rapid turnaround times for all diagnostic tests.
                  </p>
                </div>

                <blockquote className="text-xl italic text-slate-500 border-l-4 border-teal-500 pl-6 py-2">
                  "Her mission is to bridge the gap between complex symptoms and accurate medical intervention through the power of diagnostics."
                </blockquote>
              </motion.div>
            </div>
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
      <section className="pt-20 pb-32">
        <div className="main-container">
          <div className="bg-brand-teal rounded-[3rem] md:rounded-[5rem] p-12 md:py-32 md:px-24 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, #ffffff 0%, transparent 40%)' }} />
            <h2 className="text-3xl md:text-6xl font-bold mb-8 relative z-10" style={{ fontFamily: 'var(--font-outfit)' }}>Ready to experience <br />top class healthcare?</h2>
            <Button onClick={() => openModal()} variant="secondary" className="bg-white text-brand-teal hover:bg-teal-50 h-16 px-12 rounded-2xl text-xl font-bold shadow-2xl border-0 relative z-10">
              Book Your Visit Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
