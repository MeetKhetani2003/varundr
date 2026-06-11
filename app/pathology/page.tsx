'use client';

import React, { useState } from 'react';
import { Microscope, ArrowRight, CheckCircle2, ShieldCheck, Clock, FlaskConical } from 'lucide-react';
import Link from 'next/link';
import { BRAND, handleImageFallback, fadeUpVariant, staggerContainer, modernEase } from '../lib/constants';
import { SectionHeading, Button } from '../components/UIElements';
import { useAppointment } from '../lib/AppointmentContext';
import { motion } from 'framer-motion';

export default function PathologyPage() {
  const { openModal } = useAppointment();
  const [activeTab, setActiveTab] = useState<'packages' | 'tests'>('packages');

  const individualTests = [
    { name: 'Complete Blood Count (CBC)', price: 350, parameters: '24 Parameters (Hb, WBC, RBC, Platelets, etc.)', purpose: 'General health, infection & anemia check' },
    { name: 'Lipid Profile (Cholesterol)', price: 600, parameters: '8 Parameters (Total Cholesterol, HDL, LDL, Triglycerides, etc.)', purpose: 'Heart & cardiovascular health screening' },
    { name: 'HbA1c & Blood Sugar', price: 450, parameters: 'Average Blood Glucose over 3 months', purpose: 'Diabetes screening & monitoring' },
    { name: 'Liver Function Test (LFT)', price: 750, parameters: '11 Parameters (Bilirubin, SGOT, SGPT, Alkaline Phosphatase, etc.)', purpose: 'Liver health & enzyme evaluation' },
    { name: 'Kidney Function Test (KFT)', price: 750, parameters: '10 Parameters (Urea, Creatinine, Uric Acid, Electrolytes)', purpose: 'Kidney filtration & metabolic health' },
    { name: 'Thyroid Profile (T3, T4, TSH)', price: 550, parameters: 'Total Thyroid Hormones', purpose: 'Thyroid gland activity evaluation' },
    { name: 'Vitamin D & B12 Combo', price: 1200, parameters: 'Essential Vitamin Levels', purpose: 'Nerve function, energy & bone strength' }
  ];

  const healthPackages = [
    {
      name: 'Basic Health Screening',
      price: 999,
      paramsCount: 32,
      tests: ['Complete Blood Count (CBC)', 'Blood Sugar Fasting', 'Lipid Profile', 'Urine Routine'],
      purpose: 'Perfect for regular checkups to evaluate general physiological health.'
    },
    {
      name: 'Care Plus Executive Profile',
      price: 2499,
      paramsCount: 64,
      tests: ['Complete Blood Count (CBC)', 'Lipid Profile', 'Liver Function Test (LFT)', 'Kidney Function Test (KFT)', 'Thyroid Profile (TSH)', 'Blood Sugar Fasting & Post-Prandial', 'Urine Routine'],
      purpose: 'Our most popular comprehensive screening covering major organs, blood profile, and diabetes markers.'
    },
    {
      name: 'Women Wellness Package',
      price: 1999,
      paramsCount: 45,
      tests: ['Complete Blood Count (CBC)', 'Thyroid Profile', 'Vitamin D3', 'Calcium & Bone Markers', 'Urine Routine', 'Blood Sugar'],
      purpose: 'Tailored for women to monitor bone health, thyroid status, blood count, and metabolism.'
    },
    {
      name: 'Senior Citizen Care Profile',
      price: 2999,
      paramsCount: 72,
      tests: ['Complete Blood Count (CBC)', 'Lipid Profile', 'Liver Function Test (LFT)', 'Kidney Function Test (KFT)', 'Thyroid Profile', 'Arthritis Screen (Uric Acid, Calcium)', 'Vitamin D3 & B12', 'Blood Sugar'],
      purpose: 'Extensive health profiling targeting bone strength, vitamin levels, cardiac risk, and major organ function.'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Cinematic Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200" alt="Pathology Lab" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>
        
        <div className="main-container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            <motion.div variants={fadeUpVariant} className="w-20 h-20 rounded-[2rem] bg-teal-500/20 text-teal-400 flex items-center justify-center mb-8 border border-teal-500/30">
              <Microscope className="w-10 h-10" />
            </motion.div>
            <motion.h1 variants={fadeUpVariant} className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight mb-8" style={{ fontFamily: 'var(--font-outfit)' }}>
              Precision <br /><span className="font-bold" style={{ color: BRAND.teal }}>Pathology</span>
            </motion.h1>
            <motion.p variants={fadeUpVariant} className="text-2xl text-slate-300 font-medium mb-10 leading-relaxed">
              Led by Dr. Neha Goel, our NABL-standard diagnostic lab provides the accuracy you can trust for your healing journey.
            </motion.p>
            <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4">
              <Button onClick={() => openModal('', 'Pathology / Blood Test')} className="h-16 px-10 rounded-2xl text-lg">Book Diagnostic Test</Button>
              <Button variant="secondary" onClick={() => window.open('https://wa.me/917701010703', '_blank')} className="bg-white/10 border-white/20 text-white h-16 px-10 rounded-2xl text-lg hover:bg-white/20">
                Home Sample Collection
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Detailed Info */}
      <section className="section-padding">
        <div className="main-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="order-2 lg:order-1">
              <SectionHeading subtitle="Specialty Department" title="Accuracy is the First Step to Recovery" />
              <p className="text-xl text-slate-600 leading-relaxed mb-10">
                Our lab is equipped with state-of-the-art automated analyzers ensuring rapid turnaround times and zero manual errors in your health reports.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {[
                  { title: "Histopathology", desc: "Expert Tissue Analysis" },
                  { title: "Cytology", desc: "Advanced Cell Studies" },
                  { title: "Hematology", desc: "Complete Blood Profile" },
                  { title: "Biochemistry", desc: "Precision Organ Testing" }
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeUpVariant} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 group hover:bg-teal-600 hover:text-white transition-all">
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-slate-500 group-hover:text-teal-55">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: -0 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" alt="Pathology" className="rounded-[4rem] shadow-2xl h-[600px] w-full object-cover" />
              <div className="absolute -top-10 -right-10 bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100">
                <div className="flex items-center gap-4 mb-4">
                  <FlaskConical className="w-8 h-8 text-teal-600" />
                  <div className="font-bold text-slate-900">NABL Standard</div>
                </div>
                <p className="text-sm text-slate-500">Highest quality benchmark in diagnostic testing.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Tests & Packages Dashboard */}
      <section className="section-padding bg-slate-50 border-t border-slate-100">
        <div className="main-container">
          <div className="text-center mb-16">
            <SectionHeading subtitle="Diagnostic Packages" title="Pathology Tests & Health Profiles" centered />
            <p className="text-slate-500 max-w-2xl mx-auto mt-4 text-lg">
              Explore our comprehensive range of high-precision blood tests and diagnostic screening packages. Book online for priority sampling or request home sample collection in Raipur.
            </p>

            {/* Tab Toggles */}
            <div className="inline-flex p-1.5 bg-white rounded-2xl border border-slate-100 shadow-sm mt-10">
              <button 
                onClick={() => setActiveTab('packages')} 
                className={`px-8 py-3 rounded-xl font-bold transition-all text-base cursor-pointer ${activeTab === 'packages' ? 'bg-teal-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Health Packages
              </button>
              <button 
                onClick={() => setActiveTab('tests')} 
                className={`px-8 py-3 rounded-xl font-bold transition-all text-base cursor-pointer ${activeTab === 'tests' ? 'bg-teal-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Individual Tests
              </button>
            </div>
          </div>

          {activeTab === 'packages' ? (
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {healthPackages.map((pkg, idx) => (
                <div key={idx} className="bg-white rounded-[2.5rem] border border-slate-100 p-8 md:p-10 shadow-sm hover:shadow-2xl transition-all flex flex-col group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl" />
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-xs font-bold uppercase tracking-widest mb-3">
                        {pkg.paramsCount} Parameters
                      </span>
                      <h3 className="text-2xl font-bold text-slate-900">{pkg.name}</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-400 font-bold uppercase">Price</div>
                      <div className="text-3xl font-black text-teal-600">₹{pkg.price}</div>
                    </div>
                  </div>

                  <p className="text-slate-500 mb-8 leading-relaxed text-sm">{pkg.purpose}</p>

                  <div className="border-t border-slate-50 pt-6 mb-8 flex-1">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Tests Included:</h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.tests.map((t, tIdx) => (
                        <span key={tIdx} className="px-3 py-1.5 rounded-xl bg-slate-50 text-slate-600 text-xs font-bold border border-slate-100 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-500" /> {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 mt-auto">
                    <Button 
                      onClick={() => openModal('', 'Pathology Package: ' + pkg.name)} 
                      className="flex-1 h-12 rounded-xl text-sm font-bold shadow-md shadow-teal-500/10"
                    >
                      Book Test
                    </Button>
                    <button 
                      onClick={() => window.open(`https://wa.me/917701010703?text=${encodeURIComponent('Hi Care Plus Healthcentre, I would like to book the health package: ' + pkg.name)}`, '_blank')}
                      className="flex-1 h-12 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 font-bold text-sm transition-all cursor-pointer"
                    >
                      Book on WhatsApp
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-4xl mx-auto space-y-4">
              {individualTests.map((test, idx) => (
                <div key={idx} className="bg-white rounded-3xl border border-slate-100 p-6 md:p-8 shadow-sm hover:shadow-lg transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="text-xl font-bold text-slate-900">{test.name}</h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-50 text-slate-500 text-[10px] font-bold border border-slate-100 uppercase tracking-wider">
                        {test.parameters}
                      </span>
                    </div>
                    <p className="text-slate-500 text-sm">{test.purpose}</p>
                  </div>

                  <div className="flex items-center gap-6 justify-between md:justify-end border-t md:border-t-0 pt-4 md:pt-0 border-slate-50">
                    <div className="text-left md:text-right">
                      <div className="text-[10px] text-slate-400 font-bold uppercase">Test Price</div>
                      <div className="text-2xl font-black text-teal-600">₹{test.price}</div>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        onClick={() => openModal('', 'Pathology Test: ' + test.name)} 
                        className="h-10 px-5 rounded-lg text-xs font-bold"
                      >
                        Book
                      </Button>
                      <button 
                        onClick={() => window.open(`https://wa.me/917701010703?text=${encodeURIComponent('Hi Care Plus Healthcentre, I would like to book the test: ' + test.name)}`, '_blank')}
                        className="w-10 h-10 rounded-lg border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 font-bold flex items-center justify-center transition-all cursor-pointer"
                        title="Book via WhatsApp"
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-emerald-500"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
