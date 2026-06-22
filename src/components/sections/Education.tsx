import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { GlassCard } from '../ui/GlassCard';
import { GraduationCap, Award } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Education & <span className="text-gradient">Certs</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00f5ff] to-[#7c3aed] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {content.education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard hoverEffect className="h-full flex flex-col">
                <div className="w-12 h-12 rounded-full bg-[#00f5ff]/10 flex items-center justify-center mb-6 text-[#00f5ff]">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                <p className="text-gray-400 font-medium mb-1">{edu.institution}</p>
                <div className="mt-auto pt-4 flex justify-between items-center text-sm">
                  <span className="text-gray-500">{edu.year}</span>
                  <span className="text-[#00f5ff] font-medium">{edu.score}</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <GlassCard className="flex flex-col md:flex-row items-center gap-6 justify-center">
            <div className="flex items-center gap-3 text-xl font-semibold text-white">
              <Award className="text-[#7c3aed]" />
              <span>Certifications in Progress:</span>
            </div>
            <div className="flex flex-wrap gap-4">
              {content.certifications.map(cert => (
                <div key={cert} className="px-4 py-2 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/30 text-[#d8b4fe] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                  {cert}
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};
