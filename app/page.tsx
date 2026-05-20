'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight, Activity, Microscope,
  Bone, ArrowUpRight, Star, Quote,
  Award, Building, HeartPulse, Plus,
  ChevronDown, Calendar, User, MessageCircle,
  Stethoscope, Syringe, ClipboardList, MapPin,
  ShieldCheck, CheckCircle2, Heart
} from 'lucide-react';
import Link from 'next/link';
import { BRAND, DOCTORS, GALLERY_IMAGES, handleImageFallback, staggerContainer, fadeUpVariant, HERO_SLIDES, modernEase } from './lib/constants';
import { Button, SectionHeading } from './components/UIElements';
import { useAppointment } from './lib/AppointmentContext';

// --- Sub-components for cleaner structure ---

const DepartmentCard = ({ href, title, desc, icon: Icon, image, delay = 0, size = "small" }: any) => {
  const router = require('next/navigation').useRouter();
  return (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8, ease: modernEase }}
    onClick={() => router.push(href)}
    className={`group relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white cursor-pointer ${size === "large" ? "md:col-span-2 h-[450px]" : "h-[450px]"}`}
  >
    <div className="absolute inset-0 z-0">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        onError={handleImageFallback}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
    </div>

    <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-12">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white transition-colors group-hover:bg-white group-hover:text-slate-900">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="mb-3 text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-outfit)' }}>{title}</h3>
      <p className="mb-8 max-w-md text-base md:text-lg text-slate-200 opacity-0 md:group-hover:opacity-100 transition-all duration-500 group-hover:opacity-100 line-clamp-3">{desc}</p>
      <div className="flex items-center gap-2 font-bold text-white transition-all md:group-hover:gap-4">
        Explore <ArrowRight className="h-5 w-5" />
      </div>
    </div>
  </motion.div>
)};

