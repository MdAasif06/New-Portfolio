import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, ArrowRight, Mail } from 'lucide-react';
import { Github, Linkedin } from '../components/SocialIcons';
import { PERSONAL_INFO } from '../constants';
import Button from '../components/Button';

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 18 }
    },
  };

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const projectsSec = document.querySelector('#projects');
    if (projectsSec) {
      window.scrollTo({
        top: (projectsSec as HTMLElement).offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden px-6"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10"
      >
        {/* MERN Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {PERSONAL_INFO.role}
          </span>
        </motion.div>

        {/* Title Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-text-theme mb-6"
        >
          Building Modern <br className="hidden sm:inline" />
          <span className="text-gradient">Full Stack</span> <br className="sm:hidden" />
          Web Applications.
        </motion.h1>

        {/* Typing Subheading */}
        <motion.div 
          variants={itemVariants}
          className="text-xl md:text-2xl font-semibold text-primary/95 min-h-[40px] mb-6"
        >
          <TypeAnimation
            sequence={[
              'Specialist in MongoDB Schemas.',
              1800,
              'Developer of Express RESTful APIs.',
              1800,
              'Architect of React Interactive UIs.',
              1800,
              'Engineer of Scalable Node.js Backends.',
              1800,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        {/* Summary Description */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-muted-theme max-w-3xl leading-relaxed mb-10"
        >
          {PERSONAL_INFO.subheading}
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4.5 mb-12 w-full sm:w-auto"
        >
          <Button
            variant="primary"
            size="lg"
            href={PERSONAL_INFO.resumeUrl}
            className="gap-2.5 w-full sm:w-auto"
            download
          >
            <Download className="w-5 h-5" />
            Download Resume
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={handleScrollToProjects}
            className="gap-2.5 w-full sm:w-auto hover-target"
          >
            View Projects
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>

        {/* Social Icons Links */}
        <motion.div variants={itemVariants} className="flex items-center gap-5">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-xl border border-border-theme bg-card-theme/40 flex items-center justify-center text-muted-theme hover:text-text-theme hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-115"
            aria-label="GitHub Profile"
          >
            <Github className="w-5.5 h-5.5" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-xl border border-border-theme bg-card-theme/40 flex items-center justify-center text-muted-theme hover:text-text-theme hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-115"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5.5 h-5.5" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="w-11 h-11 rounded-xl border border-border-theme bg-card-theme/40 flex items-center justify-center text-muted-theme hover:text-text-theme hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-115"
            aria-label="Send Email"
          >
            <Mail className="w-5.5 h-5.5" />
          </a>
        </motion.div>
      </motion.div>

      {/* Mouse scroll-indicator animation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-muted-theme/40 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-2 rounded-full bg-primary animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
