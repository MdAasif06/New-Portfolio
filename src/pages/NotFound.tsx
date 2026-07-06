import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../components/Button';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative px-6 bg-bg-theme overflow-hidden">
      {/* Background radial overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.06),transparent_50%)] pointer-events-none" />

      <div className="text-center max-w-lg z-10 flex flex-col items-center">
        {/* Animated 404 Badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          className="text-8xl md:text-9xl font-extrabold tracking-widest text-gradient mb-6"
        >
          404
        </motion.div>

        {/* Header Title */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-text-theme mb-4"
        >
          Lost in Space?
        </motion.h1>

        {/* Message description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="text-sm md:text-base text-muted-theme mb-10 leading-relaxed"
        >
          The page you are looking for does not exist, has been removed, or was relocated into another quadrant.
        </motion.p>

        {/* Button Trigger */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="w-full sm:w-auto"
        >
          <Button
            variant="primary"
            size="md"
            href="/"
            className="gap-2.5 w-full sm:w-auto hover-target"
          >
            <ArrowLeft className="w-4 h-4" />
            <Home className="w-4 h-4" />
            Back to Home
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
export default NotFound;
