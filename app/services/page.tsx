'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Bone, Microscope, Activity, UserCircle2, Syringe, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { BRAND, modernEase } from '../lib/constants';
import { SectionHeading } from '../components/UIElements';

export default function ServicesPage() {
  const allServices = [
    { id: 'orthopedic', title: 'Orthopedic Care', icon: Bone, desc: 'Comprehensive care for bones and joints.', href: '/orthopedic' },
    { id: 'pathology', title: 'Pathology Lab', icon: Microscope, desc: 'Advanced diagnostics and blood tests.', href: '/pathology' },
    { id: 'trauma', title: 'Trauma Care', icon: Activity, desc: 'Immediate medical attention for injuries.', href: '/orthopedic' },
    { id: 'xray', title: 'Digital X-Ray', icon: Activity, desc: 'High-resolution imaging services.', href: '/facilities' },
    { id: 'joint', title: 'Joint Replacement', icon: UserCircle2, desc: 'Surgical solutions for chronic joint pain.', href: '/orthopedic' },
    { id: 'pharmacy', title: 'In-house Pharmacy', icon: Syringe, desc: 'Readily available prescribed medications.', href: '/facilities' },
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <SectionHeading subtitle="Comprehensive Care" title="Our Medical Services" centered />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allServices.map((svc, idx) => (
            <motion.div
              key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05, ease: modernEase }}
              className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-slate-50 border border-slate-100" style={{ color: BRAND.teal }}>
                <svc.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{svc.title}</h3>
              <p className="text-slate-500 mb-6 text-lg">{svc.desc}</p>
              <Link href={svc.href} className="font-bold flex items-center gap-2 group-hover:gap-3 transition-all" style={{ color: BRAND.red }}>
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
