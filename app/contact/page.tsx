'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight, Share2, Calendar } from 'lucide-react';
import { BRAND, handleImageFallback, fadeUpVariant, staggerContainer } from '../lib/constants';
import { SectionHeading, Button } from '../components/UIElements';
import { useAppointment } from '../lib/AppointmentContext';
import { AppointmentForm } from '../components/AppointmentForm';
import Link from 'next/link';

export default function ContactPage() {
  const { openModal } = useAppointment();
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Cinematic Header */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200" alt="Contact Bg" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>
        <div className="main-container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-400 text-sm font-bold uppercase tracking-[0.3em] mb-6">Contact Us</span>
            <h1 className="text-6xl md:text-8xl font-light text-white leading-tight mb-8" style={{ fontFamily: 'var(--font-outfit)' }}>
              Get in <span className="font-bold text-teal-400">Touch</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Reach out to Raipur's most trusted orthopedic and diagnostic centre. Whether it's an emergency or a routine check-up, we are just a call away.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Contact Info Cards */}
      <section className="section-padding">
        <div className="main-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Phone, title: "Emergency & OP", info1: "+91 77010-10703", info2: "+91 77010-10704", color: "bg-teal-50 text-teal-600" },
              { icon: MapPin, title: "Our Location", info1: "Amaseoni, Vidhan Sabha Road", info2: "Next to Swarnbhoomi Colony, Raipur", color: "bg-red-50 text-red-600", href: "https://share.google/Yyl6oPd2XqbLlKgkD" },
              { icon: Clock, title: "Clinic & Lab Hours", info1: "Monday - Sunday", info2: "9:00 AM - 8:00 PM", color: "bg-yellow-50 text-yellow-600" },
              { icon: Clock, title: "Ortho Consultation", info1: "Monday - Sunday", info2: "1:00 PM - 8:00 PM", color: "bg-purple-50 text-purple-600" }
            ].map((card, i) => {
              const CardContent = (
                <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-2xl hover:border-white transition-all text-center h-full flex flex-col justify-center cursor-default">
                  <div className={`w-14 h-14 rounded-2xl ${card.color} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform mx-auto`}>
                    <card.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                  <p className="text-base text-slate-600 font-medium">{card.info1}</p>
                  <p className="text-base text-slate-600 font-medium">{card.info2}</p>
                </div>
              );

              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="h-full"
                >
                  {card.href ? (
                    <a href={card.href} target="_blank" rel="noopener noreferrer" className="block cursor-pointer h-full">
                      {CardContent}
                    </a>
                  ) : (
                    CardContent
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Interactive Map & Appointment Form */}
      <section className="section-padding bg-slate-50">
        <div className="main-container">
          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            {/* Left: Contact Details & Map */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 h-full flex flex-col">
                <SectionHeading subtitle="Visit Us" title="Find Our Clinic" />
                <p className="text-slate-600 mb-6">
                  Located near Swarnbhoomi Colony on Vidhan Sabha Road in Raipur. Click the button below to navigate directly on your phone.
                </p>

                <a 
                  href="https://share.google/Yyl6oPd2XqbLlKgkD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-6 inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl shadow-lg shadow-teal-600/10 text-sm transition-all"
                >
                  <MapPin className="w-4 h-4" /> Open in Google Maps / Navigate
                </a>
                
                <div className="flex-1 rounded-3xl overflow-hidden shadow-inner border border-slate-100 min-h-[350px] relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3717.75753067609!2d81.70476957526355!3d21.281063380432105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDE2JzUxLjgiTiA4McKwNDInMjYuNCJF!5e0!3m2!1sen!2sin!4v1784007062004!5m2!1sen!2sin" 
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
            
            {/* Right: Appointment Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl" />
                <div className="flex items-center gap-6 mb-12">
                  <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                    <Calendar className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900" style={{ fontFamily: 'var(--font-outfit)' }}>Book Your Appointment</h3>
                    <p className="text-slate-500">Fill in the details for a priority consultation.</p>
                  </div>
                </div>

                <AppointmentForm isDark={false} />
              </div>
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
              { 
                name: "Facebook", 
                icon: (props: any) => <svg {...props} fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
                color: "hover:bg-[#1877F2] hover:text-white",
                href: "https://www.facebook.com/share/1CzitrHvtM/"
              },
              { 
                name: "Instagram", 
                icon: (props: any) => <svg {...props} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>,
                color: "hover:bg-[#E4405F] hover:text-white",
                href: "https://www.instagram.com/drvarungoelmsorthoraipur?igsh=MXJmdnVyaHFvNHBxMw==&utm_source=ig_contact_invite"
              },
              { 
                name: "WhatsApp", 
                icon: MessageCircle,
                color: "hover:bg-[#25D366] hover:text-white",
                href: "https://wa.me/917701010703"
              }
            ].map((social, i) => (
              <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="secondary" className={`rounded-2xl px-8 h-16 border-slate-200 text-slate-700 transition-all ${social.color} cursor-pointer`}>
                  <social.icon className="w-6 h-6 mr-3" /> {social.name}
                </Button>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
