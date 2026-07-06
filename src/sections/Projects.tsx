import React from 'react';
import { motion } from 'framer-motion';
import { FEATURED_PROJECTS } from '../constants';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';

// Import images from assets folder
import imagifyImage from '../assets/imagify_mockup.png';
import carRentalImage from '../assets/car_rental_mockup.png';

const imageMap: Record<string, string> = {
  imagify_mockup: imagifyImage,
  car_rental_mockup: carRentalImage,
};

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="Portfolio"
          title="Featured Projects"
          description="A showcase of full stack systems built with Stripe payment models, AI endpoints, and complex relational/non-relational schemas."
        />

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {FEATURED_PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                features={project.features}
                github={project.github}
                live={project.live}
                imageSrc={imageMap[project.image] || imagifyImage}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
