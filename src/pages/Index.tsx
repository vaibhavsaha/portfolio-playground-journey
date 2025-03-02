
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RetroGrid } from '@/components/ui/retro-grid';
import IntroAnimation from '@/components/IntroAnimation';
import Navbar from '@/components/Navbar';
import SocialLinks from '@/components/SocialLinks';
import { Link } from 'react-router-dom';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import { Waves } from '@/components/ui/waves-background';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  
  const roles = [
    { text: 'developer', color: 'text-violet-600 dark:text-violet-400' },
    { text: 'designer', color: 'text-pink-600 dark:text-pink-400' },
    { text: 'prototyper', color: 'text-blue-600 dark:text-blue-400' },
    { text: 'illustrator', color: 'text-emerald-600 dark:text-emerald-400' }
  ];
  
  useEffect(() => {
    // Change role every 2 seconds
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  const handleIntroComplete = () => {
    setShowIntro(false);
  };
  
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {showIntro && <IntroAnimation onAnimationComplete={handleIntroComplete} />}
      
      {!showIntro && (
        <>
          <div className="fixed inset-0 z-0">
            <RetroGrid />
          </div>
          
          <Navbar />
          <SocialLinks />
          
          <motion.main 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative pt-24 min-h-screen flex items-center z-10"
          >
            <motion.div 
              className="flex flex-col items-start justify-center px-4 max-w-3xl mx-auto md:ml-24 lg:ml-32"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div 
                className="mb-6 text-xl sm:text-2xl font-medium tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span className="px-4 py-1.5 rounded-full bg-foreground/10 backdrop-blur-sm">
                  <span className="text-white">Hi, I'm</span>
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-8 tracking-tight text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Simran Singh
              </motion.h1>
              
              <motion.div 
                className="flex items-baseline space-x-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <span className="text-xl sm:text-2xl text-white">I'm a</span>
                <div className="h-16 sm:h-20">
                  <motion.span
                    key={currentRoleIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className={`text-4xl sm:text-6xl md:text-7xl font-bold inline-block ${roles[currentRoleIndex].color}`}
                  >
                    {roles[currentRoleIndex].text}
                  </motion.span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-6 sm:mt-8"
              >
                <Link to="/contact">
                  <InteractiveHoverButton 
                    text="Reach Out" 
                    className="w-36 py-2.5"
                  />
                </Link>
              </motion.div>
            </motion.div>
          </motion.main>
        </>
      )}
    </div>
  );
};

export default Index;
