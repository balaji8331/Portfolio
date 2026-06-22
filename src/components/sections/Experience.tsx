import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/content';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF3A3A] via-[#FF6B00] to-[#00FFB2] mx-auto rounded-full" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#FF3A3A] via-[#FF6B00] to-[#00FFB2] -translate-x-1/2 shadow-[0_0_8px_rgba(255,58,58,0.5)]" />

          {content.experience.map((exp, idx) => {
            const isPresent = exp.period.toLowerCase().includes('present');
            return (
              <div key={idx} className={`relative flex flex-col md:flex-row items-center mb-16 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div 
                  className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full -translate-x-1/2 z-10" 
                  style={{
                    background: '#FF3A3A',
                    boxShadow: '0 0 0 4px rgba(255,58,58,0.2), 0 0 12px rgba(255,58,58,0.6)',
                    animation: 'pulseScale 2s infinite'
                  }}
                />

                <div className="hidden md:block md:w-1/2" />

                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className={`w-full md:w-1/2 pl-20 md:px-12 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}
                >
                  <div 
                    className="p-8 rounded-xl relative transition-all duration-300"
                    style={{
                      background: 'rgba(13, 17, 30, 0.9)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 58, 58, 0.2)',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,58,58,0.5)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,58,58,0.2)'; }}
                  >
                    {isPresent && (
                      <div className="absolute top-4 right-4 bg-[#00FFB2]/10 border border-[#00FFB2] text-[#00FFB2] text-[0.7rem] px-2 py-1 rounded-sm font-mono font-bold shadow-[0_0_10px_rgba(0,255,178,0.2)]">
                        <span className="mr-1 animate-pulse">●</span> ACTIVE
                      </div>
                    )}
                    
                    <div className="font-mono font-bold text-sm mb-2" style={{ color: isPresent ? '#FF3A3A' : '#FF6B00' }}>
                      {exp.period}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#E8EDF5] mb-1">{exp.title}</h3>
                    <div className="text-[#8892A4] text-sm mb-6 font-medium">{exp.company} • {exp.location}</div>
                    
                    <ul className="space-y-3 text-[#E8EDF5] text-sm text-left inline-block">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#FF3A3A] mt-1 mr-3 text-xs">▹</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        @keyframes pulseScale {
          0% { transform: translateX(-50%) scale(1); }
          50% { transform: translateX(-50%) scale(1.3); }
          100% { transform: translateX(-50%) scale(1); }
        }
      `}</style>
    </section>
  );
};
