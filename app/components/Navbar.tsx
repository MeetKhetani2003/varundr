'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BRAND, modernEase } from '../lib/constants';
import { CarePlusLogo, Button } from './UIElements';
import { useAppointment } from '../lib/AppointmentContext';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const pathname = usePathname();
  const { openModal } = useAppointment();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/doctors', label: 'Doctors' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' }
  ];

  // All pages now have a cinematic dark hero, so we use light text on all of them when not scrolled
  const useLightText = !isScrolled;

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href === '/services' && (pathname === '/orthopedic' || pathname === '/pathology' || pathname.startsWith('/services/'))) return true;
    if (href === '/doctors' && pathname.startsWith('/doctors/')) return true;
    return pathname === href;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-6'}`}
      >
        <div className="main-container">
          <div className={`
            relative flex items-center justify-between transition-all duration-500 rounded-[2rem]
            ${isScrolled 
              ? 'bg-white/95 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white px-8 py-3' 
              : 'px-4 py-2 bg-transparent'
            }
          `}>
            
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative">
                <CarePlusLogo className={`w-10 h-10 transition-transform duration-500 group-hover:scale-110 ${useLightText ? 'filter brightness-0 invert' : ''}`} />
                <motion.div 
                  layoutId="logo-glow"
                  className="absolute inset-0 bg-teal-400/20 blur-xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity" 
                />
              </div>
              <div className="flex flex-col">
                <span className={`text-xl font-bold tracking-tight leading-none transition-colors duration-500 ${useLightText ? 'text-white' : 'text-slate-900'}`} style={{ fontFamily: 'var(--font-outfit)' }}>
                  Care Plus
                </span>
                <span className={`text-[10px] uppercase tracking-[0.25em] font-bold mt-1.5 transition-colors duration-500 ${useLightText ? 'text-teal-400' : 'text-[#0F5B5D]'}`}>
                  Raipur
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div 
              className={`
                hidden lg:flex items-center gap-1 p-1.5 rounded-full transition-all duration-500
                ${isScrolled ? 'bg-slate-100 border border-slate-200' : 'bg-white/10 backdrop-blur-md border border-white/20'}
              `}
              onMouseLeave={() => setHoveredPath(null)}
            >
              {navLinks.map((link) => {
                const isLinkActive = isActive(link.href);
                const isHovered = hoveredPath === link.href;
                // A link should have white text ONLY if it currently possesses the animated pill
                const hasPill = isHovered || (isLinkActive && !hoveredPath);
                
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setHoveredPath(link.href)}
                    className={`
                      relative px-6 py-2.5 rounded-full text-[13px] font-bold tracking-wide transition-all duration-300
                      ${hasPill
                        ? 'text-white' 
                        : useLightText ? 'text-white hover:text-teal-300' : 'text-slate-600 hover:text-slate-900'
                      }
                    `}
                  >
                    {hasPill && (
                      <motion.div 
                        layoutId="nav-pill-premium" 
                        className="absolute inset-0 rounded-full shadow-lg z-0" 
                        style={{ backgroundColor: BRAND.teal }} 
                        transition={{ type: "spring", stiffness: 400, damping: 30 }} 
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="flex flex-col items-end">
                <span className={`text-[9px] font-black uppercase tracking-[0.2em] transition-colors duration-500 ${useLightText ? 'text-white/40' : 'text-slate-400'}`}>
                  24/7 Support
                </span>
                <a href="tel:7701010703" className={`text-sm font-black transition-colors duration-500 ${useLightText ? 'text-white' : 'text-[#0F5B5D]'}`}>
                  +91 77010 10703
                </a>
              </div>
              <Button 
                onClick={() => openModal()}
                className={`
                  h-12 px-7 rounded-xl text-sm font-bold shadow-xl transition-all duration-300
                  ${useLightText ? 'bg-white text-slate-900 hover:bg-teal-50 hover:scale-105' : 'hover:scale-105'}
                `}
              >
                Book Visit
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button 
              className={`lg:hidden p-3 rounded-2xl transition-all duration-300 ${useLightText ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`} 
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Modern Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[70] bg-white flex flex-col"
          >
            <div className="p-8 flex justify-between items-center border-b border-slate-100">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4">
                <CarePlusLogo className="w-10 h-10" />
                <span className="text-2xl font-black tracking-tighter text-slate-900" style={{ fontFamily: 'var(--font-outfit)' }}>Care Plus</span>
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-4 bg-slate-100 rounded-2xl text-slate-900 hover:bg-slate-200 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-10 px-8">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`
                        group flex items-center justify-between p-6 rounded-3xl transition-all duration-300
                        ${isActive(link.href) ? 'bg-[#0F5B5D] text-white shadow-xl' : 'hover:bg-slate-50 text-slate-900'}
                      `}
                    >
                      <span className="text-2xl font-bold tracking-tight">{link.label}</span>
                      <ChevronRight className={`w-6 h-6 transition-transform duration-300 group-hover:translate-x-1 ${isActive(link.href) ? 'text-teal-200' : 'text-slate-300'}`} />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-slate-50 border-t border-slate-100">
              <Button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openModal();
                }}
                className="w-full h-16 rounded-2xl text-lg font-bold shadow-2xl mb-6"
              >
                Secure Appointment
              </Button>
              <div className="flex items-center justify-between px-2">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Emergency 24/7</span>
                  <span className="text-xl font-black text-slate-900">+91 77010 10703</span>
                </div>
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-[#0F5B5D]">
                  <Phone className="w-6 h-6" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
