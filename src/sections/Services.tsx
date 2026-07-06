import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { SERVICES } from '../constants';
import SectionTitle from '../components/SectionTitle';

const getServiceIcon = (name: string) => {
  const IconComponent = (Icons as any)[name];
  return IconComponent ? <IconComponent className="w-6 h-6" /> : <Icons.HelpCircle className="w-6 h-6" />;
};

export const Services: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="services" className="py-24 px-6 relative bg-bg-sec/30">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="Services"
          title="What I Offer"
          description="High-quality, specialized services targeting performance, scalability, security, and responsiveness."
        />

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="glow-effect glass-effect p-8 rounded-2xl border border-border-theme bg-card-theme/20 hover:bg-card-theme/40 hover:-translate-y-1.5 transition-all duration-300 group cursor-default"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                {getServiceIcon(service.iconName)}
              </div>

              {/* Title Header */}
              <h3 className="text-lg md:text-xl font-bold text-text-theme mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-muted-theme leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Services;
