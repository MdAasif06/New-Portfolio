import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';

interface SkillCardProps {
  name: string;
  level: number;
  iconName: string;
}

// Safely map string icon names to Lucide icons
const getIcon = (name: string) => {
  // Common fallback maps
  const keyMap: Record<string, string> = {
    ShieldAlert: 'Shield',
    FileHtml: 'FileCode2',
    KeyRound: 'KeyRound',
    Container: 'Box',
    UploadCloud: 'CloudUpload',
  };

  const finalName = keyMap[name] || name;
  const IconComponent = (Icons as any)[finalName];
  return IconComponent || Icons.Code; // Fallback to Code icon
};

export const SkillCard: React.FC<SkillCardProps> = ({ name, level, iconName }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = getIcon(iconName);

  // SVG Circle Calculations
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (level / 100) * circumference;

  return (
    <div
      className="relative flex items-center justify-between p-4 rounded-2xl border border-border-theme bg-card-theme/30 backdrop-blur-sm group hover:bg-card-theme/50 hover:border-primary/50 transition-all duration-300 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon and Title */}
      <div className="flex items-center gap-3.5">
        <div className="w-11 h-11 rounded-xl bg-bg-sec flex items-center justify-center text-muted-theme group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300">
          <Icon className="w-5.5 h-5.5" />
        </div>
        <span className="font-medium text-sm md:text-base text-text-theme/90 group-hover:text-text-theme transition-colors duration-300">
          {name}
        </span>
      </div>

      {/* SVG Circular Progress Loader */}
      <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
        <svg className="w-full h-full transform -rotate-90">
          {/* Background circle */}
          <circle
            cx="28"
            cy="28"
            r={radius}
            className="stroke-bg-sec fill-transparent"
            strokeWidth="3.5"
          />
          {/* Animated active level circle */}
          <motion.circle
            cx="28"
            cy="28"
            r={radius}
            className="stroke-primary fill-transparent"
            strokeWidth="3.5"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            strokeLinecap="round"
          />
        </svg>

        {/* Text percentage level center */}
        <span className="absolute text-[11px] font-bold text-muted-theme group-hover:text-primary transition-colors duration-300">
          {level}%
        </span>
      </div>

      {/* Animated Tooltip on Hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: -6, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute z-10 bottom-full left-1/2 -translate-x-1/2 px-3 py-1.5 text-xs font-semibold text-white bg-secondary-accent rounded-lg shadow-lg pointer-events-none whitespace-nowrap mb-1"
          >
            {level}% Proficiency
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 bg-secondary-accent rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default SkillCard;
