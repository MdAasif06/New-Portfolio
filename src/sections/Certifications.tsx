import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { CERTIFICATIONS } from '../constants';
import SectionTitle from '../components/SectionTitle';

const getCertIcon = (name: string) => {
  const IconComponent = (Icons as any)[name];
  return IconComponent ? <IconComponent className="w-5.5 h-5.5" /> : <Icons.Award className="w-5.5 h-5.5" />;
};

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="Credentials"
          title="Certifications"
          description="Verified course achievements and developer certifications from industry leaders."
        />

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.credentialId}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              className="glow-effect glass-effect p-6 rounded-2xl border border-border-theme bg-card-theme/15 hover:bg-card-theme/30 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top part */}
              <div>
                {/* Header Icon */}
                <div className="w-11 h-11 rounded-xl bg-secondary-accent/15 text-secondary-accent flex items-center justify-center mb-5">
                  {getCertIcon(cert.iconName)}
                </div>

                {/* Title */}
                <h3 className="text-base md:text-lg font-bold text-text-theme mb-2 leading-snug">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-sm font-semibold text-primary mb-1">
                  {cert.issuer}
                </p>

                {/* Date */}
                <p className="text-xs text-muted-theme">
                  Issued: {cert.date}
                </p>
              </div>

              {/* Credential ID */}
              <div className="mt-5 pt-4 border-t border-border-theme/60 flex items-center justify-between">
                <span className="text-[11px] font-mono text-muted-theme">
                  ID: {cert.credentialId}
                </span>
                <span className="text-[11px] font-semibold text-secondary-accent uppercase tracking-wider">
                  Verified
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Certifications;
