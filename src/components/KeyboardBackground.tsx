
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
  const keyboardRef = useRef<HTMLDivElement>(null);
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
  const [handPosition, setHandPosition] = useState({ x: 0, y: 0 });
  const [showHand, setShowHand] = useState(false);
  
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  // Define keyboard keys with developer-related labels
  const keys: KeyProps[] = [
    // First row - centered and spaced out more
    { label: 'Developer', x: 1, y: 1, width: 2, special: true, color: '#9b87f5' },
    { label: 'Prototyper', x: 4, y: 1, width: 2, special: true, color: '#8B5CF6' },
    { label: 'Designer', x: 7, y: 1, width: 2, special: true, color: '#33C3F0' },
    
    // Second row
    { label: 'UI/UX', x: 1, y: 3, width: 1.5, special: true, color: '#F97316' },
    { label: 'Graphic', x: 3.5, y: 3, width: 1.5, special: true, color: '#0EA5E9' },
    { label: 'Branding', x: 6, y: 3, width: 2, special: true, color: '#D946EF' },
    
    // Third row - operational keys
    { label: '+', x: 1, y: 5, width: 1 },
    { label: '-', x: 3, y: 5, width: 1 },
    { label: '*', x: 5, y: 5, width: 1 },
    { label: '/', x: 7, y: 5, width: 1 },
    
    // Fourth row - more dev specific keys
    { label: 'ESC', x: 1, y: 7, width: 1.2 },
    { label: 'TAB', x: 3, y: 7, width: 1.5 },
    { label: 'SHIFT', x: 5.5, y: 7, width: 2.5 },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
        
        // Check if mouse is over the keyboard area
        if (keyboardRef.current) {
          const keyboardRect = keyboardRef.current.getBoundingClientRect();
          setShowHand(
            e.clientX >= keyboardRect.left &&
            e.clientX <= keyboardRect.right &&
            e.clientY >= keyboardRect.top &&
            e.clientY <= keyboardRect.bottom
          );
          
          // Update hand position relative to the container
          setHandPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
          });
        }
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
        className="relative w-[80vw] h-[80vh] flex items-center justify-center"
        style={{ 
          rotateX, 
          rotateY,
          perspective: 1500,
          transformStyle: 'preserve-3d'
        }}
      >
        <div 
          ref={keyboardRef}
          className="relative w-full h-full bg-black/30 rounded-xl backdrop-blur-sm p-8 border border-white/10"
          style={{
            transform: 'rotateX(10deg) rotateZ(0deg)', 
            transformStyle: 'preserve-3d',
            transformOrigin: 'center center',
            boxShadow: '0 30px 60px rgba(0,0,0,0.8)'
          }}
        >
          {keys.map((key, index) => (
            <motion.div
              key={index}
              className={`absolute rounded-lg flex items-center justify-center
                ${key.special 
                  ? 'font-bold text-white shadow-lg' 
                  : 'bg-[#333] text-white'}`}
              style={{
                left: `${key.x * 80}px`,
                top: `${key.y * 80}px`,
                width: `${(key.width || 1) * 80}px`,
                height: `${(key.height || 1) * 80}px`,
                backgroundColor: key.special ? key.color || '#333' : undefined,
                zIndex: hoveredKey === key.label ? 10 : 1,
                transformStyle: 'preserve-3d',
                transform: 'translateZ(15px)',
                boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
                fontSize: key.special ? '20px' : '18px',
                cursor: 'pointer'
              }}
              whileHover={{
                scale: 1.3,
                zIndex: 10,
                translateZ: 30,
                backgroundColor: '#4CAF50'
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
        className="absolute pointer-events-none z-50"
        style={{ 
          left: handPosition.x,
          top: handPosition.y,
          translateX: '-50%',
          translateY: '-50%',
          opacity: showHand ? 1 : 0,
          transition: 'opacity 0.3s ease',
          fontSize: '50px'
        }}
      >
        🖐
      </motion.div>
    </div>
  );
};

export default KeyboardBackground;