const ServiceIconCard = ({ title, icon: Icon, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="flex flex-col items-center gap-4 rounded-3xl bg-white p-6 shadow-sm border border-slate-50 hover:shadow-xl hover:-translate-y-2 transition-all cursor-default"
  >
    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-slate-900 transition-colors hover:bg-teal-600 hover:text-white" style={{ color: BRAND.teal }}>
      <Icon className="h-8 w-8" />
    </div>
    <span className="text-center font-bold text-slate-800">{title}</span>
  </motion.div>
);

const FAQItem = ({ question, answer, isOpen, onClick, isDark = false }: any) => (
  <div className={`border-b ${isDark ? 'border-white/10' : 'border-slate-100'} last:border-0`}>
    <button
      onClick={onClick}
      className="flex w-full items-center justify-between py-6 text-left group"
    >
      <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} group-hover:text-teal-400 transition-colors`} style={{ fontFamily: 'var(--font-outfit)' }}>{question}</span>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        className={`flex h-10 w-10 items-center justify-center rounded-full ${isDark ? 'bg-white/10 text-teal-400' : 'bg-slate-50 text-slate-400'}`}
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className={`pb-6 text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>{answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { openModal } = useAppointment();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const testimonials = [
    { id: 1, name: "Rajiv Sharma", text: "Dr. Varun's knee replacement surgery gave me my life back. The facility is exceptionally clean and feels like a premium hospital." },
    { id: 2, name: "Anita Verma", text: "The pathology lab results were incredibly fast. Dr. Neha explained everything clearly. Very professional and caring staff." },
    { id: 3, name: "Suresh Gupta", text: "Best orthopedic center in Raipur. The modern infrastructure and lack of waiting times made my trauma recovery much easier." },
    { id: 4, name: "Priya Das", text: "Extremely professional experience. The digital X-ray and pathology results were shared on WhatsApp instantly. Highly convenient." },
    { id: 5, name: "Amit Kulkarni", text: "I visited for chronic back pain. Dr. Varun's non-surgical approach worked wonders. The staff is very courteous." }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  const faqs = [
    { q: "What are your OPD timings?", a: "Our polyclinic and lab are open daily from 9:00 AM to 8:00 PM." },
    { q: "Do you provide emergency trauma care?", a: "Yes, we have a specialized trauma unit equipped for immediate orthopedic emergencies and critical care, operational from 9:00 AM to 8:00 PM." },
    { q: "How can I book an appointment?", a: "You can book an appointment through our website's booking form, via WhatsApp, or by calling our helpdesk at +91 77010-10703." },
    { q: "Is the pathology lab in-house?", a: "Absolutely. We have a state-of-the-art in-house pathology lab providing histopathology, cytology, and advanced blood analysis with rapid result turnaround." }
  ];

  const services = [
    { title: 'Trauma Care', icon: Activity },
    { title: 'Joint Replacement', icon: Stethoscope },
    { title: 'Arthroscopy', icon: Syringe },
    { title: 'Pathology', icon: Microscope },
    { title: 'Digital X-Ray', icon: ClipboardList },
    { title: 'Pharmacy', icon: Building }
  ];

  const blogs = [
    { title: "Recovery After Knee Surgery", date: "May 10, 2024", author: "Dr. Varun Goel", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" },
    { title: "Understanding Blood Reports", date: "May 08, 2024", author: "Dr. Neha Goel", img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" },
    { title: "Tips for Bone Health", date: "May 05, 2024", author: "Medical Team", img: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900 pt-24">
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
              <video autoPlay loop muted playsInline poster={slide.poster} className="w-full h-full object-cover object-center">
                <source src={slide.video} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/20 z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="main-container relative z-20 h-full flex items-center">
          <div className="max-w-5xl">
            <AnimatePresence mode="wait">
              <motion.div key={`content-${slide.id}`} initial="hidden" animate="visible" exit="exit" variants={staggerContainer}>
                <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-2xl border border-white/15 shadow-2xl text-[11px] font-medium tracking-[0.28em] uppercase mb-10 text-white">
                  <span className="relative flex w-2.5 h-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: BRAND.red }} />
                    <span className="relative inline-flex rounded-full w-2.5 h-2.5" style={{ backgroundColor: BRAND.red }} />
                  </span>
                  Excellence in Healthcare
                </motion.div>

                <motion.h1 variants={fadeUpVariant} className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-light tracking-[-0.05em] leading-[0.95] text-white mb-8" style={{ fontFamily: 'var(--font-outfit)' }}>
                  {slide.title}
                  <span className="block mt-3">
                    <span className="relative inline-block" style={{ color: BRAND.teal }}>
                      {slide.highlight}
                    </span>
                  </span>
                </motion.h1>

                <motion.p variants={fadeUpVariant} className="text-base sm:text-lg md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-12 font-medium">
                  {slide.description}
                </motion.p>

                <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <Button onClick={() => openModal()} className="group h-14 px-9 rounded-2xl text-base font-bold shadow-2xl hover:scale-[1.03] transition-all duration-300">
                    Book Appointment <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>

                  <div className="flex items-center gap-4 px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/10 shadow-xl">
                    <div className="flex -space-x-3">
                      {DOCTORS.map((doc, i) => (
                        <img key={i} src={doc.image} alt="Doctor" onError={handleImageFallback} className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-lg" />
                      ))}
                    </div>
                    <div className="leading-tight">
                      <span className="block text-[10px] uppercase tracking-[0.25em] text-white/50 font-bold mb-1">Meet Our</span>
                      <span className="text-sm font-extrabold text-white">Specialists</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 2. Quick Stats */}
      <section className="relative z-30 -mt-10 mb-16 main-container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 p-8 md:p-10 grid grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {[
            { num: '15+', label: 'Years Experience' },
            { num: '10k+', label: 'Happy Patients' },
            { num: '9am-8pm', label: 'Clinic & Lab Hours' },
            { num: '100%', label: 'Accurate Diagnostics' }
          ].map((stat, i) => (
            <div key={i} className="flex-1 min-w-[150px] text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: BRAND.teal, fontFamily: 'var(--font-outfit)' }}>{stat.num}</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* 2.5 Certification & Trust Section */}
      <section className="section-padding bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, var(--color-brand-teal) 0%, transparent 40%)' }} />
        <div className="main-container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <SectionHeading subtitle="Certified Excellence" title="A Legacy of Trust and Medical Precision" isDark />
              <p className="text-xl text-slate-300 leading-relaxed mb-10">
                At Care Plus Healthcentre, our commitment to patient safety and diagnostic accuracy is backed by national certifications and a decade of specialized expertise. We don't just treat; we care with precision.
              </p>

              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: Award, title: "NABH Accredited", desc: "Highest standard for hospital safety" },
                  { icon: ShieldCheck, title: "ISO Certified", desc: "Quality management in diagnostics" },
                  { icon: CheckCircle2, title: "NABL Lab", desc: "Excellence in pathological testing" },
                  { icon: Heart, title: "Patient First", desc: "100% focused on patient recovery" }
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeUpVariant} className="flex items-start gap-4 p-4 rounded-3xl hover:bg-white/5 transition-colors group">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-teal-500/10 text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-all">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-300 leading-snug">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl relative z-10">
                <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000" alt="Clinic Trust" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/40 to-transparent" />
              </div>

              {/* Floating Trust Badge */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl border border-white/10 z-20 max-w-[240px]"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <div className="font-bold text-white leading-tight">Raipur's Top Rated Clinic</div>
                </div>
                <p className="text-xs text-slate-300">Consistently ranked #1 for orthopedic and pathology services since 2015.</p>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-600/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-red-600/5 rounded-full blur-[80px]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Departments (Cinematic) */}
      <section className="section-padding bg-white">
        <div className="main-container">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20 gap-8 text-center md:text-left">
            <SectionHeading subtitle="Specialized Care" title="Our Departments" />
            <Link href="/services" className="w-full md:w-auto">
              <Button variant="secondary" className="w-full md:w-auto">View All Services</Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <DepartmentCard
              size="large"
              title="Advanced Orthopedics"
              desc="Comprehensive trauma care, joint replacements, and sports medicine with minimally invasive techniques."
              icon={Bone}
              image="/images/dept_orthopedic.png"
              href="/orthopedic"
            />
            <DepartmentCard
              title="Pathology Lab"
              desc="High-precision diagnostics, histopathology, and routine blood analysis."
              icon={Microscope}
              image="/images/dept_pathology.png"
              href="/pathology"
            />
            <DepartmentCard
              title="In-house Pharmacy"
              desc="Medications and care available during clinic hours with expert support."
              icon={Building}
              image="/images/dept_pharmacy.png"
              href="/facilities"
            />
          </div>
        </div>
      </section>

      {/* 4. Core Services Grid */}
      <section className="section-padding bg-slate-900">
        <div className="main-container text-center">
          <SectionHeading subtitle="Quick Services" title="What We Offer" centered isDark />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center gap-4 rounded-3xl bg-white/5 p-6 shadow-sm border border-white/10 hover:bg-white/10 hover:-translate-y-2 transition-all cursor-default group"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-teal-400 transition-colors group-hover:bg-teal-600 group-hover:text-white">
                  <svc.icon className="h-8 w-8" />
                </div>
                <span className="text-center font-bold text-white">{svc.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Doctor Spotlight */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="main-container relative z-10">
          <SectionHeading subtitle="Medical Leadership" title="The Experts Behind Your Care" centered />

          <div className="grid lg:grid-cols-2 gap-12 mt-24 max-w-7xl mx-auto">
            {DOCTORS.map((doc, idx) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="group bg-white rounded-[4rem] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col md:flex-row hover:shadow-2xl transition-all duration-500"
              >
                {/* Doctor Portrait */}
                <div className="w-full md:w-2/5 h-72 md:h-auto relative overflow-hidden">
                  <img src={doc.image} alt={doc.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" onError={handleImageFallback} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent md:bg-gradient-to-t md:from-slate-900/40" />
                </div>

                {/* Doctor Details */}
                <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-1 mb-4 justify-center md:justify-start">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 text-yellow-400 fill-current" />)}
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 text-center md:text-left" style={{ fontFamily: 'var(--font-outfit)' }}>
                    {doc.name}
                  </h3>

                  <div className="mx-auto md:mx-0 inline-block px-4 py-1.5 rounded-full bg-teal-50 text-teal-600 text-xs font-bold uppercase tracking-widest mb-6 border border-teal-100">
                    {doc.qualifications}
                  </div>

                  <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-10 line-clamp-4 text-center md:text-left">
                    {doc.bio}
                  </p>

                  <div className="flex flex-wrap gap-4 mt-auto">
                    <Link href={`/doctors/${doc.id}`} className="flex-1">
                      <Button className="w-full h-14 rounded-2xl group/btn">
                        Journey <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                      </Button>
                    </Link>
                    <Button onClick={() => openModal(doc.id)} variant="secondary" className="flex-1 h-14 rounded-2xl bg-slate-50 border-slate-100 text-slate-700 hover:bg-slate-100">
                      Book Visit
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Cinematic Gallery Preview */}
      <section className="section-padding bg-slate-900 overflow-hidden relative">
        <div className="main-container mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 text-center md:text-left">
          <div className="max-w-2xl mx-auto md:mx-0">
            <SectionHeading subtitle="Visual Tour" title="A Glimpse into Clinical Excellence" isDark />
            <p className="text-lg md:text-xl text-slate-300 mt-6 leading-relaxed">
              Explore our state-of-the-art facility designed for maximum patient comfort and diagnostic precision. From modular OTs to high-precision labs.
            </p>
          </div>
          <Link href="/gallery" className="w-full md:w-auto">
            <Button variant="secondary" className="w-full md:w-auto h-16 px-10 rounded-2xl border-slate-200 text-slate-700 hover:bg-slate-50">
              View All <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>

        {/* Infinite Scrolling Marquee */}
        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((img, i) => (
              <div key={i} className="w-[280px] md:w-[500px] h-[280px] md:h-[450px] shrink-0 relative group rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
                <img src={img} alt="Clinic Interior" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Play icon overlay for every 3rd image to represent video presence */}
                {i % 3 === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 scale-90 group-hover:scale-100 transition-transform">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating Accent */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
      </section>

      {/* 7. Google Verified Testimonials Carousel */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, var(--color-brand-teal) 0%, transparent 70%)' }} />

        <div className="main-container mb-20 text-center">
          <div className="inline-flex items-center gap-2 mb-4 bg-slate-50 px-4 py-2 rounded-full shadow-sm border border-slate-100">
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map(s => <Star key={s} className="fill-current w-4 h-4" />)}
            </div>
            <span className="font-bold text-slate-900 text-sm">4.9/5 Rating</span>
            <span className="text-slate-300 mx-2">|</span>
            <span className="text-slate-500 text-sm font-bold uppercase tracking-wider">500+ Reviews</span>
          </div>
          <SectionHeading title="What Our Patients Say" centered />
        </div>

        {/* Infinite Marquee of Testimonials */}
        <div className="relative flex overflow-hidden py-10">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          >
            {[...testimonials, ...testimonials].map((review, i) => (
              <div key={i} className="w-[320px] md:w-[450px] shrink-0 bg-white p-8 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] shadow-[0_15px_50px_rgba(0,0,0,0.03)] border border-slate-100 relative group hover:shadow-2xl transition-all duration-500">
                <div className="absolute top-8 right-10 flex gap-1">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                  </div>
                </div>

                <Quote className="text-slate-50 w-24 h-24 absolute top-10 left-8 -z-0 opacity-40" />

                <div className="relative z-10">
                  <div className="flex text-yellow-400 mb-6">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="fill-current w-4 h-4" />)}
                  </div>
                  <p className="text-xl text-slate-700 leading-relaxed font-medium mb-10 whitespace-normal italic">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-brand-teal text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-teal-900/20">
                      {review.name[0]}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-lg">{review.name}</div>
                      <div className="text-sm text-teal-600 font-bold flex items-center gap-1.5 uppercase tracking-wider">
                        <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" /> Verified Patient
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="main-container max-w-4xl">
          <SectionHeading subtitle="Patient Resources" title="Frequently Asked Questions" centered isDark />
          <div className="mt-16 bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/10">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.q}
                answer={faq.a}
                isOpen={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                isDark={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 9. Blogs / Health Insights */}
      <section className="section-padding bg-white">
        <div className="main-container">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20 gap-8 text-center md:text-left">
            <SectionHeading subtitle="Health Education" title="Health Insights & Blogs" />
            <Link href="#" className="w-full md:w-auto">
              <Button variant="secondary" className="w-full md:w-auto">Browse All Articles</Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((blog, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all group"
              >
                <div className="h-64 overflow-hidden">
                  <img src={blog.img} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4 font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {blog.date}</span>
                    <span className="flex items-center gap-1"><User className="w-4 h-4" /> {blog.author}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 leading-tight group-hover:text-teal-600 transition-colors" style={{ fontFamily: 'var(--font-outfit)' }}>{blog.title}</h3>
                  <Link href="#" className="inline-flex items-center gap-2 font-bold text-slate-900 group-hover:gap-4 transition-all">
                    Read Article <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Compact Cinematic Recovery Strip */}
      <section className="bg-slate-900 relative overflow-hidden py-10 md:py-14 border-t border-white/5">
        <div className="absolute top-0 right-0 w-[600px] h-full bg-teal-500/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />

        <div className="main-container relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 leading-tight" style={{ fontFamily: 'var(--font-outfit)' }}>
                Your path to <span className="text-teal-400">recovery</span> starts here.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0">
                Raipur's leading orthopedic experts for comprehensive care and advanced diagnostics.
              </p>
            </div>

            {/* Horizontal Stats */}
            <div className="hidden xl:flex items-center gap-10 px-10 border-x border-white/5">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10k+</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Healed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">99%</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Success</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <Button onClick={() => openModal()} className="w-full sm:w-auto h-14 px-8 rounded-xl text-base font-bold shadow-xl shadow-teal-500/10 group">
                Book Now <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
              <Button
                variant="secondary"
                onClick={() => window.open('https://wa.me/917701010703', '_blank')}
                className="w-full sm:w-auto h-14 px-8 rounded-xl bg-white/5 border-white/10 text-white hover:bg-white/10 text-base font-bold backdrop-blur-md"
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}