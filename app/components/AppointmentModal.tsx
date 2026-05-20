'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Phone, Mail, Calendar, Clock, Stethoscope, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useAppointment } from '../lib/AppointmentContext';
import { AppointmentForm } from './AppointmentForm';

export const AppointmentModal = () => {
  const { isModalOpen, closeModal, initialDoctor, initialService } = useAppointment();
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      // Reset submission state after animation completes
      const timeout = setTimeout(() => setIsSubmitted(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [isModalOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setIsSubmitted(true);
    setTimeout(() => {
      closeModal();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden bg-white rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.4)] flex flex-col md:flex-row"
          >
            {/* Sidebar Info (Desktop) */}
            <div className="hidden md:flex md:w-1/3 bg-slate-900 p-12 flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl shadow-teal-500/20">
                  <Calendar className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-outfit)' }}>
                  Book Your <span className="text-teal-400">Visit</span>
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Fill out the form and our team will get back to you within 2 hours to confirm your slot.
                </p>
              </div>

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4 text-white/60 text-sm">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span>Instant Confirmation</span>
                </div>
                <div className="flex items-center gap-4 text-white/60 text-sm">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span>Certified Specialists</span>
                </div>
              </div>
            </div>

            {/* Form Content */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 relative">
              <button 
                onClick={closeModal}
                className="absolute top-6 right-6 p-3 bg-slate-50 text-slate-400 rounded-2xl hover:bg-slate-100 hover:text-slate-900 transition-all z-20"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mt-4">
                <AppointmentForm 
                  key={`${initialDoctor}-${initialService}`}
                  initialDoctor={initialDoctor} 
                  initialService={initialService} 
                  onSuccess={() => setTimeout(closeModal, 2500)}
                />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
