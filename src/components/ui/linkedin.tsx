
'use client';

import type { Variants } from 'framer-motion';
import { motion, useAnimation } from 'framer-motion';

const linkedinVariants: Variants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 0.4,
      opacity: { duration: 0.1 },
    },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    pathOffset: [1, 0],
    transition: {
      duration: 0.6,
      ease: 'linear',
      opacity: { duration: 0.1 },
    },
  },
};

const LinkedinIcon = () => {
  const controls = useAnimation();

  return (
    <div
      className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center transform hover:scale-110 transition-transform"
      onMouseEnter={() => {
        controls.start('animate');
      }}
      onMouseLeave={() => {
        controls.start('normal');
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          variants={linkedinVariants}
          animate={controls}
          initial="normal"
          d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
        />
        <motion.rect
          variants={linkedinVariants}
          animate={controls}
          initial="normal"
          x="2" y="9" width="4" height="12"
        />
        <motion.circle
          variants={linkedinVariants}
          animate={controls}
          initial="normal"
          cx="4" cy="4" r="2"
        />
      </svg>
    </div>
  );
};

export { LinkedinIcon };
