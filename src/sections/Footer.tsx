import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { Github, Linkedin } from '../components/SocialIcons';
import { PERSONAL_INFO } from '../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border-theme bg-bg-theme relative z-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo Copyright */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-bold text-base">
            Asif<span className="text-primary">.dev</span>
          </span>
          <p className="text-xs text-muted-theme text-center md:text-left">
            &copy; {currentYear} Asif. All rights reserved. Designed & built with precision.
          </p>
        </div>

        {/* Social Icons Link List */}
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg border border-border-theme flex items-center justify-center text-muted-theme hover:text-text-theme hover:border-primary hover:bg-primary/5 transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <Github className="w-4.5 h-4.5" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg border border-border-theme flex items-center justify-center text-muted-theme hover:text-text-theme hover:border-primary hover:bg-primary/5 transition-all duration-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4.5 h-4.5" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="w-9 h-9 rounded-lg border border-border-theme flex items-center justify-center text-muted-theme hover:text-text-theme hover:border-primary hover:bg-primary/5 transition-all duration-300"
            aria-label="Send Email"
          >
            <Mail className="w-4.5 h-4.5" />
          </a>
        </div>

        {/* Scroll Back to Top Button */}
        <button
          onClick={handleBackToTop}
          className="w-10 h-10 rounded-xl border border-border-theme bg-card-theme/40 flex items-center justify-center text-muted-theme hover:text-text-theme hover:border-primary hover:bg-primary/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-sm"
          aria-label="Scroll Back To Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

      </div>
    </footer>
  );
};
export default Footer;
