import React from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { Github } from './SocialIcons';
import { useTilt } from '../hooks/useTilt';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  features: string[];
  github: string;
  live: string;
  imageSrc: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  features,
  github,
  live,
  imageSrc,
}) => {
  // Apply our custom performant tilt hook
  const tiltRef = useTilt(6, 400);

  return (
    <div
      ref={tiltRef}
      className="glass-effect rounded-2xl border border-border-theme bg-card-theme/30 overflow-hidden flex flex-col h-full group hover:shadow-xl transition-all duration-300 transform-gpu"
    >
      {/* Project Image Frame */}
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border-theme bg-bg-sec/50">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        {/* Hover overlay with action links */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-white text-black hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="GitHub Repository"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-white text-black hover:bg-secondary-accent hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Live Demo"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-text-theme mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm md:text-base text-muted-theme mb-5 line-clamp-3">
          {description}
        </p>

        {/* Core Features List */}
        <div className="mb-6 flex-grow">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-theme mb-3">Key Features</h4>
          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-text-theme/90">
                <CheckCircle2 className="w-4.5 h-4.5 text-success shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border-theme">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium bg-bg-sec/80 text-muted-theme border border-border-theme rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
