
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
  pressed?: boolean;
}

const KeyboardBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const keyboardRef = useRef<HTMLDivElement>(null);
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
  const [handPosition, setHandPosition] = useState({ x: 0, y: 0 });
  const [showHand, setShowHand] = useState(false);
  const [pressedKeys, setPressedKeys] = useState<Record<string, boolean>>({});
  
  // Increase rotation values for more tilt
  const rotateX = useTransform(mouseY, [-300, 300], [30, -30]);
  const rotateY = useTransform(mouseX, [-300, 300], [-30, 30]);

  // Define keyboard keys with developer-related labels
  const keys: KeyProps[] = [
    // Row 1
    { label: 'Developer', x: 1, y: 1, width: 1.8, special: true, color: '#333' },
    { label: 'Prototyper', x: 3.1, y: 1, width: 1.8, special: true, color: '#333' },
    { label: 'Designer', x: 5.2, y: 1, width: 1.8, special: true, color: '#333' },
    { label: 'ESC', x: 7.3, y: 1, width: 0.8, color: '#222' },
    
    // Row 2
    { label: 'UI/UX', x: 1, y: 2.3, width: 1.2, special: true, color: '#333' },
    { label: 'Graphic', x: 2.5, y: 2.3, width: 1.2, special: true, color: '#333' },
    { label: 'CSS', x: 4, y: 2.3, width: 1, special: true, color: '#333' },
    { label: 'HTML', x: 5.3, y: 2.3, width: 1, special: true, color: '#333' },
    { label: 'TAB', x: 6.6, y: 2.3, width: 1.5, color: '#222' },
    
    // Row 3
    { label: 'React', x: 1, y: 3.6, width: 1.2, special: true, color: '#333' },
    { label: 'Three.js', x: 2.5, y: 3.6, width: 1.3, special: true, color: '#333' }, // Changed from Angular to Three.js
    { label: 'Node', x: 4.1, y: 3.6, width: 1, special: true, color: '#333' },
    { label: 'SHIFT', x: 5.4, y: 3.6, width: 2.7, color: '#222' },
    
    // Row 4
    { label: 'ALT', x: 1, y: 4.9, width: 0.8, color: '#222' },
    { label: 'CTRL', x: 2.1, y: 4.9, width: 1, color: '#222' },
    { label: 'SPACE', x: 3.4, y: 4.9, width: 3, color: '#222' },
    { label: 'ENTER', x: 6.7, y: 4.9, width: 1.4, color: '#222' },
    
    // Row 5 (function keys)
    { label: 'F1', x: 1, y: 0, width: 0.7, color: '#222' },
    { label: 'F2', x: 1.9, y: 0, width: 0.7, color: '#222' },
    { label: 'F3', x: 2.8, y: 0, width: 0.7, color: '#222' },
    { label: 'F4', x: 3.7, y: 0, width: 0.7, color: '#222' },
    { label: 'F5', x: 4.6, y: 0, width: 0.7, color: '#222' },
    { label: 'F6', x: 5.5, y: 0, width: 0.7, color: '#222' },
    { label: 'F7', x: 6.4, y: 0, width: 0.7, color: '#222' },
    { label: 'F8', x: 7.3, y: 0, width: 0.7, color: '#222' },
    
    // Additional scattered keys
    { label: 'Git', x: 8.1, y: 1.5, width: 0.9, special: true, color: '#333' },
    { label: 'SQL', x: 7.9, y: 3.2, width: 0.9, special: true, color: '#333' },
    { label: 'Vue', x: 8.3, y: 4.5, width: 0.9, special: true, color: '#333' },
    { label: 'Redux', x: 0.2, y: 1.8, width: 0.9, special: true, color: '#333' },
    { label: 'MongoDB', x: 0.1, y: 3.9, width: 0.9, special: true, color: '#333' },
    { label: 'Python', x: 8.3, y: 2.4, width: 0.9, special: true, color: '#333' },
    { label: 'WebGL', x: 0.3, y: 2.8, width: 0.9, special: true, color: '#333' },
  ];

  const handleKeyDoubleClick = (label: string) => {
    setPressedKeys(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
    
    // Reset the key press state after animation completes
    setTimeout(() => {
      setPressedKeys(prev => ({
        ...prev,
        [label]: false
      }));
    }, 300);
  };

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
        className="relative w-[90vw] h-[80vh] flex items-center justify-center"
        style={{ 
          rotateX, 
          rotateY,
          perspective: 2000,
          transformStyle: 'preserve-3d'
        }}
      >
        <div 
          ref={keyboardRef}
          className="relative w-full h-full flex items-center justify-center"
          style={{
            transform: 'rotateX(30deg) rotateZ(0deg)', // Increased tilt angle
            transformStyle: 'preserve-3d',
            transformOrigin: 'center center',
          }}
        >
          <div className="relative w-[85%] h-[70%] bg-black/40 rounded-xl backdrop-blur-sm border border-white/20"
            style={{
              transform: 'translateZ(-30px)',
              boxShadow: '0 30px 80px rgba(0,0,0,0.8)',
              transformStyle: 'preserve-3d'
            }}
          >
            {keys.map((key, index) => (
              <motion.div
                key={index}
                className={`absolute rounded-lg flex items-center justify-center
                  ${key.special 
                    ? 'font-bold text-white shadow-lg' 
                    : 'bg-[#222] text-white font-mono'}`}
                style={{
                  left: `${key.x * 11}%`,
                  top: `${key.y * 15}%`,
                  width: `${(key.width || 1) * 10}%`,
                  height: `${(key.height || 1) * 14}%`,
                  backgroundColor: key.color || '#333',
                  zIndex: hoveredKey === key.label ? 10 : 1,
                  transformStyle: 'preserve-3d',
                  transform: pressedKeys[key.label] 
                    ? 'translateZ(5px) scale(0.95)' // Pressed state
                    : 'translateZ(25px)', // Normal state with more height
                  boxShadow: pressedKeys[key.label]
                    ? '0 2px 0 rgba(0,0,0,0.5), 0 2px 5px rgba(0,0,0,0.3)'
                    : '0 10px 0 rgba(0,0,0,0.5), 0 5px 15px rgba(0,0,0,0.3)', // Thicker shadow for 3D effect
                  fontSize: key.special ? (key.width && key.width > 1.5 ? '20px' : '16px') : '14px',
                  cursor: 'pointer',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderBottom: pressedKeys[key.label]
                    ? '1px solid rgba(0,0,0,0.5)'
                    : '8px solid rgba(0,0,0,0.5)', // Thicker bottom border for 3D effect
                  transition: 'transform 0.15s ease, box-shadow 0.15s ease, border-bottom 0.15s ease'
                }}
                whileHover={{
                  scale: 1.05,
                  zIndex: 10,
                  translateZ: 30, // More height on hover
                  backgroundColor: '#4a4a4a'
                }}
                whileTap={{
                  scale: 0.95,
                  translateY: 3,
                  translateZ: 5,
                  boxShadow: '0 2px 0 rgba(0,0,0,0.5), 0 2px 5px rgba(0,0,0,0.3)',
                  borderBottom: '1px solid rgba(0,0,0,0.5)'
                }}
                onHoverStart={() => setHoveredKey(key.label)}
                onHoverEnd={() => setHoveredKey(null)}
                onDoubleClick={() => handleKeyDoubleClick(key.label)}
              >
                {key.label}
              </motion.div>
            ))}
          </div>
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
