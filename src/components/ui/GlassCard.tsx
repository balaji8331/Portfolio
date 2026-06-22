import type { ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className, 
  hoverEffect = false,
  ...props 
}) => {
  return (
    <div 
      className={cn(
        "glass-card rounded-2xl p-6 md:p-8",
        hoverEffect && "hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,245,255,0.15),inset_0_0_20px_rgba(0,245,255,0.05)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
