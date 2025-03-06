
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
  
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  // Define keyboard keys with developer-related labels
  const keys: KeyProps[] = [
    // First row
    { label: 'ESC', x: 0, y: 0, width: 1.2 },
    { label: 'F1', x: 1.3, y: 0 },
    { label: 'F2', x: 2.3, y: 0 },
    { label: 'F3', x: 3.3, y: 0 },
    { label: 'F4', x: 4.3, y: 0 },
    { label: 'F5', x: 5.3, y: 0 },
    { label: 'F6', x: 6.3, y: 0 },
    { label: 'F7', x: 7.3, y: 0 },
    { label: 'F8', x: 8.3, y: 0 },
    { label: 'F9', x: 9.3, y: 0 },
    { label: 'F10', x: 10.3, y: 0 },
    { label: 'F11', x: 11.3, y: 0 },
    { label: 'F12', x: 12.3, y: 0 },
    
    // Second row
    { label: '`', x: 0, y: 1.2 },
    { label: '1', x: 1, y: 1.2 },
    { label: '2', x: 2, y: 1.2 },
    { label: '3', x: 3, y: 1.2 },
    { label: '4', x: 4, y: 1.2 },
    { label: '5', x: 5, y: 1.2 },
    { label: '6', x: 6, y: 1.2 },
    { label: '7', x: 7, y: 1.2 },
    { label: '8', x: 8, y: 1.2 },
    { label: '9', x: 9, y: 1.2 },
    { label: '0', x: 10, y: 1.2 },
    { label: '-', x: 11, y: 1.2 },
    { label: '=', x: 12, y: 1.2 },
    { label: 'DEL', x: 13, y: 1.2, width: 1.5 },
    
    // Third row
    { label: 'TAB', x: 0, y: 2.4, width: 1.5 },
    { label: 'Developer', x: 1.6, y: 2.4, width: 2, special: true, color: '#9b87f5' },
    { label: 'W', x: 3.7, y: 2.4 },
    { label: 'E', x: 4.7, y: 2.4 },
    { label: 'R', x: 5.7, y: 2.4 },
    { label: 'T', x: 6.7, y: 2.4 },
    { label: 'Y', x: 7.7, y: 2.4 },
    { label: 'U', x: 8.7, y: 2.4 },
    { label: 'I', x: 9.7, y: 2.4 },
    { label: 'O', x: 10.7, y: 2.4 },
    { label: 'P', x: 11.7, y: 2.4 },
    { label: '[', x: 12.7, y: 2.4 },
    { label: ']', x: 13.7, y: 2.4 },
    { label: '\\', x: 14.7, y: 2.4 },
    
    // Fourth row
    { label: 'CAPS', x: 0, y: 3.6, width: 1.8 },
    { label: 'A', x: 1.9, y: 3.6 },
    { label: 'Designer', x: 2.9, y: 3.6, width: 2, special: true, color: '#33C3F0' },
    { label: 'D', x: 5, y: 3.6 },
    { label: 'F', x: 6, y: 3.6 },
    { label: 'G', x: 7, y: 3.6 },
    { label: 'H', x: 8, y: 3.6 },
    { label: 'J', x: 9, y: 3.6 },
    { label: 'K', x: 10, y: 3.6 },
    { label: 'L', x: 11, y: 3.6 },
    { label: ';', x: 12, y: 3.6 },
    { label: "'", x: 13, y: 3.6 },
    { label: 'ENTER', x: 14, y: 3.6, width: 1.8 },
    
    // Fifth row
    { label: 'SHIFT', x: 0, y: 4.8, width: 2.5 },
    { label: 'Z', x: 2.6, y: 4.8 },
    { label: 'X', x: 3.6, y: 4.8 },
    { label: 'UI/UX', x: 4.6, y: 4.8, width: 1.5, special: true, color: '#F97316' },
    { label: 'V', x: 6.2, y: 4.8 },
    { label: 'Branding', x: 7.2, y: 4.8, width: 2, special: true, color: '#D946EF' },
    { label: 'N', x: 9.3, y: 4.8 },
    { label: 'M', x: 10.3, y: 4.8 },
    { label: ',', x: 11.3, y: 4.8 },
    { label: '.', x: 12.3, y: 4.8 },
    { label: '/', x: 13.3, y: 4.8 },
    { label: 'SHIFT', x: 14.3, y: 4.8, width: 2.5 },
    
    // Sixth row
    { label: 'CTRL', x: 0, y: 6, width: 1.5 },
    { label: 'FN', x: 1.6, y: 6, width: 1 },
    { label: 'WIN', x: 2.7, y: 6, width: 1.2 },
    { label: 'ALT', x: 4, y: 6, width: 1.2 },
    { label: 'Prototyper', x: 5.3, y: 6, width: 6, special: true, color: '#8B5CF6' },
    { label: 'ALT', x: 11.4, y: 6, width: 1.2 },
    { label: 'FN', x: 12.7, y: 6, width: 1 },
    { label: 'MENU', x: 13.8, y: 6, width: 1.2 },
    { label: 'CTRL', x: 15.1, y: 6, width: 1.5 },
    
    // Add more special keys
    { label: 'GraphicDesign', x: 16.7, y: 1.2, width: 2, height: 2, special: true, color: '#0EA5E9' },
    { label: '+', x: 16.7, y: 3.3, width: 1, special: true },
    { label: '-', x: 17.7, y: 3.3, width: 1, special: true },
    { label: '*', x: 16.7, y: 4.4, width: 1, special: true },
    { label: '/', x: 17.7, y: 4.4, width: 1, special: true },
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

  const getCursorPosition = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
    return { x: 0, y: 0 };
  };

  return (
    <div className="w-full h-full absolute inset-0 overflow-hidden" ref={containerRef}>
      <motion.div 
        className="relative w-full h-full flex items-center justify-center"
        style={{ 
          rotateX, 
          rotateY,
          perspective: 1000,
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="relative w-[1000px] h-[400px] bg-black/20 rounded-xl backdrop-blur-sm p-4">
          {keys.map((key, index) => (
            <motion.div
              key={index}
              className={`absolute rounded-lg flex items-center justify-center
                ${key.special 
                  ? 'font-bold text-white shadow-lg' 
                  : 'bg-white/10 backdrop-blur-sm text-white border border-white/20'}`}
              style={{
                left: `${key.x * 40}px`,
                top: `${key.y * 40}px`,
                width: `${(key.width || 1) * 40}px`,
                height: `${(key.height || 1) * 40}px`,
                backgroundColor: key.special ? key.color || '#444' : undefined,
                zIndex: hoveredKey === key.label ? 10 : 1,
                transformStyle: 'preserve-3d',
                transform: 'translateZ(2px)',
                fontSize: key.special ? '14px' : '12px',
              }}
              whileHover={{
                scale: 1.2,
                zIndex: 10,
                translateZ: 20
              }}
              onHoverStart={() => setHoveredKey(key.label)}
              onHoverEnd={() => setHoveredKey(null)}
            >
              {key.label}
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Giant pointing hand cursor */}
      <motion.div 
        className="absolute pointer-events-none z-20"
        style={{ 
          left: mouseX, 
          top: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          scale: hoveredKey ? 1.2 : 1
        }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 6.5V11M22 12V12C22 17.5228 17.5228 22 12 22V22C6.47715 22 2 17.5228 2 12V12C2 6.47715 6.47715 2 12 2V2C17.5228 2 22 6.47715 22 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12.5 10.5V16M9.5 13V16M15.5 8V16M6.5 16V16.5M18.5 16V16.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </div>
  );
};

export default KeyboardBackground;
