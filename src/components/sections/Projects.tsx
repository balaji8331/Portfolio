import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { content } from '../../data/content';
import { FaGithub as Github } from 'react-icons/fa';

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const getTagColor = (title: string) => {
    if (title.includes("AI")) return "#00B4FF"; // Blue
    if (title.includes("Crypto")) return "#FF3A3A"; // Red
    if (title.includes("Guacamole")) return "#FF6B00"; // Orange
    return "#00FFB2"; // Green (Session Tracker)
  };

  const tagColor = getTagColor(project.title);

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full rounded-xl transition-all duration-300"
    >
      <div 
        className="w-full h-full rounded-xl overflow-hidden relative flex flex-col transition-colors duration-300 group"
        style={{
          background: 'rgba(13, 17, 30, 0.85)',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(255, 58, 58, 0.2)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04), 0 20px 40px rgba(0,0,0,0.4)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255,58,58,0.6)';
          e.currentTarget.style.boxShadow = '0 20px 40px rgba(255,58,58,0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255, 58, 58, 0.15)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Top Tag Bar */}
        <div 
          className="absolute top-0 left-0 w-full h-1"
          style={{ background: tagColor, boxShadow: `0 0 10px ${tagColor}` }}
        />
        
        <div className="p-8 flex-grow flex flex-col">
          <h3 className="text-2xl font-bold text-[#E8EDF5] mb-3 mt-2">{project.title}</h3>
          <p className="text-[#8892A4] text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tech: string) => (
              <span 
                key={tech} 
                className="px-2 py-1 rounded-sm text-[0.7rem] font-mono font-bold"
                style={{
                  background: 'rgba(255,58,58,0.08)',
                  border: '1px solid rgba(255,58,58,0.25)',
                  color: '#FF6B00'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
          
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-mono font-bold w-fit transition-all duration-300"
              style={{
                color: '#00FFB2',
                border: '1px solid rgba(0,255,178,0.4)',
                background: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0,255,178,0.1)';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(0,255,178,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Github size={16} /> View on GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF3A3A] via-[#FF6B00] to-[#00FFB2] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto" style={{ perspective: "1000px" }}>
          {content.projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
