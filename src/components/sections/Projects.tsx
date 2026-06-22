import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { content } from '../../data/content';
import { FaGithub as Github } from 'react-icons/fa';
import { GlassCard } from '../ui/GlassCard';

const ProjectCard = ({ project }: { project: any }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

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

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="h-full relative"
    >
      <GlassCard className="h-full flex flex-col relative overflow-hidden group">
        {/* Glowing border sweep animation */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -inset-[100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#00f5ff_100%)] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </div>
        
        <div className="absolute inset-[1px] bg-[#0a0a0f] rounded-2xl z-0" />
        <div className="absolute inset-[1px] bg-white/[0.03] backdrop-blur-xl rounded-2xl z-0" />

        <div 
          className="relative z-10 flex flex-col h-full p-2"
          style={{ transform: "translateZ(30px)" }}
        >
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00f5ff] transition-colors">{project.title}</h3>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag: string) => (
              <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-[#7c3aed]/20 text-[#d8b4fe] border border-[#7c3aed]/30">
                {tag}
              </span>
            ))}
          </div>
          
          <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
            {project.description}
          </p>
          
          <div className="flex gap-4 mt-auto">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#00f5ff] transition-colors cursor-pointer relative z-20">
                <Github size={18} />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00f5ff] to-[#7c3aed] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 perspective-1000">
          {content.projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
