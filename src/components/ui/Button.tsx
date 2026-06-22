import React from 'react';
import { cn } from './GlassCard';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'icon';
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className, 
  variant = 'primary',
  href,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 backdrop-blur-md cursor-pointer";
  
  const variants = {
    primary: "px-6 py-3 bg-white/[0.05] neon-border text-white hover:bg-[#00f5ff]/10 hover:text-[#00f5ff]",
    secondary: "px-6 py-3 bg-white/[0.03] border border-white/10 text-gray-300 hover:text-white hover:border-white/30",
    icon: "p-3 bg-white/[0.03] border border-white/10 text-gray-300 hover:text-[#00f5ff] hover:border-[#00f5ff]/50 hover:shadow-[0_0_15px_rgba(0,245,255,0.3)]"
  };

  if (href) {
    return (
      <a 
        href={href} 
        className={cn(baseStyles, variants[variant], className)}
        target={href.startsWith('#') ? "_self" : "_blank"}
        rel={href.startsWith('#') ? undefined : "noopener noreferrer"}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
