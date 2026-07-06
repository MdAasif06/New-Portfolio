import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../constants';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';

export const Skills: React.FC = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="Proficiencies"
          title="Technical Skills"
          description="My engineering toolkit, categorized by core development layers and operational tooling."
        />

        {/* Categories Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <motion.div
              key={category.id}
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="p-6 rounded-2xl border border-border-theme bg-card-theme/15 backdrop-blur-sm flex flex-col gap-6"
            >
              {/* Category Title Header */}
              <div className="flex items-center justify-between pb-3 border-b border-border-theme">
                <h3 className="font-extrabold text-lg text-text-theme tracking-tight">
                  {category.title}
                </h3>
                <span className="text-xs font-semibold text-primary px-2.5 py-0.5 rounded-full bg-primary/10">
                  {category.skills.length} Items
                </span>
              </div>

              {/* Skills Grid for this Category */}
              <div className="flex flex-col gap-3">
                {category.skills.map((skill) => (
                  <motion.div key={skill.name} variants={cardVariants}>
                    <SkillCard
                      name={skill.name}
                      level={skill.level}
                      iconName={skill.iconName}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
