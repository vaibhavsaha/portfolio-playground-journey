
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface IntroAnimationProps {
  onAnimationComplete?: () => void;
}

const IntroAnimation = ({ onAnimationComplete }: IntroAnimationProps) => {
  const [showAnimation, setShowAnimation] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleAnimationComplete = () => {
    if (onAnimationComplete) {
      setTimeout(() => {
        onAnimationComplete();
      }, 1000);
    }
  };
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      {showAnimation && (
        <div className="relative">
          <svg width="300" height="120" viewBox="0 0 300 120">
            {/* The white infinity path with 3 circles */}
            <motion.path
              d="M 75,60 C 75,20 125,20 150,60 C 175,100 225,100 225,60 C 225,20 175,20 150,60 C 125,100 75,100 75,60 Z"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="10"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ 
                duration: 1.5, 
                ease: "easeInOut",
                times: [0, 1],
                delay: 0.2
              }}
              onAnimationComplete={handleAnimationComplete}
            />
            
            {/* Left circle */}
            <motion.circle 
              cx="75" 
              cy="60" 
              r="15" 
              fill="#FFFFFF" 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.9 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            />
            
            {/* Middle circle */}
            <motion.circle 
              cx="150" 
              cy="60" 
              r="15" 
              fill="#FFFFFF" 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.9 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            />
            
            {/* Right circle */}
            <motion.circle 
              cx="225" 
              cy="60" 
              r="15" 
              fill="#FFFFFF" 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.9 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            />
          </svg>
          
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              scale: [1, 3],
              opacity: [1, 0]
            }}
            transition={{ 
              duration: 0.8, 
              delay: 2.2,
              ease: "easeOut"
            }}
          >
            <div className="w-40 h-40 rounded-full bg-transparent" />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default IntroAnimation;
