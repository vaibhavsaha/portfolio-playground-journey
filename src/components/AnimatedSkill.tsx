
import { motion } from "framer-motion";
import React, { useState } from "react";

interface AnimatedSkillProps {
  skill: string;
  index: number;
}

const AnimatedSkill = ({ skill, index }: AnimatedSkillProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 0.8, // Incomplete circle (80%)
      opacity: 1,
      transition: {
        pathLength: { duration: 1, ease: "easeInOut" },
        opacity: { duration: 0.3 },
      },
    },
  };

  return (
    <motion.div
      className="relative px-4 py-2"
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 2 + index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative z-10 text-sm font-medium text-white">{skill}</div>
      
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          <motion.svg
            width="100%"
            height="100%"
            viewBox="0 0 100 40"
            initial="hidden"
            animate="visible"
          >
            <motion.circle
              cx="50"
              cy="20"
              r="15"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-white"
              variants={draw}
            />
          </motion.svg>
        </div>
      )}
      
      <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-sm -z-10" />
    </motion.div>
  );
};

export default AnimatedSkill;
