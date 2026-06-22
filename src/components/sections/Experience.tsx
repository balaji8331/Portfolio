import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { GlassCard } from '../ui/GlassCard';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00f5ff] to-[#7c3aed] mx-auto rounded-full" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00f5ff] via-[#7c3aed] to-transparent -translate-x-1/2 opacity-30" />

          {content.experience.map((exp, idx) => (
            <div key={idx} className={`relative flex flex-col md:flex-row items-center mb-12 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-[#00f5ff] border-4 border-[#0a0a0f] -translate-x-1/2 shadow-[0_0_15px_#00f5ff] z-10" />

              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`w-full md:w-1/2 pl-20 md:px-12 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}
              >
                <GlassCard hoverEffect>
                  <div className="text-[#00f5ff] font-medium text-sm mb-2">{exp.period}</div>
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                  <div className="text-gray-400 text-sm mb-4 font-medium">{exp.company} • {exp.location}</div>
                  
                  <ul className="space-y-2 text-gray-300 text-sm text-left">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#7c3aed] mt-1 mr-2">▹</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
