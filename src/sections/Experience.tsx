import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Award } from 'lucide-react';
import { EXPERIENCE_TIMELINE } from '../constants';
import SectionTitle from '../components/SectionTitle';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 relative bg-bg-sec/30">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          badge="Chronology"
          title="Work Experience"
          description="My career journey, detailing industry roles, key projects, and organizational accomplishments."
        />

        {/* Vertical Timeline container */}
        <div className="relative border-l border-border-theme/80 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:top-0 md:before:h-full md:before:w-[1px] md:before:bg-border-theme/80 pl-6 md:pl-0">
          {EXPERIENCE_TIMELINE.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.company}
                className="relative mb-12 md:mb-16 md:flex md:justify-between items-start"
              >
                {/* Glowing Center Node Point */}
                <div className="absolute left-[-31px] md:left-1/2 md:-translate-x-1/2 top-1.5 w-6.5 h-6.5 rounded-full border border-primary bg-bg-theme flex items-center justify-center shadow-lg shadow-primary/20 z-10">
                  <Briefcase className="w-3 h-3 text-primary" />
                </div>

                {/* Left space filler on desktop (shifts even cards to the right side, odd to the left) */}
                <div className={`hidden md:block w-[45%] ${isEven ? 'order-1' : 'order-3'}`} />

                {/* Timeline Card */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`w-full md:w-[45%] p-6 rounded-2xl border border-border-theme bg-card-theme/30 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow duration-300 ${
                    isEven ? 'order-3 md:text-left' : 'order-1 md:text-right'
                  }`}
                >
                  {/* Header */}
                  <div className={`flex flex-col mb-4 ${isEven ? 'md:items-start' : 'md:items-end'}`}>
                    <span className="text-lg md:text-xl font-extrabold text-text-theme">
                      {item.role}
                    </span>
                    <span className="text-sm font-semibold text-primary/95 mt-1">
                      {item.company}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-muted-theme mt-2 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  {/* Bullet Achievements */}
                  <ul className={`space-y-2.5 text-sm text-muted-theme ${
                    isEven ? 'text-left' : 'md:text-right text-left'
                  }`}>
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex gap-2 items-start justify-start md:justify-normal">
                        {(!isEven) ? (
                          <>
                            <span className="md:block hidden flex-grow" />
                            <span className="text-text-theme/90 text-left md:text-right order-1">{achievement}</span>
                            <Award className="w-4 h-4 text-secondary-accent shrink-0 mt-0.5 order-2 md:order-last" />
                          </>
                        ) : (
                          <>
                            <Award className="w-4 h-4 text-secondary-accent shrink-0 mt-0.5" />
                            <span className="text-text-theme/90 text-left">{achievement}</span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Experience;
