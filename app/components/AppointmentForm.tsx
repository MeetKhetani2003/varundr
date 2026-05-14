'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Phone, Mail, Calendar, Clock, Stethoscope, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BRAND, DOCTORS } from '../lib/constants';
import { Button } from './UIElements';

const SERVICES = [
  "Orthopedic Consultation",
  "Pathology / Blood Test",
  "Joint Replacement",
  "Sports Medicine",
  "Trauma Care",
  "Digital X-Ray",
  "Pharmacy Support"
];

interface AppointmentFormProps {
  initialDoctor?: string;
  initialService?: string;
  isDark?: boolean;
  onSuccess?: () => void;
}

export const AppointmentForm = ({ initialDoctor = '', initialService = '', isDark = false, onSuccess }: AppointmentFormProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (onSuccess) {
      setTimeout(onSuccess, 3000);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="h-full flex flex-col items-center justify-center text-center py-12"
      >
        <div className={`w-24 h-24 ${isDark ? 'bg-brand-teal/20 text-brand-teal' : 'bg-teal-50 text-brand-teal'} rounded-[2rem] flex items-center justify-center mb-8 animate-bounce`}>
          <CheckCircle2 className="w-12 h-12" />
        </div>
        <h3 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} mb-4`} style={{ fontFamily: 'var(--font-outfit)' }}>Request Received!</h3>
        <p className={`${isDark ? 'text-slate-400' : 'text-slate-500'} max-w-sm mx-auto leading-relaxed mb-8`}>
          We've sent a confirmation to your email. Our representative will contact you shortly.
        </p>
      </motion.div>
    );
  }

  const inputClass = `w-full h-14 rounded-2xl pl-14 pr-6 focus:outline-none focus:ring-4 focus:ring-brand-teal/10 focus:border-brand-teal transition-all font-medium ${
    isDark 
      ? 'bg-white/5 border-white/10 text-white placeholder:text-slate-600' 
      : 'bg-slate-50 border-slate-100 text-slate-900 placeholder:text-slate-300'
  }`;

  const labelClass = `text-[10px] font-black uppercase tracking-widest ml-1 ${
    isDark ? 'text-slate-500' : 'text-slate-500'
  }`;

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className={labelClass}>Full Name</label>
          <div className="relative group">
            <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-brand-teal transition-colors" />
            <input required type="text" placeholder="John Doe" className={inputClass} />
          </div>
        </div>
        <div className="space-y-2">
          <label className={labelClass}>Phone Number</label>
          <div className="relative group">
            <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-brand-teal transition-colors" />
            <input required type="tel" placeholder="+91 00000 00000" className={inputClass} />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className={labelClass}>Email Address</label>
        <div className="relative group">
          <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-brand-teal transition-colors" />
          <input required type="email" placeholder="john@example.com" className={inputClass} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className={labelClass}>Preferred Date</label>
          <div className="relative group">
            <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-brand-teal transition-colors" />
            <input required type="date" className={`${inputClass} [color-scheme:${isDark ? 'dark' : 'light'}]`} />
          </div>
        </div>
        <div className="space-y-2">
          <label className={labelClass}>Preferred Time</label>
          <div className="relative group">
            <Clock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-brand-teal transition-colors" />
            <input required type="time" className={`${inputClass} [color-scheme:${isDark ? 'dark' : 'light'}]`} />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className={labelClass}>Service Type</label>
          <div className="relative group">
            <Stethoscope className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-brand-teal transition-colors z-10" />
            <select defaultValue={initialService} className={`${inputClass} appearance-none relative z-0`}>
              <option value="">Select Service</option>
              {SERVICES.map(svc => (
                <option key={svc} value={svc}>{svc}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="space-y-2">
          <label className={labelClass}>Select Doctor</label>
          <div className="relative group">
            <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-brand-teal transition-colors z-10" />
            <select defaultValue={initialDoctor} className={`${inputClass} appearance-none relative z-0`}>
              <option value="">Select Doctor</option>
              {DOCTORS.map(doc => (
                <option key={doc.id} value={doc.id}>{doc.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className={labelClass}>Message</label>
        <div className="relative group">
          <MessageSquare className="absolute left-5 top-6 w-5 h-5 text-slate-400 group-focus-within:text-brand-teal transition-colors" />
          <textarea rows={3} placeholder="Tell us about your condition..." className={`${inputClass} h-auto py-5 pl-14 resize-none`} />
        </div>
      </div>

      <Button className="w-full h-16 rounded-2xl text-lg font-bold group shadow-xl shadow-brand-teal/10 bg-brand-teal hover:bg-brand-teal/90">
        Confirm Appointment <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Button>
    </form>
  );
};
