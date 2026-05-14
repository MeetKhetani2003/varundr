'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, ChevronRight, Globe, Camera } from 'lucide-react';
import { BRAND } from '../lib/constants';
import { CarePlusLogo } from './UIElements';

export const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 pt-24 pb-12 overflow-hidden relative">
    <div className="absolute top-0 right-0 w-1/2 h-full blur-[150px] rounded-full pointer-events-none opacity-10" style={{ backgroundColor: BRAND.teal }} />

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all"><Globe className="w-5 h-5" /></a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all"><Camera className="w-5 h-5" /></a>
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
