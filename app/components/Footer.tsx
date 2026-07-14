'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, ChevronRight } from 'lucide-react';
import { BRAND } from '../lib/constants';
import { CarePlusLogo } from './UIElements';
import Image from 'next/image';

export const Footer = () => (
  <footer className="bg-slate-800 text-slate-300 pt-24 pb-12 overflow-hidden relative">
    <div className="absolute top-0 right-0 w-1/2 h-full blur-[150px] rounded-full pointer-events-none opacity-10" style={{ backgroundColor: BRAND.teal }} />

    <div className="main-container relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

        <div className="lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="flex items-center gap-3 mb-8 bg-white/80 p-3 rounded-2xl inline-flex border border-white/10">
            <Image src={"/logo.png"} alt="Care Plus" width={60} height={60} />
            <div className='flex flex-col space-y-2'>
              <span className="text-2xl font-bold tracking-tight text-slate-900 leading-none" style={{ fontFamily: 'var(--font-outfit)' }}>Care Plus</span>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 leading-none" style={{ fontFamily: 'var(--font-outfit)' }}>Raipur</span>
            </div>

          </div>
          <p className="text-slate-300 leading-relaxed mb-8 text-base md:text-lg">
            Modern technology, trusted expertise, and compassionate patient care under one roof in Raipur.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/share/1CzitrHvtM/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all shadow-lg shadow-blue-500/10">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </a>
            <a href="https://www.instagram.com/drvarungoelmsorthoraipur?igsh=MXJmdnVyaHFvNHBxMw==&utm_source=ig_contact_invite" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-all shadow-lg shadow-pink-500/10">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://wa.me/917701010703" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all shadow-lg shadow-green-500/10">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
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
              <a
                href="https://share.google/Yyl6oPd2XqbLlKgkD"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 hover:text-white transition-colors"
              >
                <MapPin className="w-6 h-6 shrink-0 mt-1" style={{ color: BRAND.tealLight }} />
                <span>Amaseoni, Vidhan Sabha Road, Next to Swarnbhoomi Colony, Raipur</span>
              </a>
            </li>
            <li className="flex items-center gap-4 text-lg">
              <Phone className="w-6 h-6 shrink-0" style={{ color: BRAND.tealLight }} />
              <div>

                <div className="text-slate-300 text-sm mt-1">Orthopadic: <a href="tel:+917701010703" className="hover:text-white transition-colors">7701010703</a></div>
                <div className="text-slate-300 text-sm mt-1">Pathology: <a href="tel:+917701010704" className="hover:text-white transition-colors">7701010704</a></div>
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
