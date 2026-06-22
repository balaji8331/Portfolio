import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { FaAws, FaGithub, FaServer } from 'react-icons/fa';
import { SiGooglecloud, SiTryhackme } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

const getCategoryColor = (category: string) => {
  if (category.includes("Cloud")) return "#FF3A3A"; // Red
  if (category.includes("DevOps")) return "#FF6B00"; // Orange
  if (category.includes("Security")) return "#00FFB2"; // Green
  return "#00B4FF"; // Blue (Scripting/Other)
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF3A3A] via-[#FF6B00] to-[#00FFB2] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {content.skills.map((skillGroup, idx) => {
            const dotColor = getCategoryColor(skillGroup.category);
            return (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
              >
                <div className="glass-card h-full p-6 rounded-xl flex flex-col">
                  <h3 className="text-xl font-mono font-bold mb-6 text-[#FF3A3A] border-b border-[#FF3A3A]/20 pb-4 flex items-center">
                    <span 
                      className="w-2.5 h-2.5 rounded-full mr-3 shadow-[0_0_8px_currentColor]" 
                      style={{ backgroundColor: dotColor, color: dotColor }} 
                    />
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((item, itemIdx) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.4,
                          delay: 0.2 + (idx * 0.1) + (itemIdx * 0.05) 
                        }}
                        className="px-3 py-1.5 text-sm font-mono font-bold rounded-sm border transition-all cursor-default"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          borderColor: 'rgba(255,255,255,0.1)',
                          color: '#8892A4'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(255,58,58,0.1)';
                          e.currentTarget.style.borderColor = '#FF3A3A';
                          e.currentTarget.style.color = '#FF3A3A';
                          e.currentTarget.style.boxShadow = '0 0 10px rgba(255,58,58,0.3)';
                          e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                          e.currentTarget.style.color = '#8892A4';
                          e.currentTarget.style.boxShadow = 'none';
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications & Platforms Marquee */}
        <div className="mt-20">
          <h3 className="text-sm font-mono font-bold mb-8 text-center text-[#FF3A3A] uppercase tracking-widest">
            &gt; Certifications & Platforms_
          </h3>
          <div className="marquee-container py-4">
            <div className="marquee-content">
              {/* Items */}
              <div className="glass-card flex items-center gap-4 px-6 py-4 min-w-max hover:-translate-y-1 transition-transform cursor-default hover:border-[#FF3A3A] hover:shadow-[0_0_20px_rgba(255,58,58,0.3)] rounded-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-[#00FFB2]/20 text-[#00FFB2] text-[0.6rem] font-mono px-2 py-0.5 border-b border-l border-[#00FFB2]/30 rounded-bl-sm">● ACTIVE</div>
                <VscAzure className="w-8 h-8 text-[#008ad7] group-hover:drop-shadow-[0_0_8px_#008ad7] transition-all" />
                <span className="font-bold text-[#E8EDF5] font-mono tracking-wide">Azure</span>
              </div>
              <div className="glass-card flex items-center gap-4 px-6 py-4 min-w-max hover:-translate-y-1 transition-transform cursor-default hover:border-[#FF3A3A] hover:shadow-[0_0_20px_rgba(255,58,58,0.3)] rounded-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-[#00FFB2]/20 text-[#00FFB2] text-[0.6rem] font-mono px-2 py-0.5 border-b border-l border-[#00FFB2]/30 rounded-bl-sm">● VERIFIED</div>
                <FaAws className="w-8 h-8 text-[#ff9900] group-hover:drop-shadow-[0_0_8px_#ff9900] transition-all" />
                <span className="font-bold text-[#E8EDF5] font-mono tracking-wide">AWS</span>
              </div>
              <div className="glass-card flex items-center gap-4 px-6 py-4 min-w-max hover:-translate-y-1 transition-transform cursor-default hover:border-[#FF3A3A] hover:shadow-[0_0_20px_rgba(255,58,58,0.3)] rounded-xl relative overflow-hidden group">
                <SiGooglecloud className="w-8 h-8 text-[#4285f4] group-hover:drop-shadow-[0_0_8px_#4285f4] transition-all" />
                <span className="font-bold text-[#E8EDF5] font-mono tracking-wide">GCP</span>
              </div>
              <div className="glass-card flex items-center gap-4 px-6 py-4 min-w-max hover:-translate-y-1 transition-transform cursor-default hover:border-[#FF3A3A] hover:shadow-[0_0_20px_rgba(255,58,58,0.3)] rounded-xl relative overflow-hidden group">
                <FaServer className="w-8 h-8 text-[#f80000] group-hover:drop-shadow-[0_0_8px_#f80000] transition-all" />
                <span className="font-bold text-[#E8EDF5] font-mono tracking-wide">OCI</span>
              </div>
              <div className="glass-card flex items-center gap-4 px-6 py-4 min-w-max hover:-translate-y-1 transition-transform cursor-default hover:border-[#FF3A3A] hover:shadow-[0_0_20px_rgba(255,58,58,0.3)] rounded-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-[#00FFB2]/20 text-[#00FFB2] text-[0.6rem] font-mono px-2 py-0.5 border-b border-l border-[#00FFB2]/30 rounded-bl-sm">● ACTIVE</div>
                <SiTryhackme className="w-8 h-8 text-[#ffffff] group-hover:drop-shadow-[0_0_8px_#ffffff] transition-all" />
                <span className="font-bold text-[#E8EDF5] font-mono tracking-wide">TryHackMe</span>
              </div>
              <div className="glass-card flex items-center gap-4 px-6 py-4 min-w-max hover:-translate-y-1 transition-transform cursor-default hover:border-[#FF3A3A] hover:shadow-[0_0_20px_rgba(255,58,58,0.3)] rounded-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-[#00FFB2]/20 text-[#00FFB2] text-[0.6rem] font-mono px-2 py-0.5 border-b border-l border-[#00FFB2]/30 rounded-bl-sm">● ACTIVE</div>
                <FaGithub className="w-8 h-8 text-white group-hover:drop-shadow-[0_0_8px_white] transition-all" />
                <span className="font-bold text-[#E8EDF5] font-mono tracking-wide">GitHub</span>
              </div>
            </div>
            {/* Duplicate for infinite scroll */}
            <div className="marquee-content" aria-hidden="true">
              <div className="glass-card flex items-center gap-4 px-6 py-4 min-w-max hover:-translate-y-1 transition-transform cursor-default hover:border-[#FF3A3A] hover:shadow-[0_0_20px_rgba(255,58,58,0.3)] rounded-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-[#00FFB2]/20 text-[#00FFB2] text-[0.6rem] font-mono px-2 py-0.5 border-b border-l border-[#00FFB2]/30 rounded-bl-sm">● ACTIVE</div>
                <VscAzure className="w-8 h-8 text-[#008ad7] group-hover:drop-shadow-[0_0_8px_#008ad7] transition-all" />
                <span className="font-bold text-[#E8EDF5] font-mono tracking-wide">Azure</span>
              </div>
              <div className="glass-card flex items-center gap-4 px-6 py-4 min-w-max hover:-translate-y-1 transition-transform cursor-default hover:border-[#FF3A3A] hover:shadow-[0_0_20px_rgba(255,58,58,0.3)] rounded-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-[#00FFB2]/20 text-[#00FFB2] text-[0.6rem] font-mono px-2 py-0.5 border-b border-l border-[#00FFB2]/30 rounded-bl-sm">● VERIFIED</div>
                <FaAws className="w-8 h-8 text-[#ff9900] group-hover:drop-shadow-[0_0_8px_#ff9900] transition-all" />
                <span className="font-bold text-[#E8EDF5] font-mono tracking-wide">AWS</span>
              </div>
              <div className="glass-card flex items-center gap-4 px-6 py-4 min-w-max hover:-translate-y-1 transition-transform cursor-default hover:border-[#FF3A3A] hover:shadow-[0_0_20px_rgba(255,58,58,0.3)] rounded-xl relative overflow-hidden group">
                <SiGooglecloud className="w-8 h-8 text-[#4285f4] group-hover:drop-shadow-[0_0_8px_#4285f4] transition-all" />
                <span className="font-bold text-[#E8EDF5] font-mono tracking-wide">GCP</span>
              </div>
              <div className="glass-card flex items-center gap-4 px-6 py-4 min-w-max hover:-translate-y-1 transition-transform cursor-default hover:border-[#FF3A3A] hover:shadow-[0_0_20px_rgba(255,58,58,0.3)] rounded-xl relative overflow-hidden group">
                <FaServer className="w-8 h-8 text-[#f80000] group-hover:drop-shadow-[0_0_8px_#f80000] transition-all" />
                <span className="font-bold text-[#E8EDF5] font-mono tracking-wide">OCI</span>
              </div>
              <div className="glass-card flex items-center gap-4 px-6 py-4 min-w-max hover:-translate-y-1 transition-transform cursor-default hover:border-[#FF3A3A] hover:shadow-[0_0_20px_rgba(255,58,58,0.3)] rounded-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-[#00FFB2]/20 text-[#00FFB2] text-[0.6rem] font-mono px-2 py-0.5 border-b border-l border-[#00FFB2]/30 rounded-bl-sm">● ACTIVE</div>
                <SiTryhackme className="w-8 h-8 text-[#ffffff] group-hover:drop-shadow-[0_0_8px_#ffffff] transition-all" />
                <span className="font-bold text-[#E8EDF5] font-mono tracking-wide">TryHackMe</span>
              </div>
              <div className="glass-card flex items-center gap-4 px-6 py-4 min-w-max hover:-translate-y-1 transition-transform cursor-default hover:border-[#FF3A3A] hover:shadow-[0_0_20px_rgba(255,58,58,0.3)] rounded-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-[#00FFB2]/20 text-[#00FFB2] text-[0.6rem] font-mono px-2 py-0.5 border-b border-l border-[#00FFB2]/30 rounded-bl-sm">● ACTIVE</div>
                <FaGithub className="w-8 h-8 text-white group-hover:drop-shadow-[0_0_8px_white] transition-all" />
                <span className="font-bold text-[#E8EDF5] font-mono tracking-wide">GitHub</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
