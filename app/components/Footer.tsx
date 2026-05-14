'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, ChevronRight } from 'lucide-react';
import { BRAND } from '../lib/constants';
import { CarePlusLogo } from './UIElements';

export const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 pt-24 pb-12 overflow-hidden relative">
    <div className="absolute top-0 right-0 w-1/2 h-full blur-[150px] rounded-full pointer-events-none opacity-10" style={{ backgroundColor: BRAND.teal }} />

    <div className="main-container relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

        <div className="lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="flex items-center gap-3 mb-8 bg-white/5 p-3 rounded-2xl inline-flex border border-white/10">
            <CarePlusLogo className="w-10 h-10" />
            <span className="text-2xl font-bold tracking-tight text-white leading-none" style={{ fontFamily: 'var(--font-outfit)' }}>Care Plus</span>
          </div>
          <p className="text-slate-400 leading-relaxed mb-8 text-base md:text-lg">
            Modern technology, trusted expertise, and compassionate patient care under one roof in Raipur.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all shadow-lg shadow-blue-500/10">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-all shadow-lg shadow-pink-500/10">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" aria-label="YouTube" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-all shadow-lg shadow-red-500/10">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.872.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Quick Links</h4>
          <ul className="space-y-4">
            {['Home', 'About', 'Doctors', 'Facilities', 'Gallery', 'Contact'].map(link => (
              <li key={link}>
                <Link href={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="hover:text-white transition-colors flex items-center gap-3 group text-lg">
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" style={{ color: BRAND.tealLight }} />
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Departments</h4>
          <ul className="space-y-4">
            {[
              { label: 'Orthopedic Care', href: '/orthopedic' },
              { label: 'Pathology Lab', href: '/pathology' },
              { label: 'All Services', href: '/services' }
            ].map(link => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white transition-colors flex items-center gap-3 group text-lg">
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" style={{ color: BRAND.tealLight }} />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Contact Us</h4>
          <ul className="space-y-6">
            <li className="flex items-start gap-4 text-lg">
              <MapPin className="w-6 h-6 shrink-0 mt-1" style={{ color: BRAND.tealLight }} />
              <span>Amaseoni, Vidhan Sabha Road, Raipur</span>
            </li>
            <li className="flex items-center gap-4 text-lg">
              <Phone className="w-6 h-6 shrink-0" style={{ color: BRAND.tealLight }} />
              <div>
                <div>7701010703</div>
                <div className="text-slate-400 text-sm mt-1">Pathology: 7701010704</div>
              </div>
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-medium text-slate-500">
        <p>&copy; {new Date().getFullYear()} Care Plus Healthcentre. All rights reserved.</p>
        <p className="flex items-center gap-2">Designed for Premium Healthcare</p>
      </div>
    </div>
  </footer>
);
