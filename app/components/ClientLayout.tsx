'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoadingScreen } from './LoadingScreen';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { BRAND } from '../lib/constants';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => { document.documentElement.style.scrollBehavior = 'auto'; };
  }, []);

  return (
    <div className="min-h-screen font-sans text-slate-900 selection:text-white" style={{ backgroundColor: '#ffffff' }}>
      <style>{`::selection { background-color: ${BRAND.teal}; color: white; }`}</style>

      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <Navbar />

          <main>
            {children}
          </main>

          <Footer />

          {/* Floating Action Button */}
          <motion.div
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, type: "spring" }}
            className="fixed bottom-6 right-6 z-50 flex flex-col gap-4"
          >
            <a href="https://wa.me/917701010703" target="_blank" rel="noreferrer" className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:scale-105 active:scale-95 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
            </a>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
