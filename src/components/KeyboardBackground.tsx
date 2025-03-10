
import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';

interface KeyProps {
  label?: string; // Made optional for blank keys
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
  
  // Increased rotation values for more tilt
  const rotateX = useTransform(mouseY, [-300, 300], [45, -45]);
  const rotateY = useTransform(mouseX, [-300, 300], [-45, 45]);

  // Define keyboard keys - mix of labeled and blank keys
  const keys: KeyProps[] = [
    // Row 1 - Function keys
    { label: '', x: 1, y: 0, width: 0.7, color: '#222' },
    { label: '', x: 1.9, y: 0, width: 0.7, color: '#222' },
    { label: 'Developer', x: 2.8, y: 0, width: 0.7, special: true, color: '#333' },
    { label: '', x: 3.7, y: 0, width: 0.7, color: '#222' },
    { label: 'Three.js', x: 4.6, y: 0, width: 0.7, special: true, color: '#333' },
    { label: '', x: 5.5, y: 0, width: 0.7, color: '#222' },
    { label: '', x: 6.4, y: 0, width: 0.7, color: '#222' },
    { label: '', x: 7.3, y: 0, width: 0.7, color: '#222' },
    
    // Row 2
    { label: 'React', x: 1, y: 1, width: 1.8, special: true, color: '#333' },
    { label: '', x: 3.1, y: 1, width: 1.8, color: '#222' },
    { label: 'Designer', x: 5.2, y: 1, width: 1.8, special: true, color: '#333' },
    { label: '', x: 7.3, y: 1, width: 0.8, color: '#222' },
    
    // Row 3
    { label: '', x: 1, y: 2.3, width: 1.2, color: '#222' },
    { label: 'UI/UX', x: 2.5, y: 2.3, width: 1.2, special: true, color: '#333' },
    { label: '', x: 4, y: 2.3, width: 1, color: '#222' },
    { label: 'HTML', x: 5.3, y: 2.3, width: 1, special: true, color: '#333' },
    { label: '', x: 6.6, y: 2.3, width: 1.5, color: '#222' },
    
    // Scattered tech keys
    { label: '', x: 8.1, y: 1.5, width: 0.9, color: '#222' },
    { label: 'SQL', x: 7.9, y: 3.2, width: 0.9, special: true, color: '#333' },
    { label: '', x: 8.3, y: 4.5, width: 0.9, color: '#222' },
    { label: '', x: 0.2, y: 1.8, width: 0.9, color: '#222' },
    { label: 'MongoDB', x: 0.1, y: 3.9, width: 0.9, special: true, color: '#333' },
    { label: '', x: 8.3, y: 2.4, width: 0.9, color: '#222' },
    { label: 'WebGL', x: 0.3, y: 2.8, width: 0.9, special: true, color: '#333' },
  ];

  const handleKeyDoubleClick = (label: string) => {
    setPressedKeys(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
    
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
        
        if (keyboardRef.current) {
          const keyboardRect = keyboardRef.current.getBoundingClientRect();
          setShowHand(
            e.clientX >= keyboardRect.left &&
            e.clientX <= keyboardRect.right &&
            e.clientY >= keyboardRect.top &&
            e.clientY <= keyboardRect.bottom
          );
          
          setHandPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
          });
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="w-full h-full absolute inset-0 overflow-hidden flex items-center justify-center" ref={containerRef}>
      <motion.div 
        className="relative w-[90vw] h-[80vh] flex items-center justify-center"
        style={{ 
          rotateX, 
          rotateY,
          perspective: 2500, // Increased perspective for more 3D effect
          transformStyle: 'preserve-3d'
        }}
      >
        <div 
          ref={keyboardRef}
          className="relative w-full h-full flex items-center justify-center"
          style={{
            transform: 'rotateX(35deg) rotateZ(-5deg)', // Increased tilt
            transformStyle: 'preserve-3d',
            transformOrigin: 'center center',
          }}
        >
          <div className="relative w-[85%] h-[70%] bg-black/40 rounded-xl backdrop-blur-sm border border-white/20"
            style={{
              transform: 'translateZ(-50px)', // Increased thickness
              boxShadow: '0 50px 100px rgba(0,0,0,0.9)', // Enhanced shadow
              transformStyle: 'preserve-3d'
            }}
          >
            {keys.map((key, index) => (
              <motion.div
                key={index}
                className={`absolute rounded-lg flex items-center justify-center
                  ${key.special 
                    ? 'font-bold text-white shadow-lg' 
                    : 'bg-[#222] text-white/50 font-mono'}`}
                style={{
                  left: `${key.x * 11}%`,
                  top: `${key.y * 15}%`,
                  width: `${(key.width || 1) * 10}%`,
                  height: `${(key.height || 1) * 14}%`,
                  backgroundColor: key.color || '#333',
                  zIndex: hoveredKey === key.label ? 10 : 1,
                  transformStyle: 'preserve-3d',
                  transform: pressedKeys[key.label || ''] 
                    ? 'translateZ(10px) scale(0.95)' // Increased press depth
                    : 'translateZ(35px)', // Increased normal height
                  boxShadow: pressedKeys[key.label || '']
                    ? '0 2px 0 rgba(0,0,0,0.5), 0 2px 5px rgba(0,0,0,0.3)'
                    : '0 15px 0 rgba(0,0,0,0.5), 0 5px 20px rgba(0,0,0,0.3)', // Thicker shadow
                  fontSize: key.special ? (key.width && key.width > 1.5 ? '20px' : '16px') : '14px',
                  cursor: 'pointer',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderBottom: pressedKeys[key.label || '']
                    ? '1px solid rgba(0,0,0,0.5)'
                    : '12px solid rgba(0,0,0,0.5)', // Increased thickness
                  transition: 'transform 0.15s ease, box-shadow 0.15s ease, border-bottom 0.15s ease'
                }}
                whileHover={{
                  scale: 1.1,
                  zIndex: 10,
                  translateZ: 45, // Increased hover height
                  backgroundColor: '#4a4a4a'
                }}
                whileTap={{
                  scale: 0.95,
                  translateY: 5,
                  translateZ: 10,
                  boxShadow: '0 2px 0 rgba(0,0,0,0.5), 0 2px 5px rgba(0,0,0,0.3)',
                  borderBottom: '1px solid rgba(0,0,0,0.5)'
                }}
                onHoverStart={() => setHoveredKey(key.label || '')}
                onHoverEnd={() => setHoveredKey(null)}
                onDoubleClick={() => handleKeyDoubleClick(key.label || '')}
              >
                {key.label}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      
      {/* Updated pointing hand cursor with one finger */}
      <motion.div 
        className="absolute pointer-events-none z-50"
        style={{ 
          left: handPosition.x,
          top: handPosition.y,
          translateX: '-50%',
          translateY: '-50%',
          opacity: showHand ? 1 : 0,
          transition: 'opacity 0.3s ease',
          fontSize: '40px',
          transform: 'rotate(-45deg)' // Adjust hand rotation for better pointing
        }}
      >
        👆
      </motion.div>
    </div>
  );
};

export default KeyboardBackground;
