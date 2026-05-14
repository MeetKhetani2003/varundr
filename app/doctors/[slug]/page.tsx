'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Award, CheckCircle2, Calendar, Star, Clock, MapPin, ChevronRight, GraduationCap } from 'lucide-react';
import { DOCTORS_DATA } from '../../lib/doctors-data';
import { BRAND, handleImageFallback, modernEase, fadeUpVariant, staggerContainer } from '../../lib/constants';
import { Button, SectionHeading } from '../../components/UIElements';
import Link from 'next/link';

export default function DoctorJourneyPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const doctor = DOCTORS_DATA[slug];

  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Doctor Not Found</h1>
          <Button onClick={() => router.push('/doctors')}>Back to Doctors</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Profile Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 opacity-40">
           <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200" alt="Doctor Hero Bg" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-slate-950/60" />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>
        
        <div className="main-container relative z-10">
          <Link href="/doctors" className="inline-flex items-center gap-2 text-teal-400 font-bold mb-12 hover:gap-4 transition-all">
            <ArrowLeft className="w-5 h-5" /> Back to Specialists
          </Link>

          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-[4rem] overflow-hidden border-8 border-white/5 shadow-2xl relative z-10">
                  <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                </div>
                {/* Floating Experience Badge */}
                <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-[2.5rem] shadow-2xl z-20">
                  <div className="text-4xl font-bold text-teal-600 mb-1">15+</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Years of Excellence</div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-7">
              <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                <motion.div variants={fadeUpVariant} className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-400 text-sm font-bold uppercase tracking-[0.3em] mb-6">Medical Leader</motion.div>
                <motion.h1 variants={fadeUpVariant} className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-outfit)' }}>
                  {doctor.name}
                </motion.h1>
                <motion.div variants={fadeUpVariant} className="text-2xl text-teal-400 font-bold mb-8">{doctor.qualifications}</motion.div>
                <motion.p variants={fadeUpVariant} className="text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl">
                  {doctor.bio}
                </motion.p>
                
                <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-8 py-8 border-y border-white/10 mb-10">
                  <div className="flex items-center gap-3">
                    <Star className="text-yellow-400 fill-current w-6 h-6" />
                    <span className="text-white font-bold">4.9/5 Patient Rating</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="text-teal-400 w-6 h-6" />
                    <span className="text-white font-bold">Certified Specialist</span>
                  </div>
                </motion.div>

                <motion.div variants={fadeUpVariant}>
                  <Link href={`/appointment?doctor=${doctor.id}`}>
                    <Button className="h-16 px-10 rounded-2xl text-lg group">
                      Book Consultation with {doctor.name.split(' ')[1]}
                      <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Professional Journey (Timeline) */}
      <section className="section-padding bg-slate-50">
        <div className="main-container max-w-4xl">
          <SectionHeading subtitle="Professional Evolution" title="The Journey of Excellence" centered />
          
          <div className="relative mt-20">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-16">
              {doctor.journey.map((item: any, i: number) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="inline-block px-4 py-1 rounded-full bg-teal-600 text-white text-sm font-bold mb-4">{item.year}</div>
                    <p className="text-xl text-slate-700 font-medium leading-relaxed">{item.event}</p>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-teal-600 rounded-full border-4 border-white shadow-lg -translate-x-1/2 hidden md:block" />
                  
                  <div className="w-full md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Expertise & Achievements */}
      <section className="section-padding bg-white">
        <div className="main-container">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-12" style={{ fontFamily: 'var(--font-outfit)' }}>Core Expertise</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {doctor.expertise.map((skill: string, i: number) => (
                  <div key={i} className="flex items-center gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-slate-800">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-12" style={{ fontFamily: 'var(--font-outfit)' }}>Key Achievements</h2>
              <div className="space-y-6">
                {doctor.achievements.map((ach: string, i: number) => (
                  <div key={i} className="flex items-start gap-6 p-6 rounded-3xl bg-slate-900 text-white">
                    <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                      <Award className="w-7 h-7" />
                    </div>
                    <div className="text-xl font-medium">{ach}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom Booking Section */}
      <section className="section-padding bg-slate-50">
        <div className="main-container max-w-5xl">
          <div className="bg-white rounded-[4rem] p-12 md:p-20 shadow-xl border border-slate-100 flex flex-col md:flex-row items-center gap-12">
            <div className="w-40 h-40 rounded-full overflow-hidden shrink-0 border-4 border-slate-50">
               <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'var(--font-outfit)' }}>Consult {doctor.name}</h2>
              <p className="text-lg text-slate-500 mb-8">Take the first step towards recovery. Book a personalized consultation today.</p>
              <Link href={`/appointment?doctor=${doctor.id}`}>
                <Button className="h-16 px-12 rounded-2xl text-xl">Confirm Appointment</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
