
import { motion } from 'framer-motion';
import { useState } from 'react';

const HireMeButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleClick = () => {
    window.location.href = 'mailto:simran@example.com?subject=Job%20Opportunity';
  };
  
  return (
    <motion.div
      className="fixed left-10 bottom-10 z-50"
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <motion.button
        className="relative w-24 h-24 rounded-full flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        onClick={handleClick}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.div 
          className="absolute inset-0 rounded-full"
          style={{
            background: "linear-gradient(225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)",
          }}
          animate={{
            rotate: isHovered ? 45 : 0,
          }}
        />
        <motion.div 
          className="absolute inset-1 rounded-full bg-black flex items-center justify-center"
          animate={{
            scale: isHovered ? 0.95 : 1,
          }}
        >
          <motion.span 
            className="text-white font-bold text-sm"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
          >
            HIRE ME
          </motion.span>
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

export default HireMeButton;
