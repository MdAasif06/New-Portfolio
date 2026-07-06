import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none select-none bg-bg-theme">
      {/* Linear-style grid system */}
      <div 
        className="absolute inset-0 w-full h-full opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--text) 1px, transparent 1px),
            linear-gradient(to bottom, var(--text) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Radial soft background overlay for modern contrast */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.07),transparent_50%)]" />

      {/* Blob 1: Sky Accent (Floating top-left-center) */}
      <motion.div
        className="absolute top-[-10%] left-[5%] w-[40vw] h-[40vw] rounded-full blur-[100px] opacity-[0.1] dark:opacity-[0.15] bg-gradient-to-br from-primary to-cyan-400"
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Blob 2: Violet Accent (Floating bottom-right-center) */}
      <motion.div
        className="absolute bottom-[-10%] right-[5%] w-[45vw] h-[45vw] rounded-full blur-[120px] opacity-[0.08] dark:opacity-[0.13] bg-gradient-to-tl from-secondary-accent to-fuchsia-500"
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 40, -50, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Subtle particle elements drifting in the background */}
      <div className="absolute inset-0 opacity-20 dark:opacity-40">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/40 dark:bg-primary/60"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100 - Math.random() * 100],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 12,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>
    </div>
  );
};
export default AnimatedBackground;
