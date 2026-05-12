'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BRAND, modernEase } from '../lib/constants';
import { CarePlusLogo } from './UIElements';

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return p + 4;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0, filter: 'blur(10px)', transition: { duration: 0.5, ease: modernEase } }}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: modernEase }}
        className="flex flex-col items-center"
      >
        <CarePlusLogo className="w-32 h-32 mb-8 drop-shadow-xl" />

        <div className="flex items-center gap-4 w-64">
          <div className="h-1 flex-1 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ width: `${progress}%`, backgroundColor: BRAND.teal }}
            />
          </div>
          <span className="text-sm font-bold text-slate-400 w-9 tabular-nums">{progress}%</span>
        </div>
      </motion.div>
    </motion.div>
  );
};
