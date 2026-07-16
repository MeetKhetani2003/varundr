'use client';

import React, { useState, useEffect } from 'react';
import { Microscope, ArrowRight, CheckCircle2, ShieldCheck, Clock, FlaskConical, Beaker } from 'lucide-react';
import Link from 'next/link';
import { BRAND, fadeUpVariant, staggerContainer } from '../lib/constants';
import { SectionHeading, Button } from '../components/UIElements';
import { motion } from 'framer-motion';
import TestInquiryModal from '../components/TestInquiryModal';

export default function PathologyPage() {
  const [activeTab, setActiveTab] = useState<'packages' | 'tests'>('packages');
  const [packages, setPackages] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [tests, setTests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Inquiry Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [selectedPackageId, setSelectedPackageId] = useState<string | undefined>();
  
  // Checklist State
  const [selectedTests, setSelectedTests] = useState<Set<string>>(new Set());

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [pkgsRes, catsRes, testsRes] = await Promise.all([
        fetch('/api/packages'),
        fetch('/api/test-categories'),
        fetch('/api/tests')
      ]);
      setPackages(await pkgsRes.json());
      setCategories(await catsRes.json());
      setTests(await testsRes.json());
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const handleTestToggle = (testId: string) => {
    const newSet = new Set(selectedTests);
    if (newSet.has(testId)) {
      newSet.delete(testId);
    } else {
      newSet.add(testId);
    }
    setSelectedTests(newSet);
  };

  const openPackageModal = (pkg: any) => {
    setModalTitle(`Book Package: ${pkg.name}`);
    setSelectedPackageId(pkg.id);
    setSelectedTests(new Set());
    setIsModalOpen(true);
  };

  const openSelectedTestsModal = () => {
    if (selectedTests.size === 0) return;
    setModalTitle(`Book ${selectedTests.size} Selected Test(s)`);
    setSelectedPackageId(undefined);
    setIsModalOpen(true);
  };

  const getTubeColorHex = (colorName: string) => {
    switch (colorName.toLowerCase()) {
      case 'purple': return '#a855f7'; // Purple-500
      case 'red': return '#ef4444';    // Red-500
      case 'blue': return '#3b82f6';   // Blue-500
      case 'grey': return '#64748b';   // Slate-500
      default: return '#cbd5e1';       // Slate-300 (None)
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <TestInquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        selectedPackageId={selectedPackageId}
        selectedTestIds={Array.from(selectedTests)}
        selectedPackageData={packages.find(p => p.id === selectedPackageId)}
        selectedTestsData={tests.filter(t => selectedTests.has(t.id))}
        title={modalTitle}
      />

      {/* Cinematic Hero (same as before) */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <img src="/images/dept_pathology.png" alt="Pathology Lab" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>
        
        <div className="main-container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            <motion.div variants={fadeUpVariant} className="w-20 h-20 rounded-[2rem] bg-teal-500/20 text-teal-400 flex items-center justify-center mb-8 border border-teal-500/30">
              <Microscope className="w-10 h-10" />
            </motion.div>
            <motion.h1 variants={fadeUpVariant} className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight mb-8" style={{ fontFamily: 'var(--font-outfit)' }}>
              Precision <br /><span className="font-bold text-teal-400">Pathology</span>
            </motion.h1>
            <motion.p variants={fadeUpVariant} className="text-2xl text-slate-300 font-medium mb-10 leading-relaxed max-w-2xl">
              Best in class, state of the art Pathology Lab under direct supervision of a Senior Pathologist that provides the accuracy you can trust for your healing journey.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Tests & Packages Dashboard */}
      <section className="section-padding bg-slate-50 border-t border-slate-100">
        <div className="main-container">
          <div className="text-center mb-16">
            <SectionHeading subtitle="Diagnostic Packages" title="Pathology Tests & Health Profiles" centered />
            
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

          {loading ? (
            <div className="text-center py-20 text-slate-500 font-medium text-lg">Loading tests and packages...</div>
          ) : activeTab === 'packages' ? (
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg, idx) => (
                <div key={pkg.id} className="bg-white rounded-[2.5rem] border border-slate-100 p-8 md:p-10 shadow-sm hover:shadow-2xl transition-all flex flex-col group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl" />
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-xs font-bold uppercase tracking-widest mb-3">
                        {pkg.parametersCount} Parameters
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
                      {pkg.testsIncluded.split(',').map((t: string, tIdx: number) => (
                        <span key={tIdx} className="px-3 py-1.5 rounded-xl bg-slate-50 text-slate-600 text-xs font-bold border border-slate-100 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-500" /> {t.trim()}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 mt-auto">
                    <Button 
                      onClick={() => openPackageModal(pkg)} 
                      className="flex-1 h-12 rounded-xl text-sm font-bold shadow-md shadow-teal-500/10"
                    >
                      Book Package
                    </Button>
                    <button 
                      onClick={() => window.open(`https://wa.me/917701010703?text=${encodeURIComponent('Hi, I would like to book the health package: ' + pkg.name)}`, '_blank')}
                      className="flex-1 h-12 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 font-bold text-sm transition-all cursor-pointer"
                    >
                      Book on WhatsApp
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-5xl mx-auto">
              
              {/* Checklist Action Bar */}
              <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl p-4 mb-8 flex flex-wrap items-center justify-between gap-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
                    {selectedTests.size}
                  </div>
                  <span className="font-bold text-slate-700">Tests Selected</span>
                </div>
                <div className="flex gap-3">
                  {selectedTests.size > 0 && (
                    <button onClick={() => setSelectedTests(new Set())} className="px-4 py-2 text-slate-500 hover:text-slate-900 font-medium text-sm">
                      Clear All
                    </button>
                  )}
                  <Button 
                    onClick={openSelectedTestsModal}
                    disabled={selectedTests.size === 0}
                    className={`px-8 h-12 rounded-xl font-bold shadow-lg ${selectedTests.size === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    Book Selected Tests
                  </Button>
                </div>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-4 mb-8 p-4 bg-white rounded-xl border border-slate-100 justify-center">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 flex items-center">Tube Legend:</div>
                <div className="flex items-center gap-1.5 text-sm font-medium text-slate-600"><div className="w-3 h-3 rounded-full bg-[#a855f7]"></div> EDTA</div>
                <div className="flex items-center gap-1.5 text-sm font-medium text-slate-600"><div className="w-3 h-3 rounded-full bg-[#ef4444]"></div> Clot Activator</div>
                <div className="flex items-center gap-1.5 text-sm font-medium text-slate-600"><div className="w-3 h-3 rounded-full bg-[#3b82f6]"></div> Sodium Citrate</div>
                <div className="flex items-center gap-1.5 text-sm font-medium text-slate-600"><div className="w-3 h-3 rounded-full bg-[#64748b]"></div> Fluoride</div>
              </div>

              {/* Categories & Tests */}
              <div className="space-y-12">
                {categories.map((cat) => {
                  const catTests = tests.filter(t => t.categoryId === cat.id);
                  if (catTests.length === 0) return null;

                  return (
                    <div key={cat.id} className="bg-white rounded-3xl border border-slate-100 p-6 md:p-10 shadow-sm">
                      <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
                        <Beaker className="w-6 h-6 text-teal-500" />
                        {cat.name}
                      </h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {catTests.map(test => (
                          <label 
                            key={test.id} 
                            className={`flex items-start gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all ${selectedTests.has(test.id) ? 'border-teal-500 bg-teal-50/50 shadow-md' : 'border-slate-100 hover:border-slate-200 bg-white'}`}
                          >
                            <input 
                              type="checkbox" 
                              className="mt-1 w-5 h-5 text-teal-600 rounded border-slate-300 focus:ring-teal-500 cursor-pointer"
                              checked={selectedTests.has(test.id)}
                              onChange={() => handleTestToggle(test.id)}
                            />
                            <div className="flex-1 flex justify-between items-center">
                              <div className="flex items-center gap-2">
                                <div 
                                  className="w-2.5 h-2.5 rounded-full shadow-sm flex-shrink-0" 
                                  style={{ backgroundColor: getTubeColorHex(test.tubeColor) }}
                                  title={`${test.tubeColor} Tube`}
                                />
                                <span className="font-bold text-slate-800 leading-tight">{test.name}</span>
                              </div>
                              <span className="font-bold text-teal-600 ml-2">₹{test.rate}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          )}
        </div>
      </section>
    </div>
  );
}
