import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/content';

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF3A3A] via-[#FF6B00] to-[#00FFB2] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div 
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full"
              style={{
                border: '3px solid transparent',
                background: 'linear-gradient(#0C1018, #0C1018) padding-box, linear-gradient(135deg, #FF3A3A, #FF6B00, #00FFB2) border-box',
                boxShadow: '0 0 30px rgba(255,58,58,0.3), 0 0 60px rgba(255,58,58,0.1)'
              }}
            >
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <img 
                  src="https://balaji8331.github.io/Portfolio/assets/Balaji_photo.jpeg" 
                  alt="Arigala Balaji"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-8"
          >
            <div className="glass-card p-8 md:p-10 rounded-2xl h-full flex flex-col relative overflow-hidden"
              style={{
                border: '1px solid rgba(255,58,58,0.2)',
                background: 'rgba(13, 17, 30, 0.85)',
                backdropFilter: 'blur(24px)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04), 0 20px 40px rgba(0,0,0,0.4)'
              }}
            >
              <p className="text-[#8892A4] text-lg leading-relaxed mb-8">
                {content.about.bio}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                {content.about.stats.map((stat, idx) => (
                  <motion.div 
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 + idx * 0.1 }}
                    className="text-center p-4 rounded-xl border border-[#FF3A3A]/20 bg-[#080B10]/50"
                  >
                    <div className="text-2xl mb-2 text-[#8892A4]">{stat.icon}</div>
                    <div className="text-3xl font-black text-[#FF3A3A] mb-1">
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-[0.7rem] text-[#8892A4] uppercase font-mono">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-8 flex-grow">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <h3 className="text-sm text-[#FF3A3A] uppercase tracking-wider mb-4 font-mono font-bold">Currently Learning</h3>
                  <div className="flex flex-wrap gap-3 font-mono">
                    <span className="px-4 py-2 rounded-sm border border-[#FF3A3A] bg-[#FF3A3A]/15 text-[#FF3A3A] text-xs font-bold shadow-[0_0_10px_rgba(255,58,58,0.2)] flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF3A3A] mr-2 animate-pulse" /> CEH Certification
                    </span>
                    <span className="px-4 py-2 rounded-sm border border-[#FF3A3A] bg-[#FF3A3A]/15 text-[#FF3A3A] text-xs font-bold shadow-[0_0_10px_rgba(255,58,58,0.2)] flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF3A3A] mr-2 animate-pulse" /> OSCP
                    </span>
                    <span className="px-4 py-2 rounded-sm border border-[#00FFB2] bg-[#00FFB2]/10 text-[#00FFB2] text-xs font-bold shadow-[0_0_10px_rgba(0,255,178,0.2)] flex items-center">
                      TryHackMe (Top 1%)
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h3 className="text-sm text-[#FF3A3A] uppercase tracking-wider mb-4 font-mono font-bold">Interests</h3>
                  <div className="flex flex-wrap gap-4 font-mono text-xs font-bold">
                    <span className="text-[#00B4FF] bg-[#00B4FF]/10 border border-[#00B4FF]/30 px-4 py-2.5 rounded-sm">☁️ Cloud Security</span>
                    <span className="text-[#FF3A3A] bg-[#FF3A3A]/10 border border-[#FF3A3A]/30 px-4 py-2.5 rounded-sm">🔐 Ethical Hacking</span>
                    <span className="text-[#FF6B00] bg-[#FF6B00]/10 border border-[#FF6B00]/30 px-4 py-2.5 rounded-sm">🤖 Automation</span>
                    <span className="text-[#00FFB2] bg-[#00FFB2]/10 border border-[#00FFB2]/30 px-4 py-2.5 rounded-sm">🛡️ SOC Analysis</span>
                  </div>
                </motion.div>
              </div>

              {/* Threat Intel Feed */}
              <div className="mt-10 pt-4 border-t border-[#FF3A3A]/20 bg-[#080B10] rounded-sm border relative overflow-hidden h-20">
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-b from-[#080B10] via-transparent to-[#080B10] z-10" />
                <div className="absolute top-1 left-3 text-[0.6rem] text-[#FF3A3A] font-bold font-mono tracking-widest z-20">THREAT INTEL FEED_</div>
                <div className="marquee-container flex-col gap-0 animate-[scrollUp_8s_linear_infinite] mt-6 px-3">
                  <div className="text-[#00FFB2] font-mono text-xs py-1">&gt; Scanning network perimeter... [SECURE]</div>
                  <div className="text-[#00FFB2] font-mono text-xs py-1">&gt; TryHackMe rank: Top 1% globally</div>
                  <div className="text-[#00FFB2] font-mono text-xs py-1">&gt; CEH certification: IN PROGRESS</div>
                  <div className="text-[#00FFB2] font-mono text-xs py-1">&gt; Last pentest: Web App Assessment</div>
                  <div className="text-[#00FFB2] font-mono text-xs py-1">&gt; System logs analyzed: OK</div>
                  {/* duplicate for loop */}
                  <div className="text-[#00FFB2] font-mono text-xs py-1">&gt; Scanning network perimeter... [SECURE]</div>
                  <div className="text-[#00FFB2] font-mono text-xs py-1">&gt; TryHackMe rank: Top 1% globally</div>
                  <div className="text-[#00FFB2] font-mono text-xs py-1">&gt; CEH certification: IN PROGRESS</div>
                </div>
              </div>
              <style>{`
                @keyframes scrollUp {
                  0% { transform: translateY(0); }
                  100% { transform: translateY(-110px); }
                }
              `}</style>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
