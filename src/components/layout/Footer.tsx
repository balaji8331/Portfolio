import React from 'react';
import { content } from '../../data/content';
import { Mail } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="relative pt-16 pb-8 border-t border-white/10 bg-[#0a0a0f] overflow-hidden mt-24">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00f5ff] to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 flex flex-col items-center justify-center text-center">
        <div className="flex space-x-6 mb-8">
          <a href={content.contact.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform">
            <Github size={24} />
          </a>
          <a href={content.contact.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0077b5] transition-colors hover:scale-110 transform">
            <Linkedin size={24} />
          </a>
          <a href={`mailto:${content.contact.email}`} className="text-gray-400 hover:text-red-400 transition-colors hover:scale-110 transform">
            <Mail size={24} />
          </a>
        </div>
        
        <p className="text-gray-500 font-medium tracking-wide">
          Built with <span className="text-red-500 mx-1">❤️</span> by {content.hero.name}
        </p>
        <p className="text-gray-600 text-sm mt-2">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};
