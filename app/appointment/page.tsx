'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Phone, MessageCircle, Calendar, Clock, MapPin, CheckCircle2, User, ChevronRight, ArrowRight } from 'lucide-react';
import { BRAND, handleImageFallback, fadeUpVariant, staggerContainer } from '../lib/constants';
import { SectionHeading, Button } from '../components/UIElements';
import { motion } from 'framer-motion';

import { AppointmentForm as SharedForm } from '../components/AppointmentForm';

function AppointmentForm() {
  const searchParams = useSearchParams();
  const selectedDoctor = searchParams.get('doctor') || '';

  return (
    <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.08)] border border-slate-100 relative z-10 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      <SharedForm initialDoctor={selectedDoctor} />
    </div>
  );
}

export default function AppointmentPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200" alt="Appointment Bg" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>
        <div className="main-container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-400 text-sm font-bold uppercase tracking-[0.3em] mb-6">Priority Booking</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight mb-8" style={{ fontFamily: 'var(--font-outfit)' }}>
              Schedule Your <span className="font-bold" style={{ color: BRAND.teal }}>Consultation</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Skip the queue by booking your appointment in advance. Our specialists ensure personalized attention for every patient.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="main-container relative z-10 -mt-16 mb-32">

          <Suspense fallback={<div className="h-[600px] bg-white rounded-[4rem] animate-pulse" />}>
            <AppointmentForm />
          </Suspense>

          <div className="mt-20 grid md:grid-cols-3 gap-10">
            {[
              { icon: Clock, title: "Zero Wait Time", desc: "For pre-booked slots" },
              { icon: MapPin, title: "Central Location", desc: "Easily accessible in Raipur" },
              { icon: Phone, title: "Helpdesk", desc: "Dedicated patient support" }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center p-10 bg-white/50 backdrop-blur-md rounded-[3rem] border border-white/20">
                <div className="w-16 h-16 rounded-2xl bg-teal-600 text-white flex items-center justify-center mb-6 shadow-xl shadow-teal-600/20">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-500">{feature.desc}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
