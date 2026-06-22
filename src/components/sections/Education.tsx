import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/content';

export const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF3A3A] via-[#FF6B00] to-[#00FFB2] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Education Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-[#E8EDF5] mb-6 flex items-center">
              <span className="w-8 h-8 rounded-sm bg-[#00B4FF]/15 text-[#00B4FF] flex items-center justify-center mr-3 font-mono">
                &gt;
              </span>
              Academic Background
            </h3>
            
            {content.education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
                className="p-6 rounded-xl transition-all duration-300 flex gap-4 relative"
                style={{
                  background: 'rgba(13, 17, 30, 0.85)',
                  backdropFilter: 'blur(24px)',
                  border: '1px solid rgba(255, 58, 58, 0.2)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04), 0 20px 40px rgba(0,0,0,0.4)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0,180,255,0.5)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0,180,255,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 180, 255, 0.2)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-[#00B4FF]/15 flex items-center justify-center text-[#00B4FF]">
                  🎓
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                  <div className="text-[#00B4FF] font-medium mb-1">{edu.institution}</div>
                  <div className="flex items-center gap-4 text-sm mt-2">
                    <span className="text-[#8892A4] font-mono">{edu.year}</span>
                    <span className="text-[#00FFB2] font-mono font-bold">{edu.score}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-[#E8EDF5] mb-6 flex items-center">
              <span className="w-8 h-8 rounded-sm bg-[#FF3A3A]/15 text-[#FF3A3A] flex items-center justify-center mr-3 font-mono">
                #
              </span>
              Certifications
            </h3>
            
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="p-6 rounded-xl flex items-center gap-4 relative"
                style={{
                  background: 'rgba(255,58,58,0.1)',
                  border: '1px solid #FF3A3A',
                  color: '#FF3A3A'
                }}
              >
                <span className="animate-pulse">●</span>
                <div>
                  <div className="font-bold text-lg">Certified Ethical Hacker (CEH)</div>
                  <div className="text-xs font-mono mt-1 opacity-80">IN PROGRESS</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="p-6 rounded-xl flex items-center gap-4 relative shadow-[0_0_15px_rgba(255,58,58,0.4)]"
                style={{
                  background: 'rgba(255,58,58,0.1)',
                  border: '1px solid #FF3A3A',
                  color: '#FF3A3A'
                }}
              >
                <span className="animate-pulse">●</span>
                <div>
                  <div className="font-bold text-lg">Offensive Security Certified Professional (OSCP)</div>
                  <div className="text-xs font-mono mt-1 opacity-80">PREPARING</div>
                </div>
              </motion.div>
            </div>

            {/* Learning Path Progress Bars */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="mt-10 p-6 rounded-xl bg-[#080B10]/80 border border-white/5"
            >
              <h4 className="text-sm font-mono text-[#8892A4] uppercase tracking-widest mb-6">Learning Path Progress</h4>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-[#E8EDF5]">CEH Progress</span>
                    <span className="text-[#FF3A3A]">45%</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-[#FF3A3A] shadow-[0_0_10px_#FF3A3A]"
                      initial={{ width: 0 }}
                      whileInView={{ width: "45%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-[#E8EDF5]">OSCP Progress</span>
                    <span className="text-[#FF6B00]">15%</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-[#FF6B00] shadow-[0_0_10px_#FF6B00]"
                      initial={{ width: 0 }}
                      whileInView={{ width: "15%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
