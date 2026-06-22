import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';
import { Copy, CheckCircle2, Mail, Send } from 'lucide-react';

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00f5ff] to-[#7c3aed] mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <GlassCard className="neon-border p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Left Column: Info */}
              <div className="flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-white mb-6">Let's Connect</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  I'm currently looking for new opportunities in Cloud Administration and Cybersecurity. 
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                
                <div 
                  onClick={handleCopy}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#00f5ff]/50 cursor-pointer transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#00f5ff]/10 flex items-center justify-center text-[#00f5ff] group-hover:scale-110 transition-transform">
                    <Mail size={20} />
                  </div>
                  <div className="flex-grow overflow-hidden">
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email Me</div>
                    <div className="text-gray-200 font-medium truncate">{content.contact.email}</div>
                  </div>
                  <div className="text-gray-500 group-hover:text-[#00f5ff]">
                    {copied ? <CheckCircle2 className="text-green-400" size={20} /> : <Copy size={20} />}
                  </div>
                </div>

                {copied && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-sm mt-3 ml-2 flex items-center gap-2"
                  >
                    <CheckCircle2 size={16} /> Email copied to clipboard!
                  </motion.div>
                )}
              </div>

              {/* Right Column: Form */}
              <div>
                <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00f5ff]/50 focus:bg-white/[0.05] transition-all"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00f5ff]/50 focus:bg-white/[0.05] transition-all"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Your Message" 
                      rows={4}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00f5ff]/50 focus:bg-white/[0.05] transition-all resize-none"
                    ></textarea>
                  </div>
                  <Button type="submit" variant="primary" className="w-full mt-2 flex items-center justify-center gap-2">
                    Send Message <Send size={18} />
                  </Button>
                </form>
              </div>

            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
