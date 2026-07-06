import React from 'react';
import { cn } from '../utils/cn';

interface SectionTitleProps {
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  badge,
  title,
  description,
  align = 'center',
  className,
}) => {
  const alignClasses = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start';

  return (
    <div
      className={cn('flex flex-col mb-16 max-w-4xl', alignClasses, className)}
    >
      {badge && (
        <span className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20 bg-primary/5 rounded-full mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-text-theme mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-base md:text-lg text-muted-theme max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};
export default SectionTitle;
