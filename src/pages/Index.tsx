
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RetroGrid } from '@/components/ui/retro-grid';
import IntroAnimation from '@/components/IntroAnimation';
import Navbar from '@/components/Navbar';
import SocialLinks from '@/components/SocialLinks';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

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
    // Change role every 2 seconds instead of 3
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  const handleIntroComplete = () => {
    setShowIntro(false);
  };
  
  return (
    <div className="relative min-h-screen overflow-hidden">
      {showIntro && <IntroAnimation onAnimationComplete={handleIntroComplete} />}
      
      {!showIntro && (
        <>
          <div className="fixed inset-0 z-0">
            <RetroGrid />
          </div>
          
          <Navbar />
          <SocialLinks className="fixed bottom-8 right-8 z-20" />
          
          <motion.main 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative pt-24 min-h-screen flex items-center z-10"
          >
            <motion.div 
              className="flex flex-col items-start justify-center px-4 max-w-3xl ml-8 sm:ml-16 md:ml-24 lg:ml-32"
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
                <span className="px-4 py-1.5 rounded-full bg-foreground/10 dark:bg-foreground/5 backdrop-blur-sm">
                  <span className="text-foreground">Hi, I'm</span>
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl sm:text-6xl font-bold mb-8 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Simran Singh
              </motion.h1>
              
              <motion.div 
                className="flex flex-col items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <span className="text-2xl mb-3">I'm a</span>
                <div className="h-24">
                  <motion.span
                    key={currentRoleIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className={`text-7xl sm:text-8xl font-bold block ${roles[currentRoleIndex].color}`}
                  >
                    {roles[currentRoleIndex].text}
                  </motion.span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-8"
              >
                <Link to="/contact">
                  <Button className="bg-violet-100 dark:bg-violet-900 hover:bg-violet-200 dark:hover:bg-violet-800 text-violet-600 dark:text-violet-300 border border-violet-300 dark:border-violet-700 transition-all duration-300">
                    Contact Me
                  </Button>
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
