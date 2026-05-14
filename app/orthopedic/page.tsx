'use client';

import React from 'react';
import { Bone, ArrowRight, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import Link from 'next/link';
import { BRAND, handleImageFallback, fadeUpVariant, staggerContainer, modernEase } from '../lib/constants';
import { SectionHeading, Button } from '../components/UIElements';
import { motion } from 'framer-motion';

export default function OrthopedicPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Cinematic Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200" alt="Orthopedic Care" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>
        
        <div className="container relative z-10 px-4 mx-auto">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            <motion.div variants={fadeUpVariant} className="w-20 h-20 rounded-[2rem] bg-teal-500/20 text-teal-400 flex items-center justify-center mb-8 border border-teal-500/30">
              <Bone className="w-10 h-10" />
            </motion.div>
            <motion.h1 variants={fadeUpVariant} className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-outfit)' }}>
              Advanced <br /><span className="text-teal-400">Orthopedic Care</span>
            </motion.h1>
            <motion.p variants={fadeUpVariant} className="text-2xl text-slate-400 font-medium mb-10 leading-relaxed">
              Led by Dr. Varun Goel, we provide Raipur's most advanced solutions for bone, joint, and spinal health.
            </motion.p>
            <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4">
              <Link href="/appointment">
                <Button className="h-16 px-10 rounded-2xl text-lg">Book Consultation</Button>
              </Link>
              <Button variant="secondary" onClick={() => window.open('https://wa.me/917701010703', '_blank')} className="bg-white/10 border-white/20 text-white h-16 px-10 rounded-2xl text-lg hover:bg-white/20">
                Contact Trauma Center
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Detailed Info */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <SectionHeading subtitle="Specialty Department" title="Restoring Mobility with Surgical Precision" />
              <p className="text-xl text-slate-600 leading-relaxed mb-10">
                Our orthopedic department utilizes the latest minimally invasive techniques to ensure faster recovery times and better clinical outcomes for our patients.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {[
                  { title: "Joint Replacement", desc: "Knee, Hip & Shoulder" },
                  { title: "Trauma Care", desc: "24/7 Fracture Support" },
                  { title: "Arthroscopy", desc: "Sports Injury Specialist" },
                  { title: "Spine Surgery", desc: "Advanced Neuro-Ortho Care" }
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeUpVariant} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 group hover:bg-teal-600 hover:text-white transition-all">
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-slate-500 group-hover:text-teal-50">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" alt="Orthopedics" className="rounded-[4rem] shadow-2xl h-[600px] w-full object-cover" />
              <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100">
                <div className="flex items-center gap-4 mb-4">
                  <ShieldCheck className="w-8 h-8 text-teal-600" />
                  <div className="font-bold text-slate-900">100% Success Rate</div>
                </div>
                <p className="text-sm text-slate-500">In primary knee replacements over the last 5 years.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
