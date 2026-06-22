import React from 'react';
import { FaGithub as Github, FaLinkedin as Linkedin, FaInstagram as Instagram, FaTwitter as Twitter } from 'react-icons/fa';
import { content } from '../../data/content';

export const Footer = () => {
  return (
    <footer className="relative pt-12 pb-8 bg-[#080B10] mt-auto">
      {/* 1px shimmer gradient line (red -> orange -> green -> blue) */}
      <div 
        className="absolute top-0 left-0 w-full h-[1px] opacity-70" 
        style={{ background: 'linear-gradient(90deg, #FF3A3A, #FF6B00, #00FFB2, #00B4FF)' }}
      />
      
      <div className="container mx-auto px-6 flex flex-col items-center justify-center text-center">
        <p className="font-mono text-[#8892A4] text-sm mb-6">
          &gt; echo "Built with passion by <span className="text-[#E8EDF5] font-bold">Arigala Balaji</span> &copy; 2026"
        </p>

        {/* Row of 4 social icons with hover red glow */}
        <div className="flex space-x-6 mb-6">
          <a href={content.contact.github} target="_blank" rel="noreferrer" className="text-[#8892A4] hover:text-[#FF3A3A] hover:drop-shadow-[0_0_8px_#FF3A3A] transition-all hover:scale-110 transform">
            <Github size={24} />
          </a>
          <a href={content.contact.linkedin} target="_blank" rel="noreferrer" className="text-[#8892A4] hover:text-[#FF3A3A] hover:drop-shadow-[0_0_8px_#FF3A3A] transition-all hover:scale-110 transform">
            <Linkedin size={24} />
          </a>
          <a href={content.contact.instagram} target="_blank" rel="noreferrer" className="text-[#8892A4] hover:text-[#FF3A3A] hover:drop-shadow-[0_0_8px_#FF3A3A] transition-all hover:scale-110 transform">
            <Instagram size={24} />
          </a>
          <a href={content.contact.twitter} target="_blank" rel="noreferrer" className="text-[#8892A4] hover:text-[#FF3A3A] hover:drop-shadow-[0_0_8px_#FF3A3A] transition-all hover:scale-110 transform">
            <Twitter size={24} />
          </a>
        </div>
        
        {/* Small text */}
        <p className="text-[#8892A4]/60 text-xs font-mono tracking-widest mt-2">
          Associate System Administrator | Cybersecurity Enthusiast
        </p>
      </div>
    </footer>
  );
};
