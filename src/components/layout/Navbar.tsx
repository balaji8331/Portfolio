import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../ui/GlassCard';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = navItems.map(item => item.href.substring(1));
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          current = section;
        }
      }
      setActive(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "py-4 bg-[#080B10]/90 backdrop-blur-[24px] border-b border-[#FF3A3A]/20 shadow-[0_1px_0_rgba(255,58,58,0.1),0_4px_20px_rgba(0,0,0,0.5)]" : "py-6 bg-transparent"
    )}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-black text-[#FF3A3A] tracking-wider z-50 flex items-center">
          AB.<span className="animate-[pulse_1s_step-end_infinite] font-mono">_</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1 glass-card px-2 py-1 rounded-full bg-white/[0.01]">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-colors font-mono",
                active === item.href.substring(1) ? "text-[#FF3A3A]" : "text-[#8892A4] hover:text-[#FF3A3A]"
              )}
            >
              {active === item.href.substring(1) && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute inset-0 bg-[#FF3A3A]/15 rounded-full border border-[#FF3A3A]/40 shadow-[0_0_12px_rgba(255,58,58,0.3)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50 p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <motion.div 
          className={cn(
            "fixed inset-0 bg-[#0a0a0f]/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8",
            isOpen ? "pointer-events-auto" : "pointer-events-none"
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-2xl font-bold tracking-wide transition-colors font-mono",
                active === item.href.substring(1) ? "text-[#FF3A3A]" : "text-[#8892A4] hover:text-[#FF3A3A]"
              )}
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      </div>
    </nav>
  );
};
