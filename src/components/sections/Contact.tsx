import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { Copy, CheckCircle2, Mail, Send } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin, FaInstagram as Instagram, FaTwitter as Twitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleCopy = () => {
    navigator.clipboard.writeText(content.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill all fields');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email');
      return;
    }
    
    setStatus('sending');
    
    try {
      emailjs.init({
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
      });

      // Email 1: Notify Balaji
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
        import.meta.env.VITE_EMAILJS_TEMPLATE_NOTIFY || "template_notify",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "arigalabalaji8331@gmail.com",
          reply_to: formData.email,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
        }
      );
      
      // Email 2: Thank you to visitor
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID", 
        import.meta.env.VITE_EMAILJS_TEMPLATE_THANKS || "template_thankyou",
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: formData.email,
          reply_to: "arigalabalaji8331@gmail.com",
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
        }
      );
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset to idle after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
      
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="pt-12 pb-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF3A3A] via-[#FF6B00] to-[#00FFB2] mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-10 font-mono">
          <span className="px-5 py-2 rounded-sm border border-[#00B4FF]/30 bg-[#00B4FF]/10 text-xs font-bold text-[#00B4FF] shadow-[0_0_15px_rgba(0,180,255,0.1)]">
            📍 Bengaluru, India
          </span>
          <span className="px-5 py-2 rounded-sm border border-[#00FFB2]/30 bg-[#00FFB2]/10 text-xs font-bold text-[#00FFB2] shadow-[0_0_15px_rgba(0,255,178,0.1)] flex items-center">
            <span className="mr-2 animate-pulse">●</span> 💼 Open to Opportunities
          </span>
          <span className="px-5 py-2 rounded-sm border border-[#FF6B00]/30 bg-[#FF6B00]/10 text-xs font-bold text-[#FF6B00] shadow-[0_0_15px_rgba(255,107,0,0.1)]">
            ⚡ Responds within 24hrs
          </span>
        </div>

        <div className="max-w-4xl mx-auto">
          <div 
            className="p-8 md:p-12 rounded-xl"
            style={{
              background: 'rgba(13, 17, 30, 0.85)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(255, 58, 58, 0.2)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04), 0 20px 40px rgba(0,0,0,0.4)'
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Left Column: Info */}
              <div className="flex flex-col justify-center">
                <div className="font-mono text-xs text-[#00FFB2] mb-2">&gt; connect --target recruiter</div>
                <h3 className="text-3xl font-bold text-[#FF3A3A] mb-6">Let's Connect</h3>
                <p className="text-[#8892A4] mb-8 leading-relaxed text-sm">
                  I'm currently looking for new opportunities in Cloud Administration and Cybersecurity. 
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                
                <div 
                  onClick={handleCopy}
                  className="flex items-center gap-4 p-4 rounded-sm bg-white/[0.02] border border-white/10 hover:border-[#FF3A3A]/50 cursor-pointer transition-all group mb-8"
                >
                  <div className="w-12 h-12 rounded-sm bg-[#FF3A3A]/10 flex items-center justify-center text-[#FF3A3A] group-hover:scale-110 transition-transform">
                    <Mail size={20} />
                  </div>
                  <div className="flex-grow overflow-hidden">
                    <div className="text-[0.6rem] text-[#8892A4] uppercase tracking-wider mb-1 font-mono">Email Me</div>
                    <div className="text-[#E8EDF5] font-medium truncate font-mono text-sm">{content.contact.email}</div>
                  </div>
                  <div className="text-[#8892A4] group-hover:text-[#FF3A3A]">
                    {copied ? <CheckCircle2 className="text-[#00FFB2]" size={20} /> : <Copy size={20} />}
                  </div>
                </div>

                {/* Social Links Row */}
                <div className="grid grid-cols-2 gap-4">
                  <a href={content.contact.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-sm border border-white/5 bg-white/[0.02] text-[#8892A4] hover:text-white hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all font-mono text-xs">
                    <Github size={16} /> GitHub
                  </a>
                  <a href={content.contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-sm border border-white/5 bg-white/[0.02] text-[#8892A4] hover:text-[#0077b5] hover:border-[#0077b5]/50 hover:shadow-[0_0_15px_rgba(0,119,181,0.3)] transition-all font-mono text-xs">
                    <Linkedin size={16} /> LinkedIn
                  </a>
                  <a href="https://www.instagram.com/itsme_manoj15/" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-sm border border-white/5 bg-white/[0.02] text-[#8892A4] hover:text-[#E1306C] hover:border-[#E1306C]/50 hover:shadow-[0_0_15px_rgba(225,48,108,0.3)] transition-all font-mono text-xs">
                    <Instagram size={16} /> Instagram
                  </a>
                  <a href="https://x.com/Balaji1530" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-sm border border-white/5 bg-white/[0.02] text-[#8892A4] hover:text-[#1DA1F2] hover:border-[#1DA1F2]/50 hover:shadow-[0_0_15px_rgba(29,161,242,0.3)] transition-all font-mono text-xs">
                    <Twitter size={16} /> Twitter
                  </a>
                </div>

                {copied && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[#00FFB2] text-xs font-mono mt-4 flex items-center gap-2"
                  >
                    <CheckCircle2 size={14} /> Email copied to clipboard!
                  </motion.div>
                )}
              </div>

              {/* Right Column: Form */}
              <div>
                <form className="flex flex-col gap-4 h-full" onSubmit={handleSubmit}>
                  <div>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="// your name" 
                      className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-4 py-3 text-[#E8EDF5] placeholder-[#8892A4]/50 focus:outline-none focus:border-[#FF3A3A] focus:shadow-[0_0_0_2px_rgba(255,58,58,0.2)] font-mono text-sm transition-all"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="// your email" 
                      className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-4 py-3 text-[#E8EDF5] placeholder-[#8892A4]/50 focus:outline-none focus:border-[#FF3A3A] focus:shadow-[0_0_0_2px_rgba(255,58,58,0.2)] font-mono text-sm transition-all"
                    />
                  </div>
                  <div className="flex-grow">
                    <textarea 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="// your message" 
                      className="w-full h-full min-h-[150px] bg-white/[0.03] border border-white/10 rounded-sm px-4 py-3 text-[#E8EDF5] placeholder-[#8892A4]/50 focus:outline-none focus:border-[#FF3A3A] focus:shadow-[0_0_0_2px_rgba(255,58,58,0.2)] font-mono text-sm transition-all resize-none"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={status === 'sending'}
                    className={`w-full mt-2 flex items-center justify-center gap-2 px-6 py-4 rounded-sm font-bold tracking-wide transition-all font-mono ${status === 'error' ? 'animate-shake' : ''} ${status === 'success' ? 'scale-105' : ''}`}
                    style={{
                      background: status === 'success' ? 'linear-gradient(135deg, #00FFB2, #00B4FF)' : status === 'error' ? 'linear-gradient(135deg, #FF3A3A, #8B0000)' : 'linear-gradient(135deg, #FF3A3A, #FF6B00)',
                      color: status === 'success' ? '#080B10' : 'white',
                      opacity: status === 'sending' ? 0.7 : 1,
                      cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                      boxShadow: status === 'idle' ? '0 0 15px rgba(255,58,58,0.3)' : 'none'
                    }}
                  >
                    {status === 'idle' && <> &gt; send_message --secure ✈ </>}
                    {status === 'sending' && (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        &gt; transmitting...
                      </>
                    )}
                    {status === 'success' && '✓ message_sent --delivered'}
                    {status === 'error' && '✗ transmission_failed --retry'}
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      {/* Success Toast */}
      {status === 'success' && (
        <div 
          className="fixed bottom-6 right-6 z-[9999] animate-slideInRight rounded-lg p-5 pointer-events-none"
          style={{
            background: 'rgba(0,255,178,0.1)',
            border: '1px solid #00FFB2',
            color: '#00FFB2',
            fontFamily: 'monospace',
            boxShadow: '0 0 20px rgba(0,255,178,0.3)',
          }}
        >
          <div className="font-bold mb-2 text-sm text-white">✓ Message transmitted successfully!</div>
          <div className="text-[0.65rem] opacity-80 leading-relaxed">&gt; Auto-reply sent to {formData.email || 'user'}</div>
          <div className="text-[0.65rem] opacity-80 leading-relaxed">&gt; Balaji will respond within 24hrs</div>
        </div>
      )}
    </section>
  );
};
