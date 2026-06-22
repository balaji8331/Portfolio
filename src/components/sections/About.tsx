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
                {/* Placeholder Avatar - User can replace with actual image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#7c3aed]/20 to-transparent flex items-end justify-center pb-4">
                  <div className="w-24 h-24 rounded-full bg-white/10 mb-4" />
                </div>
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-white/20" />
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
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
