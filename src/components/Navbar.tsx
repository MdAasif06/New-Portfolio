import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Terminal } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { cn } from '../utils/cn';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    let lastY = 0;

    const handleScroll = () => {
      lastY = window.scrollY;
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        // 1. Detect scroll position for background styling
        setIsScrolled(lastY > 20);

        // 2. Calculate scroll progress percentage
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0) {
          const prog = (lastY / totalHeight) * 100;
          setScrollProgress(prog);
        }

        // 3. Highlight active nav link based on scroll section
        const sections = NAV_LINKS.map((link) => document.querySelector(link.href));
        const scrollPos = lastY + 200;

        let newActive: string | null = null;
        sections.forEach((section) => {
          if (!section) return;
          const top = (section as HTMLElement).offsetTop;
          const height = (section as HTMLElement).offsetHeight;
          const id = section.getAttribute('id');
          if (id && scrollPos >= top && scrollPos < top + height) {
            newActive = id;
          }
        });

        if (newActive) {
          const activeStr: string = newActive;
          setActiveSection((s) => (s !== activeStr ? activeStr : s));
        }

        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const targetElement = document.querySelector(href);
    if (!targetElement) return;

    window.scrollTo({
      top: (targetElement as HTMLElement).offsetTop - 80,
      behavior: 'smooth',
    });
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'py-4' : 'py-6'
      )}
    >
      {/* Scroll Progress Bar */}
      <div 
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-primary to-secondary-accent transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Brand */}
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, '#home')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary-accent flex items-center justify-center shadow-lg shadow-primary/20 dark:shadow-primary/5 transition-transform duration-300 group-hover:scale-105">
            <Terminal className="w-5 h-5 text-white" />
          </div>
          <span className="font-sans font-bold text-xl tracking-tight">
            Asif<span className="text-primary font-light">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 p-1.5 rounded-full border border-border-theme bg-card-theme/40 backdrop-blur-md">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300',
                  isActive ? 'text-white' : 'text-muted-theme hover:text-text-theme'
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavBg"
                    className="absolute inset-0 bg-primary/20 border border-primary/30 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Theme Control and Mobile Trigger */}
        <div className="flex items-center gap-3">
          {/* Theme Switcher Toggle */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl border border-border-theme bg-card-theme/40 backdrop-blur-md flex items-center justify-center text-muted-theme hover:text-text-theme hover:bg-card-theme/70 transition-all duration-300 shadow-sm cursor-pointer"
            aria-label="Toggle Theme"
          >
            <AnimatePresence mode="wait">
              {theme === 'dark' ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="w-5 h-5 text-amber-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="w-5 h-5 text-indigo-600" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-xl border border-border-theme bg-card-theme/40 backdrop-blur-md flex items-center justify-center text-muted-theme hover:text-text-theme hover:bg-card-theme/70 transition-all duration-300 cursor-pointer"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="absolute top-full left-0 w-full px-6 py-4 md:hidden bg-card-theme/95 backdrop-blur-xl border-b border-border-theme shadow-xl"
          >
            <nav className="flex flex-col gap-3 py-2">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={cn(
                      'px-4 py-2.5 rounded-xl text-base font-medium transition-all duration-200 border',
                      isActive
                        ? 'bg-primary/10 border-primary/20 text-primary'
                        : 'border-transparent text-muted-theme hover:bg-bg-sec/50 hover:text-text-theme'
                    )}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
export default Navbar;
