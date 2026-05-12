'use client';

import React from 'react';
import { Microscope, Droplets, Activity } from 'lucide-react';
import Link from 'next/link';
import { BRAND, handleImageFallback } from '../lib/constants';
import { SectionHeading, Button } from '../components/UIElements';

export default function PathologyPage() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <SectionHeading subtitle="Diagnostic Excellence" title="Modern Pathology Lab" />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <img src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800" alt="Pathology Lab" className="rounded-[3rem] shadow-xl object-cover h-[500px] w-full border border-slate-100" onError={handleImageFallback} />
            <div className="absolute bottom-10 -right-6 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 border border-slate-100">
              <div className="w-12 h-12 rounded-full bg-[#D81120]/10 flex items-center justify-center">
                <Microscope className="w-6 h-6" style={{ color: BRAND.red }} />
              </div>
              <div>
                <div className="font-bold text-slate-900">100% Accuracy</div>
                <div className="text-sm font-semibold text-slate-500 uppercase">Fast Turnaround</div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Under the expert guidance of Dr. Neha Goel, our Pathology Laboratory is equipped with the latest automated analyzers to ensure high precision and reliability in test results.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                <Droplets className="w-8 h-8 mb-4" style={{ color: BRAND.teal }} />
                <h4 className="font-bold text-slate-900 text-lg mb-2">Hematology</h4>
                <p className="text-slate-500">Comprehensive blood profiling and analysis.</p>
              </div>
              <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                <Activity className="w-8 h-8 mb-4" style={{ color: BRAND.teal }} />
                <h4 className="font-bold text-slate-900 text-lg mb-2">Cytology</h4>
                <p className="text-slate-500">Expert cellular and tissue examinations.</p>
              </div>
            </div>
            <Link href="/appointment">
              <Button variant="primary">Book Home Collection</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
