import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1200; // Total ms to load
    const intervalTime = 12; // Update rate in ms
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300); // Small buffer before finishing
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ 
          y: '-100%', 
          opacity: 0,
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
        }}
        className="fixed inset-0 w-full h-full bg-[#050816] z-[99999] flex flex-col items-center justify-center select-none"
      >
        <div className="flex flex-col items-center max-w-xs w-full px-6">
          {/* Logo Terminal Text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-lg font-bold text-white mb-6 flex items-center gap-1.5"
          >
            <span className="text-primary">&gt;_</span>
            <span>asif.init()</span>
          </motion.div>

          {/* Loading Progress Bar Outer */}
          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mb-3 relative">
            {/* Inner progress loader */}
            <div 
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-secondary-accent transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Percentage text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono text-xs text-muted-theme font-semibold"
          >
            {Math.floor(progress)}%
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
export default LoadingScreen;
