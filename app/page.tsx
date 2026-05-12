'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight, Activity, Microscope,
  Bone, ArrowUpRight, Star, Quote,
  Award, Building, HeartPulse
} from 'lucide-react';
import Link from 'next/link';
import { BRAND, DOCTORS, handleImageFallback, staggerContainer, fadeUpVariant, HERO_SLIDES, modernEase } from './lib/constants';
import { Button, SectionHeading } from './components/UIElements';
import { AnimatePresence } from 'framer-motion';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 pt-24">

        {/* Premium Background Layer */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`bg-${slide.id}`}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: modernEase }}
            className="absolute inset-0 z-0"
          >
            <motion.div style={{ y }} className="absolute inset-0">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={slide.poster}
                className="w-full h-full object-cover object-center"
              >
                <source src={slide.video} type="video/mp4" />
              </video>

              {/* Better cinematic overlays */}
              <div className="absolute inset-0 bg-black/45 z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10 z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-10" />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="container relative z-20 mx-auto px-6 lg:px-10 h-full flex items-center">

          <div className="max-w-5xl">

            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${slide.id}`}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.18 }
                  },
                  exit: {
                    opacity: 0,
                    transition: { duration: 0.4 }
                  }
                }}
              >

                {/* Premium Badge */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.7 }
                    }
                  }}

                  className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-2xl border border-white/15 shadow-2xl text-[11px] font-medium tracking-[0.28em] uppercase mb-10 text-white"
                >
                  <span className="relative flex w-2.5 h-2.5">
                    <span
                      className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                      style={{ backgroundColor: BRAND.red }}
                    />
                    <span
                      className="relative inline-flex rounded-full w-2.5 h-2.5"
                      style={{ backgroundColor: BRAND.red }}
                    />
                  </span>

                  Excellence in Healthcare
                </motion.div>

                {/* Hero Title */}
                <motion.h1
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.7 }
                    }
                  }}
                  className="
text-5xl
sm:text-6xl
md:text-7xl
lg:text-[88px]
font-light
tracking-[-0.05em]
leading-[0.95]
text-white
mb-8
"
                  style={{
                    fontFamily: 'var(--font-outfit)'
                  }}
                >
                  {slide.title}

                  <span className="block mt-3">
                    <span
                      className="relative inline-block"
                      style={{ color: BRAND.teal }}
                    >
                      {slide.highlight}

                      <span
                        className="absolute -bottom-2 left-0 w-full h-4 opacity-20 rounded-full blur-xl"
                        style={{ backgroundColor: BRAND.teal }}
                      />
                    </span>
                  </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.7 }
                    }
                  }}
                  className="
              text-lg
              md:text-2xl
              text-white/80
              leading-relaxed
              max-w-2xl
              mb-12
              font-medium
            "
                >
                  {slide.description}
                </motion.p>

                {/* CTA Section */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.7 }
                    }
                  }}
                  className="
              flex
              flex-col
              sm:flex-row
              items-start
              sm:items-center
              gap-6
            "
                >

                  {/* Primary CTA */}
                  <Link href="/appointment">
                    <Button
                      className="
                  group
                  h-14
                  px-9
                  rounded-2xl
                  text-base
                  font-bold
                  shadow-2xl
                  hover:scale-[1.03]
                  transition-all
                  duration-300
                "
                    >
                      Book Appointment

                      <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>

                  {/* Specialists Card */}
                  <div
                    className="
                flex
                items-center
                gap-4
                px-5
                py-3
                rounded-2xl
                bg-white/10
                backdrop-blur-2xl
                border
                border-white/10
                shadow-xl
                hover:bg-white/15
                transition-all
                duration-300
              "
                  >

                    <div className="flex -space-x-3">
                      {DOCTORS.map((doc, i) => (
                        <img
                          key={i}
                          src={doc.image}
                          alt="Doctor"
                          onError={handleImageFallback}
                          className="
                      w-11
                      h-11
                      rounded-full
                      object-cover
                      border-2
                      border-white
                      shadow-lg
                      hover:scale-105
                      transition-transform
                      duration-300
                    "
                        />
                      ))}
                    </div>

                    <div className="leading-tight">
                      <span className="block text-[10px] uppercase tracking-[0.25em] text-white/50 font-bold mb-1">
                        Meet Our
                      </span>

                      <span className="text-sm font-extrabold text-white">
                        Specialists
                      </span>
                    </div>

                  </div>

                </motion.div>

              </motion.div>
            </AnimatePresence>

          </div>
        </div>
      </section>
      {/* 2. Quick Stats Banner */}
      <section className="relative z-30 -mt-10 mb-16 container px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant} className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 p-8 flex flex-wrap justify-between items-center gap-8 divide-x divide-slate-100">
          {[
            { num: '15+', label: 'Years Experience' },
            { num: '10k+', label: 'Happy Patients' },
            { num: '24/7', label: 'Emergency Support' },
            { num: '100%', label: 'Accurate Diagnostics' }
          ].map((stat, i) => (
            <div key={i} className="flex-1 min-w-[150px] text-center px-4">
              <div className="text-4xl font-bold mb-1" style={{ color: BRAND.teal, fontFamily: 'var(--font-outfit)' }}>{stat.num}</div>
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* 3. About Snippet */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="lg:pr-10">
              <SectionHeading subtitle="Who We Are" title="Setting the Standard for Care in Raipur" />
              <motion.p variants={fadeUpVariant} className="text-lg text-slate-600 leading-relaxed mb-8">
                Care Plus Healthcentre is an ultra-modern facility designed from the ground up to prioritize patient comfort, accurate diagnostics, and swift recovery. We merge advanced technology with deep medical expertise.
              </motion.p>
              <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 gap-6 mb-10">
                {[
                  { icon: Microscope, title: 'In-House Lab' },
                  { icon: Bone, title: 'Orthopedic Excellence' },
                  { icon: Building, title: 'Premium Rooms' },
                  { icon: HeartPulse, title: 'Holistic Care' }
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeUpVariant} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-50 border border-slate-100" style={{ color: BRAND.teal }}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="font-semibold text-slate-900">{item.title}</span>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div variants={fadeUpVariant}>
                <Link href="/about">
                  <Button variant="ghost" className="px-0 hover:bg-transparent hover:text-[#0F5B5D]">
                    Read Our Full Story <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative h-[500px]">
              <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000" alt="Clinic Interior" className="w-full h-full object-cover rounded-[3rem] shadow-2xl" onError={handleImageFallback} />
              <div className="absolute top-8 -left-8 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: BRAND.redLight, color: BRAND.red }}>
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Certified Excellence</div>
                  <div className="text-sm text-slate-500">Highest medical standards</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Modern Departments Bento Grid */}
      <section className="py-24 bg-slate-50 rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 my-10 border border-slate-100/50">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <SectionHeading subtitle="Specialized Care" title="Our Departments" />
            <Link href="/services">
              <Button variant="secondary" className="mb-16">View All Services</Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Main Feature 1 */}
            <Link href="/orthopedic" className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-white rounded-[2rem] p-8 border border-slate-100 hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between overflow-hidden relative h-full"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#0F5B5D]/5 rounded-bl-[100%] transition-transform group-hover:scale-110" />
                <div className="relative z-10 mb-20">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-[#0F5B5D] text-white shadow-lg shadow-[#0F5B5D]/20">
                    <Bone className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-3 font-display" style={{ fontFamily: 'var(--font-outfit)' }}>Advanced Orthopedics</h3>
                  <p className="text-slate-500 max-w-md text-lg">Comprehensive trauma care, joint replacements, and sports medicine with minimally invasive techniques.</p>
                </div>
                <div className="relative z-10 font-bold flex items-center gap-2 group-hover:gap-4 transition-all" style={{ color: BRAND.teal }}>
                  Explore Department <ArrowRight className="w-5 h-5" />
                </div>
              </motion.div>
            </Link>

            {/* Feature 2 */}
            <Link href="/pathology">
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="bg-white rounded-[2rem] p-8 border border-slate-100 hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between relative overflow-hidden h-full"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D81120]/5 rounded-bl-[100%] transition-transform group-hover:scale-110" />
                <div className="relative z-10 mb-10">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-[#D81120] text-white shadow-lg shadow-[#D81120]/20">
                    <Microscope className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3" style={{ fontFamily: 'var(--font-outfit)' }}>Pathology Lab</h3>
                  <p className="text-slate-500">High-precision diagnostics, histopathology, and routine blood analysis.</p>
                </div>
                <div className="relative z-10 font-bold flex items-center gap-2 group-hover:gap-4 transition-all" style={{ color: BRAND.red }}>
                  Learn More <ArrowRight className="w-5 h-5" />
                </div>
              </motion.div>
            </Link>

            {/* Feature 3 & 4 */}
            <Link href="/facilities">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white rounded-[2rem] p-8 border border-slate-100 hover:shadow-md cursor-pointer group flex items-center gap-6 h-full">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-50 text-slate-700 group-hover:bg-[#0F5B5D] group-hover:text-white transition-colors">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Digital X-Ray</h4>
                  <p className="text-sm text-slate-500">High-res instant imaging</p>
                </div>
              </motion.div>
            </Link>

            <Link href="/facilities" className="md:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-slate-900 rounded-[2rem] p-8 hover:shadow-xl transition-all cursor-pointer group flex justify-between items-center relative overflow-hidden h-full">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Cg%3E%3C/svg%3E")' }} />
                <div className="relative z-10">
                  <h4 className="font-bold text-white text-2xl mb-2" style={{ fontFamily: 'var(--font-outfit)' }}>24/7 Pharmacy & Support</h4>
                  <p className="text-slate-400">Medications and care available round the clock.</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-900 transition-colors relative z-10">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Doctor Spotlight */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <SectionHeading subtitle="Medical Leadership" title="Meet Our Experts" centered />

          <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
            {DOCTORS.map((doc, idx) => (
              <motion.div key={doc.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="flex flex-col sm:flex-row gap-6 bg-slate-50 p-6 rounded-[2rem] border border-slate-100 hover:shadow-lg transition-shadow">
                <img src={doc.image} alt={doc.name} className="w-full sm:w-40 h-48 object-cover rounded-2xl object-top shadow-sm" onError={handleImageFallback} />
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-slate-900" style={{ fontFamily: 'var(--font-outfit)' }}>{doc.name}</h3>
                  <p className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: idx === 0 ? BRAND.teal : BRAND.red }}>{doc.qualifications}</p>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">{doc.bio}</p>
                  <Link href="/doctors" className="self-start">
                    <Button variant="ghost" className="px-0 h-auto py-0 hover:bg-transparent text-slate-900">
                      View Profile <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Patient Stories */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none opacity-20" style={{ backgroundColor: BRAND.teal }} />

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-16">
            <span className="font-bold tracking-[0.15em] uppercase text-xs mb-3 block" style={{ color: BRAND.redLight }}>Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-outfit)' }}>Patient Stories</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Rajiv Sharma", text: "Dr. Varun's knee replacement surgery gave me my life back. The facility is exceptionally clean and feels like a premium hospital.", rating: 5 },
              { name: "Anita Verma", text: "The pathology lab results were incredibly fast. Dr. Neha explained everything clearly. Very professional and caring staff.", rating: 5 },
              { name: "Suresh Gupta", text: "Best orthopedic center in Raipur. The modern infrastructure and lack of waiting times made my trauma recovery much easier.", rating: 5 }
            ].map((review, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 relative">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-white/10" />
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, idx) => <Star key={idx} className="w-5 h-5 fill-yellow-500 text-yellow-500" />)}
                </div>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">"{review.text}"</p>
                <div className="font-bold text-white">{review.name}</div>
                <div className="text-sm text-slate-400">Verified Patient</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom Contact Banner */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="bg-[#E6F0F0] rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 border border-[#0F5B5D]/10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'var(--font-outfit)' }}>Ready for a consultation?</h2>
              <p className="text-slate-600 text-lg max-w-lg">Walk-in or book an appointment online. We ensure zero waiting time for pre-booked consultations.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="/appointment">
                <Button>Book Online Now</Button>
              </Link>
              <Button variant="secondary" onClick={() => window.open('https://wa.me/917701010703', '_blank')} className="bg-white">WhatsApp Us</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}