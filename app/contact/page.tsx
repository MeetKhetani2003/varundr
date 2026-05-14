'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight, Share2 } from 'lucide-react';
import { BRAND, handleImageFallback, fadeUpVariant, staggerContainer } from '../lib/constants';
import { SectionHeading, Button } from '../components/UIElements';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Cinematic Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200" alt="Contact Bg" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>
        <div className="main-container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-400 text-sm font-bold uppercase tracking-[0.3em] mb-6">Contact Us</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight mb-8" style={{ fontFamily: 'var(--font-outfit)' }}>
              We're Here to <span className="font-bold" style={{ color: BRAND.teal }}>Help You</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Reach out to Raipur's most trusted orthopedic and diagnostic centre. Whether it's an emergency or a routine check-up, we are just a call away.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Contact Info Cards */}
      <section className="section-padding">
        <div className="main-container">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Phone, title: "Emergency & OP", info1: "+91 77010-10703", info2: "+91 77010-10704", color: "bg-teal-50 text-teal-600" },
              { icon: MapPin, title: "Our Location", info1: "Amaseoni, Vidhan Sabha Road", info2: "Near Swarnbhoomi, Raipur (C.G.)", color: "bg-red-50 text-red-600" },
              { icon: Mail, title: "Email Support", info1: "raipurcareplus@gmail.com", info2: "info@careplusraipur.com", color: "bg-blue-50 text-blue-600" }
            ].map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-2xl hover:border-white transition-all"
              >
                <div className={`w-16 h-16 rounded-2xl ${card.color} flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform`}>
                  <card.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{card.title}</h3>
                <p className="text-lg text-slate-600 font-medium">{card.info1}</p>
                <p className="text-lg text-slate-600 font-medium">{card.info2}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Interactive Map & Working Hours */}
      <section className="section-padding bg-slate-50">
        <div className="main-container">
          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            {/* Left: Map */}
            <div className="lg:col-span-8 rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white min-h-[500px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.525547630761!2d81.7063467750378!3d21.25066928003666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c3664d50f55f%3A0xc3c9448f80456565!2sCare%20Plus%20Healthcentre!5e0!3m2!1sen!2sin!4v1715668000000!5m2!1sen!2sin" 
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            
            {/* Right: Working Hours */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              <div className="bg-slate-950 text-white p-12 rounded-[4rem] flex-1 shadow-2xl">
                <Clock className="w-12 h-12 text-teal-400 mb-8" />
                <h3 className="text-3xl font-bold mb-8">OPD Hours</h3>
                <ul className="space-y-6">
                  <li className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-slate-400">Monday - Saturday</span>
                    <span className="font-bold text-teal-400">10:00 - 20:00</span>
                  </li>
                  <li className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-slate-400">Sunday</span>
                    <span className="font-bold text-red-400">Closed</span>
                  </li>
                  <li className="flex justify-between items-center pt-4">
                    <span className="text-slate-400 font-bold">EMERGENCY</span>
                    <span className="font-bold text-red-500 animate-pulse">24 / 7</span>
                  </li>
                </ul>
              </div>
              
              <Link href="/appointment" className="group">
                <div className="bg-teal-600 p-10 rounded-[3rem] text-white flex items-center justify-between group-hover:bg-teal-700 transition-colors">
                  <div>
                    <div className="text-sm font-bold uppercase tracking-widest opacity-70 mb-2">Ready to visit?</div>
                    <div className="text-2xl font-bold">Book Appointment</div>
                  </div>
                  <ArrowRight className="w-10 h-10 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Social Links & CTA */}
      <section className="section-padding">
        <div className="main-container text-center">
          <SectionHeading subtitle="Stay Connected" title="Follow Our Health Updates" centered />
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {[
              { name: "Facebook", icon: Share2 },
              { name: "Instagram", icon: Share2 },
              { name: "Twitter", icon: Share2 },
              { name: "WhatsApp", icon: MessageCircle }
            ].map((social, i) => (
              <Button key={i} variant="secondary" className="rounded-2xl px-8 h-16 border-slate-200 text-slate-700 hover:bg-slate-50">
                <social.icon className="w-5 h-5 mr-3" /> {social.name}
              </Button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
