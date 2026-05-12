'use client';

import React from 'react';
import { Bone } from 'lucide-react';
import Link from 'next/link';
import { BRAND, handleImageFallback } from '../lib/constants';
import { SectionHeading, Button } from '../components/UIElements';

export default function OrthopedicPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <SectionHeading subtitle="Specialty Department" title="Advanced Orthopedic Care" />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Led by Dr. Varun Goel, our Orthopedic department offers state-of-the-art treatments for musculoskeletal issues. From sports injuries to complex joint replacements, we restore your mobility with precision.
            </p>
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 mb-8">
              <h4 className="font-bold text-lg mb-4 text-slate-900">Key Treatments</h4>
              <ul className="space-y-4">
                {['Joint Replacement Surgery (Knee, Hip, Shoulder)', 'Trauma & Fracture Management', 'Arthroscopy & Sports Medicine', 'Spine & Back Pain Care'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: BRAND.red }} /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/appointment">
              <Button>Consult Dr. Varun</Button>
            </Link>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" alt="Orthopedics" className="rounded-[3rem] shadow-xl object-cover h-[500px] w-full border border-slate-100" onError={handleImageFallback} />
            <div className="absolute top-10 -left-10 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 border border-slate-100">
              <div className="w-12 h-12 rounded-full bg-[#0F5B5D]/10 flex items-center justify-center">
                <Bone className="w-6 h-6" style={{ color: BRAND.teal }} />
              </div>
              <div>
                <div className="font-bold text-slate-900">Trauma Care</div>
                <div className="text-sm font-semibold text-slate-500 uppercase">24/7 Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
