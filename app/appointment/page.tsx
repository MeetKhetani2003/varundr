'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Phone, MessageCircle, Calendar, Clock, MapPin, CheckCircle2, User, ChevronRight, ArrowRight } from 'lucide-react';
import { BRAND, handleImageFallback, fadeUpVariant, staggerContainer } from '../lib/constants';
import { SectionHeading, Button } from '../components/UIElements';
import { motion } from 'framer-motion';

function AppointmentForm() {
  const searchParams = useSearchParams();
  const selectedDoctor = searchParams.get('doctor') || '';

  return (
    <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.08)] border border-slate-100 relative z-10 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      
      <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
        {/* Row 1: Name & Number */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <label className="text-sm font-black text-slate-400 ml-4 uppercase tracking-[0.2em]">Patient Full Name</label>
            <div className="relative group">
              <User className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5 group-focus-within:text-teal-600 transition-colors" />
              <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-3xl pl-16 pr-8 py-5 focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-600 transition-all font-bold text-slate-900 placeholder:text-slate-300" placeholder="e.g. Rahul Sharma" />
            </div>
          </div>
          <div className="space-y-4">
            <label className="text-sm font-black text-slate-400 ml-4 uppercase tracking-[0.2em]">Phone Number</label>
            <div className="relative group">
              <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5 group-focus-within:text-teal-600 transition-colors" />
              <input type="tel" className="w-full bg-slate-50 border border-slate-100 rounded-3xl pl-16 pr-8 py-5 focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-600 transition-all font-bold text-slate-900 placeholder:text-slate-300" placeholder="+91 00000 00000" />
            </div>
          </div>
        </div>

        {/* Row 2: Email */}
        <div className="space-y-4">
          <label className="text-sm font-black text-slate-400 ml-4 uppercase tracking-[0.2em]">Email Address</label>
          <div className="relative group">
            <MessageCircle className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5 group-focus-within:text-teal-600 transition-colors" />
            <input type="email" className="w-full bg-slate-50 border border-slate-100 rounded-3xl pl-16 pr-8 py-5 focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-600 transition-all font-bold text-slate-900 placeholder:text-slate-300" placeholder="rahul@example.com" />
          </div>
        </div>

        {/* Row 3: Service & Doctor */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <label className="text-sm font-black text-slate-400 ml-4 uppercase tracking-[0.2em]">Select Service</label>
            <div className="relative group">
              <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 z-10 group-focus-within:text-teal-600 transition-colors">
                <Calendar className="w-5 h-5" />
              </div>
              <select className="w-full bg-slate-50 border border-slate-100 rounded-3xl pl-16 pr-8 py-5 focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-600 transition-all font-bold text-slate-900 appearance-none relative z-0">
                <option value="">Choose Service...</option>
                <option value="orthopedics">Orthopedic Consultation</option>
                <option value="pathology">Pathology / Blood Test</option>
                <option value="joint-replacement">Joint Replacement</option>
                <option value="sports-medicine">Sports Medicine</option>
                <option value="trauma">Trauma Care</option>
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none z-10 text-slate-300">
                <ChevronRight className="w-5 h-5 rotate-90" />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <label className="text-sm font-black text-slate-400 ml-4 uppercase tracking-[0.2em]">Preferred Doctor</label>
            <div className="relative group">
              <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 z-10 group-focus-within:text-teal-600 transition-colors">
                <User className="w-5 h-5" />
              </div>
              <select 
                defaultValue={selectedDoctor}
                className="w-full bg-slate-50 border border-slate-100 rounded-3xl pl-16 pr-8 py-5 focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-600 transition-all font-bold text-slate-900 appearance-none relative z-0"
              >
                <option value="">Choose Doctor...</option>
                <option value="dr-varun">Dr. Varun Goel (Orthopedics)</option>
                <option value="dr-neha">Dr. Neha Goel (Pathology)</option>
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none z-10 text-slate-300">
                <ChevronRight className="w-5 h-5 rotate-90" />
              </div>
            </div>
          </div>
        </div>

        {/* Row 4: Message */}
        <div className="space-y-4">
          <label className="text-sm font-black text-slate-400 ml-4 uppercase tracking-[0.2em]">Additional Message</label>
          <textarea rows={4} className="w-full bg-slate-50 border border-slate-100 rounded-[2.5rem] px-8 py-6 focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-600 transition-all font-bold text-slate-900 resize-none placeholder:text-slate-300" placeholder="Briefly describe your symptoms or specific requirements..."></textarea>
        </div>

        <div className="pt-10 flex flex-col md:flex-row gap-8 items-center justify-between border-t border-slate-50">
          <Button className="w-full md:w-auto h-20 px-16 text-xl rounded-3xl shadow-2xl shadow-teal-950/20 hover:scale-105 transition-transform active:scale-95 group">
            Request Appointment <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Button>

          <div className="flex items-center gap-6 text-xs font-black text-slate-300 uppercase tracking-[0.3em]">
            <span>OR FAST BOOK</span>
            <Button variant="secondary" onClick={() => window.open('https://wa.me/917701010703', '_blank')} className="bg-[#25D366] text-white hover:bg-[#1eb954] border-none px-8 h-14 rounded-2xl shadow-lg shadow-green-500/10">
              <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default function AppointmentPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200" alt="Appointment Bg" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-400 text-sm font-bold uppercase tracking-[0.3em] mb-6">Priority Booking</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight mb-8" style={{ fontFamily: 'var(--font-outfit)' }}>
              Schedule Your <span className="font-bold" style={{ color: BRAND.teal }}>Consultation</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Skip the queue by booking your appointment in advance. Our specialists ensure personalized attention for every patient.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container px-4 relative z-10 mx-auto -mt-16 mb-32">

          <Suspense fallback={<div className="h-[600px] bg-white rounded-[4rem] animate-pulse" />}>
            <AppointmentForm />
          </Suspense>

          <div className="mt-20 grid md:grid-cols-3 gap-10">
            {[
              { icon: Clock, title: "Zero Wait Time", desc: "For pre-booked slots" },
              { icon: MapPin, title: "Central Location", desc: "Easily accessible in Raipur" },
              { icon: Phone, title: "24/7 Support", desc: "Dedicated patient helpdesk" }
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
