import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Experience from '../sections/Experience';
import Projects from '../sections/Projects';
import Services from '../sections/Services';
import Certifications from '../sections/Certifications';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

export const Portfolio: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Floating Header */}
      <Navbar />

      {/* Structured Sections */}
      <main>
        {/* Hero Landing */}
        <Hero />

        {/* Narrative bio, highlights, stats */}
        <About />

        {/* Technical skills circular rings */}
        <Skills />

        {/* Project cards grids */}
        <Projects />

        {/* Alternating vertical timeline */}
        <Experience />

        {/* Offerings and design details */}
        <Services />

        {/* Credentials and certified details */}
        <Certifications />

        {/* Form validations and maps */}
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
};
export default Portfolio;
