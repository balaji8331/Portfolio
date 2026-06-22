import React from 'react';
import { FaGithub as Github, FaLinkedin as Linkedin, FaInstagram as Instagram, FaTwitter as Twitter } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="relative pt-10 pb-6 border-t border-[#FF3A3A]/20 bg-[#080B10]/95 overflow-hidden mt-24">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF3A3A] to-transparent opacity-50 animated-divider" />
      
      <div className="container mx-auto px-6 flex flex-col items-center justify-center text-center">
        <p className="font-mono text-[#8892A4] text-[0.85rem] mb-6">
          &gt; echo "Built with passion by <span className="text-[#FF3A3A] font-bold">Arigala Balaji</span> &copy; 2026"
        </p>

        <div className="flex space-x-6 mb-6">
          <a href="https://github.com/balaji8331" target="_blank" rel="noreferrer" className="text-[#8892A4] hover:text-[#FF3A3A] hover:drop-shadow-[0_0_6px_#FF3A3A] transition-all hover:scale-125 transform">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/arigala-balaji-45b2a8279/" target="_blank" rel="noreferrer" className="text-[#8892A4] hover:text-[#FF3A3A] hover:drop-shadow-[0_0_6px_#FF3A3A] transition-all hover:scale-125 transform">
            <Linkedin size={20} />
          </a>
          <a href="https://www.instagram.com/itsme_manoj15/" target="_blank" rel="noreferrer" className="text-[#8892A4] hover:text-[#FF3A3A] hover:drop-shadow-[0_0_6px_#FF3A3A] transition-all hover:scale-125 transform">
            <Instagram size={20} />
          </a>
          <a href="https://x.com/Balaji1530" target="_blank" rel="noreferrer" className="text-[#8892A4] hover:text-[#FF3A3A] hover:drop-shadow-[0_0_6px_#FF3A3A] transition-all hover:scale-125 transform">
            <Twitter size={20} />
          </a>
        </div>
        
        <p className="text-[#8892A4]/40 text-[0.7rem] uppercase tracking-widest font-mono mt-2">
          Associate System Administrator | Cybersecurity Enthusiast
        </p>
      </div>
    </footer>
  );
};
