
import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';

interface KeyProps {
  label: string;
  width?: number;
  height?: number;
  color?: string;
  x: number;
  y: number;
  special?: boolean;
}

const KeyboardBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
  
  const rotateX = useTransform(mouseY, [-300, 300], [40, -40]);
  const rotateY = useTransform(mouseX, [-300, 300], [-35, 35]);

  // Define keyboard keys with developer-related labels
  const keys: KeyProps[] = [
    // First row
    { label: 'ESC', x: 0, y: 0, width: 1.2 },
    { label: 'F1', x: 1.3, y: 0 },
    { label: 'F2', x: 2.3, y: 0 },
    { label: 'F3', x: 3.3, y: 0 },
    
    // Second row
    { label: '`', x: 0, y: 1.2 },
    { label: '+', x: 1, y: 1.2 },
    { label: '-', x: 2, y: 1.2 },
    { label: '*', x: 3, y: 1.2 },
    
    // Third row
    { label: 'TAB', x: 0, y: 2.4, width: 1.5 },
    { label: 'Developer', x: 1.6, y: 2.4, width: 2, special: true, color: '#9b87f5' },
    { label: '', x: 3.7, y: 2.4 },
    
    // Fourth row
    { label: 'CAPS', x: 0, y: 3.6, width: 1.8 },
    { label: 'Designer', x: 1.9, y: 3.6, width: 2, special: true, color: '#33C3F0' },
    { label: '', x: 4, y: 3.6 },
    
    // Fifth row
    { label: 'SHIFT', x: 0, y: 4.8, width: 2.5 },
    { label: 'UI/UX', x: 2.6, y: 4.8, width: 1.5, special: true, color: '#F97316' },
    { label: 'Branding', x: 4.2, y: 4.8, width: 2, special: true, color: '#D946EF' },
    
    // Sixth row
    { label: 'CTRL', x: 0, y: 6, width: 1.5 },
    { label: 'Prototyper', x: 1.6, y: 6, width: 4, special: true, color: '#8B5CF6' },
    
    // Add more special keys
    { label: 'GraphicDesign', x: 6.2, y: 2.4, width: 2, height: 2, special: true, color: '#0EA5E9' },
    { label: 'Dev', x: 6.2, y: 4.5, width: 1, special: true, color: '#9b87f5' },
    { label: 'UX', x: 7.3, y: 4.5, width: 1, special: true, color: '#F97316' },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="w-full h-full absolute inset-0 overflow-hidden flex items-center justify-center" ref={containerRef}>
      <motion.div 
        className="relative w-full h-full flex items-center justify-center"
        style={{ 
          rotateX, 
          rotateY,
          perspective: 1500,
          transformStyle: 'preserve-3d',
          translateZ: -120,
        }}
      >
        <div 
          className="relative w-4/5 h-4/5 bg-black/40 rounded-xl backdrop-blur-sm p-6 border border-white/5"
          style={{
            transform: 'rotateX(40deg) rotateZ(-25deg) scale(1.8)', 
            transformStyle: 'preserve-3d',
            transformOrigin: 'center center',
            boxShadow: '0 25px 50px rgba(0,0,0,0.8)'
          }}
        >
          {keys.map((key, index) => (
            <motion.div
              key={index}
              className={`absolute rounded-lg flex items-center justify-center
                ${key.special 
                  ? 'font-bold text-white shadow-lg' 
                  : 'bg-white/10 backdrop-blur-sm text-white border border-white/20'}`}
              style={{
                left: `${key.x * 60}px`,
                top: `${key.y * 60}px`,
                width: `${(key.width || 1) * 60}px`,
                height: `${(key.height || 1) * 60}px`,
                backgroundColor: key.special ? key.color || '#444' : undefined,
                zIndex: hoveredKey === key.label ? 10 : 1,
                transformStyle: 'preserve-3d',
                transform: 'translateZ(25px)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.7)',
                fontSize: key.special ? '18px' : '16px',
              }}
              whileHover={{
                scale: 1.5,
                zIndex: 10,
                translateZ: 50
              }}
              onHoverStart={() => setHoveredKey(key.label)}
              onHoverEnd={() => setHoveredKey(null)}
            >
              {key.label}
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Pointing hand cursor */}
      <motion.div 
        className="absolute pointer-events-none z-20"
        style={{ 
          left: mouseX, 
          top: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          scale: hoveredKey ? 1.8 : 1.4
        }}
      >
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 6.5V11M22 12V12C22 17.5228 17.5228 22 12 22V22C6.47715 22 2 17.5228 2 12V12C2 6.47715 6.47715 2 12 2V2C17.5228 2 22 6.47715 22 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12.5 10.5V16M9.5 13V16M15.5 8V16M6.5 16V16.5M18.5 16V16.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </div>
  );
};

export default KeyboardBackground;
