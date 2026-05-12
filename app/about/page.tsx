'use client';

import React from 'react';
import { Users, Microscope, Building, HeartPulse } from 'lucide-react';
import { BRAND, handleImageFallback } from '../lib/constants';
import { SectionHeading } from '../components/UIElements';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <SectionHeading subtitle="Our Story" title="A Legacy of Healing & Trust" centered />

        <div className="max-w-4xl mx-auto">
          <img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=1200" alt="Clinic" className="w-full h-[400px] object-cover rounded-[3rem] mb-16 shadow-xl border border-slate-100" onError={handleImageFallback} />

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'var(--font-outfit)' }}>Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To provide world-class, accessible, and compassionate healthcare to the community of Raipur. We believe in accurate diagnosis and effective treatment plans delivered in an environment that promotes fast recovery and peace of mind.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'var(--font-outfit)' }}>Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To be the most trusted healthcare destination in the region, known for our clinical excellence, cutting-edge infrastructure, and an unwavering commitment to patient well-being.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100">
            <h3 className="text-3xl font-bold text-slate-900 mb-10 text-center" style={{ fontFamily: 'var(--font-outfit)' }}>Why Choose Care Plus?</h3>
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: Users, title: 'Expert Team', desc: 'Highly qualified specialists with years of proven experience.' },
                { icon: Microscope, title: 'Advanced Tech', desc: 'Latest diagnostic and surgical equipment for precision.' },
                { icon: Building, title: 'Premium Comfort', desc: 'A healing environment designed for your physical and mental comfort.' },
                { icon: HeartPulse, title: 'Compassionate Care', desc: 'Personalized attention at every step of your journey.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-5">
                  <div className="w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center bg-white shadow-sm border border-slate-100" style={{ color: BRAND.teal }}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
                    <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
