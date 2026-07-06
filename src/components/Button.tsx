import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  download?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className,
  ...props
}) => {
  const baseClasses = 
    'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-bg-theme disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-primary to-secondary-accent hover:from-primary-hover hover:to-secondary-hover text-white shadow-lg shadow-primary/20 hover:shadow-primary/30 border border-transparent',
    secondary: 'bg-bg-sec border border-border-theme text-text-theme hover:bg-card-theme/90',
    outline: 'bg-transparent border border-border-theme hover:border-primary text-text-theme hover:bg-primary/5',
    ghost: 'bg-transparent text-muted-theme hover:bg-bg-sec/50 hover:text-text-theme',
  };

  const buttonContent = (
    <motion.span
      className="flex items-center justify-center gap-2"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a
        href={href}
        className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)}
        {...(props as any)}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)}
      {...props}
    >
      {buttonContent}
    </button>
  );
};
export default Button;
