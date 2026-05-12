'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BRAND, fadeUpVariant } from '../lib/constants';

export const CarePlusLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M38 10 h24 a 8 8 0 0 1 8 8 v20 h20 a 8 8 0 0 1 8 8 v24 a 8 8 0 0 1 -8 8 h-20 v20 a 8 8 0 0 1 -8 8 h-24 a 8 8 0 0 1 -8 -8 v-20 h-20 a 8 8 0 0 1 -8 -8 v-24 a 8 8 0 0 1 8 -8 h20 v-20 a 8 8 0 0 1 8 -8 z" stroke={BRAND.teal} strokeWidth="6" strokeLinejoin="round" fill="white" />
    <path d="M50 40 C 50 40, 42 30, 50 22 C 58 30, 50 40, 50 40 Z" fill={BRAND.red} />
    <path d="M43 30 L46 30 L48 26 L52 34 L54 30 L57 30" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 22 30 C 15 45, 10 65, 40 60 C 65 55, 60 85, 80 75" stroke={BRAND.red} strokeWidth="4" strokeLinecap="round" fill="none" />
    <circle cx="18" cy="25" r="4" fill={BRAND.red} />
    <circle cx="26" cy="22" r="4" fill={BRAND.red} />
    <circle cx="78" cy="78" r="6" fill={BRAND.red} />
  </svg>
);

export const Button = ({ children, variant = 'primary', className = '', onClick, type = 'button' }: any) => {
  const baseStyle = "relative overflow-hidden rounded-full font-semibold px-8 py-4 transition-all duration-300 flex items-center justify-center gap-2 group active:scale-95";
  const variants: Record<string, string> = {
    primary: `bg-[${BRAND.teal}] text-white shadow-[0_8px_20px_rgba(15,91,93,0.2)] hover:shadow-[0_12px_25px_rgba(15,91,93,0.3)] hover:-translate-y-0.5 border border-transparent`,
    secondary: "bg-white text-slate-900 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md",
    danger: `bg-[${BRAND.red}] text-white shadow-[0_8px_20px_rgba(216,17,32,0.2)] hover:shadow-[0_12px_25px_rgba(216,17,32,0.3)] hover:-translate-y-0.5 border border-transparent`,
    ghost: "bg-transparent text-slate-700 hover:bg-slate-50 border border-transparent"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant] || variants.primary} ${className}`}
      style={variant === 'primary' ? { backgroundColor: BRAND.teal } : variant === 'danger' ? { backgroundColor: BRAND.red } : {}}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};

export const SectionHeading = ({ title, subtitle, centered = false }: { title: string; subtitle: string; centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center flex flex-col items-center' : ''}`}>
    <motion.span
      variants={fadeUpVariant}
      className="font-bold tracking-[0.15em] uppercase text-xs mb-3 block"
      style={{ color: BRAND.red }}
    >
      {subtitle}
    </motion.span>
    <motion.h2
      variants={fadeUpVariant}
      className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1]"
      style={{ fontFamily: 'var(--font-outfit)' }}
    >
      {title}
    </motion.h2>
  </div>
);
