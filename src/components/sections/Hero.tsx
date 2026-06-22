import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { tsParticles } from '@tsparticles/engine';
import { FaGithub as Github, FaLinkedin as Linkedin, FaEnvelope as Mail } from 'react-icons/fa';
import { content } from '../../data/content';

const terminalLines = [
  { color: '#00FFB2', text: '$ nmap -sV 192.168.1.0/24' },
  { color: '#8892A4', text: 'Scanning 256 hosts...' },
  { color: '#00B4FF', text: '[OPEN] 22/tcp  ssh OpenSSH' },
  { color: '#00B4FF', text: '[OPEN] 443/tcp https nginx' },
  { color: '#00FFB2', text: '$ gobuster dir -u target.local' },
  { color: '#FF6B00', text: '[FOUND] /admin' },
  { color: '#FF6B00', text: '[FOUND] /backup  ' },
  { color: '#00FFB2', text: '$ sqlmap --dbs --level=3' },
  { color: '#FF3A3A', text: '[VULN] SQL Injection detected!' },
  { color: '#00FFB2', text: '$ msfconsole -q' },
  { color: '#FF3A3A', text: '[ACCESS] Shell established ✓' },
  { color: '#00FFB2', text: '$ whoami' },
  { color: '#FF6B00', text: 'arigala_balaji' },
  { color: '#8892A4', text: '---------------------' },
];

