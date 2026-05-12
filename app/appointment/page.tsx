'use client';

import React from 'react';
import { Phone } from 'lucide-react';
import { BRAND } from '../lib/constants';
import { SectionHeading, Button } from '../components/UIElements';

export default function AppointmentPage() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none opacity-50" style={{ backgroundColor: BRAND.tealLight }} />

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 mx-auto">
        <div className="max-w-4xl mx-auto">
          <SectionHeading subtitle="Book a Visit" title="Schedule Your Appointment" centered />

          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-[0_8px_40px_rgb(0,0,0,0.06)] border border-slate-100 mt-12">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-500 ml-2 uppercase tracking-widest">Full Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#0F5B5D]/20 focus:border-[#0F5B5D] transition-all font-medium text-slate-900" placeholder="John Doe" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-500 ml-2 uppercase tracking-widest">Phone Number</label>
                  <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#0F5B5D]/20 focus:border-[#0F5B5D] transition-all font-medium text-slate-900" placeholder="+91 00000 00000" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-500 ml-2 uppercase tracking-widest">Department</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#0F5B5D]/20 focus:border-[#0F5B5D] transition-all font-medium text-slate-900 appearance-none">
                    <option value="">Choose Department...</option>
                    <option value="ortho">Orthopedic (Dr. Varun)</option>
                    <option value="pathology">Pathology (Dr. Neha)</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-500 ml-2 uppercase tracking-widest">Preferred Date</label>
                  <input type="date" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#0F5B5D]/20 focus:border-[#0F5B5D] transition-all font-medium text-slate-900" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-500 ml-2 uppercase tracking-widest">Additional Notes</label>
                <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#0F5B5D]/20 focus:border-[#0F5B5D] transition-all font-medium text-slate-900 resize-none" placeholder="Describe your symptoms or inquiry..."></textarea>
              </div>

              <div className="pt-8 flex flex-col sm:flex-row gap-6 items-center justify-between border-t border-slate-100">
                <Button className="w-full sm:w-auto px-12 py-5 text-lg">Confirm Booking</Button>

                <div className="flex items-center gap-4 text-sm font-bold text-slate-400 uppercase tracking-widest">
                  <span>OR</span>
                  <a href="https://wa.me/917701010703" target="_blank" rel="noreferrer" className="bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 py-4 px-8 rounded-full flex items-center justify-center gap-2 transition-colors">
                    <Phone className="w-5 h-5" /> Book via WhatsApp
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
