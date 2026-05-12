'use client';

import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { BRAND } from '../lib/constants';
import { SectionHeading } from '../components/UIElements';

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <SectionHeading subtitle="Get in Touch" title="Contact Us" centered />

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          <div className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100">
            <h3 className="text-4xl font-bold text-slate-900 mb-10" style={{ fontFamily: 'var(--font-outfit)' }}>Reach Out</h3>

            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 bg-white shadow-sm border border-slate-100" style={{ color: BRAND.teal }}>
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xl mb-2">Address</h4>
                  <p className="text-slate-600 leading-relaxed text-lg">Care Plus Healthcentre<br />Amaseoni, Vidhan Sabha Road,<br />Near Swarnbhoomi,<br />Raipur, Chhattisgarh – 492005</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 bg-white shadow-sm border border-slate-100" style={{ color: BRAND.teal }}>
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xl mb-2">Phone</h4>
                  <p className="text-slate-600 text-lg">Reception: 7701010703<br />Pathology Lab: 7701010704</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 bg-white shadow-sm border border-slate-100" style={{ color: BRAND.teal }}>
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xl mb-2">Email</h4>
                  <p className="text-slate-600 text-lg">Raipurcareplus@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[3rem] overflow-hidden shadow-[0_8px_40px_rgb(0,0,0,0.06)] border border-slate-100 h-full min-h-[500px] bg-slate-100 relative">
            <div className="absolute inset-0 flex items-center justify-center text-slate-400 flex-col gap-4">
              <MapPin className="w-12 h-12" />
              <span className="font-bold text-lg">Interactive Map Location</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