const AnimatedTerminal = () => {
  const [lines, setLines] = useState<{id: number, lineIdx: number}[]>([]);
  const countRef = React.useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLines(prev => {
        const nextLineIdx = countRef.current % terminalLines.length;
        const newLines = [...prev, { id: countRef.current, lineIdx: nextLineIdx }];
        countRef.current += 1;
        if (newLines.length > 8) {
          return newLines.slice(newLines.length - 8);
        }
        return newLines;
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="hidden lg:block absolute z-10"
      style={{
        top: '80px',
        left: '24px',
        width: '280px',
        background: 'rgba(8, 11, 16, 0.85)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 58, 58, 0.25)',
        borderRadius: '8px',
        padding: '12px 14px',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '10px',
        lineHeight: '1.8',
        boxShadow: '0 0 20px rgba(255,58,58,0.1)',
        animation: 'flicker 3s infinite'
      }}
    >
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#FF3A3A]/20">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF3A3A]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B00]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#00FFB2]"></div>
        </div>
        <div className="text-[#8892A4] text-[9px] mx-auto opacity-70 tracking-widest font-mono font-bold">
          terminal &mdash; red_team_ops
        </div>
      </div>
      <div className="flex flex-col justify-end min-h-[144px] overflow-hidden">
        {lines.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            style={{ color: terminalLines[item.lineIdx].color }}
            className="whitespace-pre font-mono font-bold"
          >
            {terminalLines[item.lineIdx].text}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const Hero = () => {
  const [init, setInit] = useState(false);
  const [whoamiText, setWhoamiText] = useState('');
  const fullWhoami = 'root@balaji:~$ whoami';

  useEffect(() => {
    loadSlim(tsParticles).then(() => {
      setInit(true);
    });

    let i = 0;
    const typeWriter = setInterval(() => {
      if (i < fullWhoami.length) {
        setWhoamiText(fullWhoami.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typeWriter);
      }
    }, 50);

    return () => clearInterval(typeWriter);
  }, []);

  const nameChars = content.hero.name.split('');

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 1.5 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <AnimatedTerminal />
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-0"
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
              },
              modes: { repulse: { distance: 100, duration: 0.4 } },
            },
            particles: {
              color: { value: ["#00FFB2", "#FF3A3A"] },
              links: { color: "rgba(0,255,178,0.06)", distance: 120, enable: true, opacity: 1, width: 1 },
              move: { enable: true, speed: 0.8 },
              number: { density: { enable: true }, value: 55 },
              opacity: { value: 0.5, animation: { enable: true, speed: 1, minimumValue: 0.2 } },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 2.5 } },
            },
            detectRetina: true,
          }}
        />
      )}

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 flex items-center gap-2 px-4 py-1.5 rounded-sm border border-[#FF3A3A]/40 bg-[#FF3A3A]/10 text-[#FF3A3A] text-sm font-medium tracking-wide font-mono shadow-[0_0_15px_rgba(255,58,58,0.2)]"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF3A3A] animate-pulse" />
          {content.hero.title}
        </motion.div>

        <div className="mb-2 h-6 flex items-center justify-center">
          <span style={{ color: '#00FFB2', fontFamily: 'monospace', fontSize: '0.9rem' }}>
            {whoamiText}
            <span className="animate-[pulse_1s_step-end_infinite]">_</span>
          </span>
        </div>
        
        <motion.h1 
          variants={container}
          initial="hidden"
          animate="show"
          className="font-black mb-6 tracking-tight text-center flex flex-wrap justify-center"
          style={{ 
            fontSize: 'clamp(3rem, 8vw, 7rem)', 
            filter: 'drop-shadow(0 0 30px rgba(255,58,58,0.4))' 
          }}
        >
          {nameChars.map((char, index) => (
            <motion.span 
              key={index} 
              variants={item}
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #FF3A3A 0%, #FF6B00 50%, #FFD700 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                paddingRight: char === ' ' ? '1rem' : '0'
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.2 }}
          className="text-lg md:text-xl text-[#8892A4] max-w-2xl mx-auto mb-10 font-mono"
        >
          {content.hero.subtitle}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a href="#projects" className="px-8 py-3 rounded-sm font-medium tracking-wide transition-all transform hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #FF3A3A, #FF6B00)',
              color: 'white',
              boxShadow: '0 0 20px rgba(255,58,58,0.4)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 40px rgba(255,58,58,0.7)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 20px rgba(255,58,58,0.4)'; }}
          >
            View Projects
          </a>
          
          <a href="#contact" className="px-8 py-3 rounded-sm font-medium tracking-wide transition-all font-mono"
            style={{
              background: 'transparent',
              border: '1px solid rgba(0,255,178,0.5)',
              color: '#00FFB2'
            }}
            onMouseEnter={(e) => { 
              e.currentTarget.style.background = 'rgba(0,255,178,0.1)'; 
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0,255,178,0.3)';
            }}
            onMouseLeave={(e) => { 
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            &gt; Contact Me
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.6 }}
          className="mt-12 flex flex-col gap-2 font-mono text-sm text-left border border-white/5 bg-white/[0.02] p-4 rounded-sm"
        >
          <div className="text-[#8892A4]"><span className="text-[#FF3A3A] mr-2 inline-block animate-pulse">●</span><span className="text-white font-bold mr-2">[LIVE]</span>Currently: Bengaluru, India</div>
          <div className="text-[#8892A4]"><span className="text-[#00FFB2] mr-2 inline-block">▲</span><span className="text-white font-bold mr-2">[ACTIVE]</span>Open to Opportunities</div>
          <div className="text-[#8892A4]"><span className="text-[#00B4FF] mr-2 inline-block">⚡</span><span className="text-white font-bold mr-2">[ONLINE]</span>Responds in 24hrs</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.8 }}
          className="flex items-center justify-center gap-6 mt-10"
        >
          <a href={content.contact.github} target="_blank" rel="noreferrer" className="text-[#8892A4] hover:text-white hover:drop-shadow-[0_0_10px_white] transition-all p-2">
            <Github className="w-7 h-7" />
          </a>
          <a href={content.contact.linkedin} target="_blank" rel="noreferrer" className="text-[#8892A4] hover:text-[#00B4FF] hover:drop-shadow-[0_0_10px_#00B4FF] transition-all p-2">
            <Linkedin className="w-7 h-7" />
          </a>
          <a href={`mailto:${content.contact.email}`} className="text-[#8892A4] hover:text-[#FF3A3A] hover:drop-shadow-[0_0_10px_#FF3A3A] transition-all p-2">
            <Mail className="w-7 h-7" />
          </a>
        </motion.div>

      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-[#8892A4] font-mono tracking-widest uppercase">Scroll to bypass</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#FF3A3A] to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
};
