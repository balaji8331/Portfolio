import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { GlassCard } from '../ui/GlassCard';
import { FaAws, FaGithub, FaServer } from 'react-icons/fa';
import { SiGooglecloud, SiTryhackme } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00f5ff] to-[#7c3aed] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {content.skills.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard hoverEffect className="h-full">
                <h3 className="text-xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((item, itemIdx) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 200, 
                        damping: 10,
                        delay: 0.2 + (idx * 0.1) + (itemIdx * 0.05) 
                      }}
                      className="px-3 py-1.5 text-sm font-medium rounded-full bg-white/[0.05] border border-white/10 text-gray-300 hover:border-[#00f5ff]/50 hover:text-[#00f5ff] hover:bg-[#00f5ff]/10 hover:shadow-[0_0_15px_rgba(0,245,255,0.2)] transition-all cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Certifications & Platforms Marquee */}
        <div className="mt-20">
          <h3 className="text-xl font-semibold mb-8 text-center text-gray-300 uppercase tracking-widest">
            Certifications & Platforms
          </h3>
          <div className="marquee-container py-4">
            <div className="marquee-content">
              {/* Items */}
              <GlassCard className="flex items-center gap-3 px-6 py-3 min-w-max hover:-translate-y-1 transition-transform cursor-default">
                <VscAzure className="w-6 h-6 text-[#008ad7]" />
                <span className="font-medium text-white">Azure</span>
              </GlassCard>
              <GlassCard className="flex items-center gap-3 px-6 py-3 min-w-max hover:-translate-y-1 transition-transform cursor-default">
                <FaAws className="w-6 h-6 text-[#ff9900]" />
                <span className="font-medium text-white">AWS</span>
              </GlassCard>
              <GlassCard className="flex items-center gap-3 px-6 py-3 min-w-max hover:-translate-y-1 transition-transform cursor-default">
                <SiGooglecloud className="w-6 h-6 text-[#4285f4]" />
                <span className="font-medium text-white">GCP</span>
              </GlassCard>
              <GlassCard className="flex items-center gap-3 px-6 py-3 min-w-max hover:-translate-y-1 transition-transform cursor-default">
                <FaServer className="w-6 h-6 text-[#f80000]" />
                <span className="font-medium text-white">OCI</span>
              </GlassCard>
              <GlassCard className="flex items-center gap-3 px-6 py-3 min-w-max hover:-translate-y-1 transition-transform cursor-default">
                <SiTryhackme className="w-6 h-6 text-[#ffffff]" />
                <span className="font-medium text-white">TryHackMe</span>
              </GlassCard>
              <GlassCard className="flex items-center gap-3 px-6 py-3 min-w-max hover:-translate-y-1 transition-transform cursor-default">
                <FaGithub className="w-6 h-6 text-white" />
                <span className="font-medium text-white">GitHub</span>
              </GlassCard>
            </div>
            {/* Duplicate for infinite scroll */}
            <div className="marquee-content" aria-hidden="true">
              <GlassCard className="flex items-center gap-3 px-6 py-3 min-w-max hover:-translate-y-1 transition-transform cursor-default">
                <VscAzure className="w-6 h-6 text-[#008ad7]" />
                <span className="font-medium text-white">Azure</span>
              </GlassCard>
              <GlassCard className="flex items-center gap-3 px-6 py-3 min-w-max hover:-translate-y-1 transition-transform cursor-default">
                <FaAws className="w-6 h-6 text-[#ff9900]" />
                <span className="font-medium text-white">AWS</span>
              </GlassCard>
              <GlassCard className="flex items-center gap-3 px-6 py-3 min-w-max hover:-translate-y-1 transition-transform cursor-default">
                <SiGooglecloud className="w-6 h-6 text-[#4285f4]" />
                <span className="font-medium text-white">GCP</span>
              </GlassCard>
              <GlassCard className="flex items-center gap-3 px-6 py-3 min-w-max hover:-translate-y-1 transition-transform cursor-default">
                <FaServer className="w-6 h-6 text-[#f80000]" />
                <span className="font-medium text-white">OCI</span>
              </GlassCard>
              <GlassCard className="flex items-center gap-3 px-6 py-3 min-w-max hover:-translate-y-1 transition-transform cursor-default">
                <SiTryhackme className="w-6 h-6 text-[#ffffff]" />
                <span className="font-medium text-white">TryHackMe</span>
              </GlassCard>
              <GlassCard className="flex items-center gap-3 px-6 py-3 min-w-max hover:-translate-y-1 transition-transform cursor-default">
                <FaGithub className="w-6 h-6 text-white" />
                <span className="font-medium text-white">GitHub</span>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
