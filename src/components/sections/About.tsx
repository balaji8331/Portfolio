import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { GlassCard } from '../ui/GlassCard';

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00f5ff] to-[#7c3aed] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-br from-[#00f5ff] to-[#7c3aed]">
              <div className="absolute inset-0 rounded-full blur-xl bg-gradient-to-br from-[#00f5ff]/50 to-[#7c3aed]/50 -z-10 animate-pulse" />
              <div className="w-full h-full rounded-full bg-[#0a0a0f] border-4 border-[#0a0a0f] overflow-hidden relative">
                <img 
                  src="https://balaji8331.github.io/Portfolio/assets/Balaji_photo.jpeg" 
                  alt="Arigala Balaji"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <GlassCard className="h-full">
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {content.about.bio}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {content.about.stats.map((stat, idx) => (
                  <motion.div 
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                    className="text-center p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#00f5ff]/30 transition-colors"
                  >
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold text-white mb-1">
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-4 font-medium">Currently Learning</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 rounded-full border border-[#00f5ff]/30 bg-[#00f5ff]/5 backdrop-blur-sm text-[#00f5ff] text-sm font-medium shadow-[0_0_10px_rgba(0,245,255,0.1)]">CEH Certification</span>
                    <span className="px-4 py-2 rounded-full border border-[#00f5ff]/30 bg-[#00f5ff]/5 backdrop-blur-sm text-[#00f5ff] text-sm font-medium shadow-[0_0_10px_rgba(0,245,255,0.1)]">OSCP</span>
                    <span className="px-4 py-2 rounded-full border border-[#00f5ff]/30 bg-[#00f5ff]/5 backdrop-blur-sm text-[#00f5ff] text-sm font-medium shadow-[0_0_10px_rgba(0,245,255,0.1)]">TryHackMe (Top 1%)</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-4 font-medium">Interests</h3>
                  <div className="flex flex-wrap gap-4">
                    <span className="flex items-center gap-2 text-gray-200 bg-white/[0.03] border border-white/10 hover:border-[#7c3aed]/50 transition-colors px-4 py-2.5 rounded-xl text-sm">☁️ Cloud Security</span>
                    <span className="flex items-center gap-2 text-gray-200 bg-white/[0.03] border border-white/10 hover:border-[#7c3aed]/50 transition-colors px-4 py-2.5 rounded-xl text-sm">🔐 Ethical Hacking</span>
                    <span className="flex items-center gap-2 text-gray-200 bg-white/[0.03] border border-white/10 hover:border-[#7c3aed]/50 transition-colors px-4 py-2.5 rounded-xl text-sm">🤖 Automation</span>
                    <span className="flex items-center gap-2 text-gray-200 bg-white/[0.03] border border-white/10 hover:border-[#7c3aed]/50 transition-colors px-4 py-2.5 rounded-xl text-sm">🛡️ SOC Analysis</span>
                  </div>
                </motion.div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
