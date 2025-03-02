
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface IntroAnimationProps {
  onAnimationComplete?: () => void;
}

const IntroAnimation = ({ onAnimationComplete }: IntroAnimationProps) => {
  const [showCircles, setShowCircles] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCircles(true);
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
      {showCircles && (
        <div className="relative flex items-center justify-center">
          <motion.div 
            className="absolute w-24 h-24 rounded-full bg-violet-600 opacity-80"
            initial={{ scale: 0 }}
            animate={{ scale: 1, x: -30, y: -10 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            onAnimationComplete={handleAnimationComplete}
          />
          <motion.div 
            className="absolute w-20 h-20 rounded-full bg-blue-500 opacity-80"
            initial={{ scale: 0 }}
            animate={{ scale: 1, x: 20, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div 
            className="absolute w-16 h-16 rounded-full bg-pink-500 opacity-80"
            initial={{ scale: 0 }}
            animate={{ scale: 1, x: 0, y: -30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="absolute"
            animate={{
              scale: [1, 3],
              opacity: [1, 0]
            }}
            transition={{ 
              duration: 0.8, 
              delay: 0.9,
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
