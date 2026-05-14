'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, MessageCircle, Calendar, ChevronRight } from 'lucide-react';
import { SERVICES_DATA } from '../../lib/services-data';
import { BRAND, handleImageFallback, modernEase, fadeUpVariant, staggerContainer } from '../../lib/constants';
import { Button, SectionHeading } from '../../components/UIElements';
import Link from 'next/link';

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const service = SERVICES_DATA[slug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Button onClick={() => router.push('/services')}>Back to Services</Button>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Header */}
      <section className="relative pt-40 pb-32 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 opacity-30">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950" />
        </div>
        
        <div className="container relative z-10 px-4 mx-auto">
          <Link href="/services" className="inline-flex items-center gap-2 text-teal-400 font-bold mb-12 hover:gap-4 transition-all">
            <ArrowLeft className="w-5 h-5" /> Back to Services
          </Link>
          
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="w-20 h-20 rounded-[2rem] bg-teal-500/20 text-teal-400 flex items-center justify-center mb-8 border border-teal-500/30">
                <Icon className="w-10 h-10" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-outfit)' }}>
                {service.title}
              </h1>
              <p className="text-2xl text-slate-400 font-medium mb-10 leading-relaxed">
                {service.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/appointment">
                  <Button className="h-16 px-10 rounded-2xl text-lg">Book Service Appointment</Button>
                </Link>
                <Button variant="secondary" onClick={() => window.open('https://wa.me/917701010703', '_blank')} className="bg-white/10 border-white/20 text-white h-16 px-10 rounded-2xl text-lg hover:bg-white/20">
                  Enquire via WhatsApp
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Content Section */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Left: Detailed Info */}
            <div className="lg:col-span-7">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                <h2 className="text-4xl font-bold text-slate-900 mb-8" style={{ fontFamily: 'var(--font-outfit)' }}>Service Overview</h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-12">
                  {service.description}
                </p>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Specializations</h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-16">
                  {service.features.map((feature: string, i: number) => (
                    <motion.div key={i} variants={fadeUpVariant} className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 group hover:bg-teal-600 hover:text-white transition-all">
                      <CheckCircle2 className="w-6 h-6 text-teal-600 group-hover:text-white" />
                      <span className="font-bold text-lg">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-[#E6F0F0] rounded-[3rem] p-10 border border-[#0F5B5D]/10">
                  <h3 className="text-2xl font-bold text-slate-900 mb-8" style={{ fontFamily: 'var(--font-outfit)' }}>Frequently Asked Questions</h3>
                  <div className="space-y-6">
                    {service.faqs.map((faq: any, i: number) => (
                      <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <div className="font-bold text-slate-900 mb-3 text-lg">{faq.q}</div>
                        <p className="text-slate-600">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Sidebar / Stats */}
            <div className="lg:col-span-5">
              <div className="sticky top-32 space-y-8">
                <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[400px]">
                  <img src={service.image} alt="Service Detail" className="w-full h-full object-cover" />
                </div>
                
                <div className="bg-slate-950 text-white p-10 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                  <h3 className="text-2xl font-bold mb-6">Service Benefits</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-teal-500" /> Advanced Diagnostic Tech
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-teal-500" /> Specialized Expertise
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-teal-500" /> Patient-Centric Approach
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-teal-500" /> Zero-Wait Time Guarantee
                    </li>
                  </ul>
                  <hr className="my-8 border-white/10" />
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">Need immediate help?</div>
                      <div className="font-bold">+91 77010-10703</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CTA Bottom */}
      <section className="pb-32">
        <div className="container px-4 mx-auto">
          <div className="bg-slate-50 rounded-[4rem] p-16 flex flex-col md:flex-row items-center justify-between gap-10 border border-slate-100">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'var(--font-outfit)' }}>Start your healing <br />journey today.</h2>
              <p className="text-xl text-slate-500">Expert medical care is just a booking away.</p>
            </div>
            <Link href="/appointment">
              <Button className="h-16 px-12 rounded-2xl text-xl flex items-center gap-2">Book Appointment <ChevronRight className="w-6 h-6" /></Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
