import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('interactive')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  
  // Outer ring lags behind using useSpring
  const cursorXSpring = useSpring(mousePosition.x - (isHovering ? 20 : 10), springConfig);
  const cursorYSpring = useSpring(mousePosition.y - (isHovering ? 20 : 10), springConfig);

  // Hide default cursor
  useEffect(() => {
    document.body.style.cursor = 'none';
    
    // Also hide for all a and button elements
    const style = document.createElement('style');
    style.innerHTML = `
      * { cursor: none !important; }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.body.style.cursor = 'auto';
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[10000]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: isHovering ? 40 : 20,
          height: isHovering ? 40 : 20,
          border: `1.5px solid ${isHovering ? '#FF6B00' : '#FF3A3A'}`,
          mixBlendMode: isHovering ? 'difference' : 'normal',
        }}
        animate={{
          width: isHovering ? 40 : 20,
          height: isHovering ? 40 : 20,
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      />
      
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[10000]"
        style={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
          width: 4,
          height: 4,
          backgroundColor: '#FF3A3A',
        }}
      />
    </>
  );
};
