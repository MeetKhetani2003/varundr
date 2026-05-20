'use client';

import React from 'react';
import { Microscope, ArrowRight, CheckCircle2, ShieldCheck, Clock, FlaskConical } from 'lucide-react';
import Link from 'next/link';
import { BRAND, handleImageFallback, fadeUpVariant, staggerContainer, modernEase } from '../lib/constants';
import { SectionHeading, Button } from '../components/UIElements';
import { useAppointment } from '../lib/AppointmentContext';
import { motion } from 'framer-motion';

export default function PathologyPage() {
  const { openModal } = useAppointment();
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Cinematic Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200" alt="Pathology Lab" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>
        
        <div className="main-container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            <motion.div variants={fadeUpVariant} className="w-20 h-20 rounded-[2rem] bg-teal-500/20 text-teal-400 flex items-center justify-center mb-8 border border-teal-500/30">
              <Microscope className="w-10 h-10" />
            </motion.div>
            <motion.h1 variants={fadeUpVariant} className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight mb-8" style={{ fontFamily: 'var(--font-outfit)' }}>
              Precision <br /><span className="font-bold" style={{ color: BRAND.teal }}>Pathology</span>
            </motion.h1>
            <motion.p variants={fadeUpVariant} className="text-2xl text-slate-300 font-medium mb-10 leading-relaxed">
              Led by Dr. Neha Goel, our NABL-standard diagnostic lab provides the accuracy you can trust for your healing journey.
            </motion.p>
            <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4">
              <Button onClick={() => openModal('', 'Pathology / Blood Test')} className="h-16 px-10 rounded-2xl text-lg">Book Diagnostic Test</Button>
              <Button variant="secondary" onClick={() => window.open('https://wa.me/917701010703', '_blank')} className="bg-white/10 border-white/20 text-white h-16 px-10 rounded-2xl text-lg hover:bg-white/20">
                Home Sample Collection
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Detailed Info */}
      <section className="section-padding">
        <div className="main-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="order-2 lg:order-1">
              <SectionHeading subtitle="Specialty Department" title="Accuracy is the First Step to Recovery" />
              <p className="text-xl text-slate-600 leading-relaxed mb-10">
                Our lab is equipped with state-of-the-art automated analyzers ensuring rapid turnaround times and zero manual errors in your health reports.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {[
                  { title: "Histopathology", desc: "Expert Tissue Analysis" },
                  { title: "Cytology", desc: "Advanced Cell Studies" },
                  { title: "Hematology", desc: "Complete Blood Profile" },
                  { title: "Biochemistry", desc: "Precision Organ Testing" }
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeUpVariant} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 group hover:bg-teal-600 hover:text-white transition-all">
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-slate-500 group-hover:text-teal-50">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: -0 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" alt="Pathology" className="rounded-[4rem] shadow-2xl h-[600px] w-full object-cover" />
              <div className="absolute -top-10 -right-10 bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100">
                <div className="flex items-center gap-4 mb-4">
                  <FlaskConical className="w-8 h-8 text-teal-600" />
                  <div className="font-bold text-slate-900">NABL Standard</div>
                </div>
                <p className="text-sm text-slate-500">Highest quality benchmark in diagnostic testing.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
