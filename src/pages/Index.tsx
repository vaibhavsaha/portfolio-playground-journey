
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Squares } from '@/components/ui/squares-background';
import IntroAnimation from '@/components/IntroAnimation';
import Navbar from '@/components/Navbar';
import SocialLinks from '@/components/SocialLinks';
import { useLocation } from 'react-router-dom';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [roleIndex, setRoleIndex] = useState(0);
  const location = useLocation();
  
  const roles = ['developer', 'designer', 'prototyper', 'illustrator'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  const handleIntroComplete = () => {
    setShowIntro(false);
  };
  
  // Determine what content to show based on the URL hash
  const getContent = () => {
    // Default content for the homepage
    return (
      <>
        <motion.div 
          className="flex flex-col items-center justify-center text-center px-4 max-w-3xl mx-auto z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div 
            className="mb-4 text-sm font-medium tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="px-3 py-1 rounded-full bg-foreground/10 dark:bg-foreground/5 backdrop-blur-sm">
              <span className="text-foreground">Hi, I'm</span>
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Simran Singh
          </motion.h1>
          
          <motion.div 
            className="text-xl sm:text-2xl font-medium text-foreground/80 mb-8 h-8 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span>I'm a </span>
            <span className="relative inline-block">
              {roles.map((role, index) => (
                <motion.span
                  key={role}
                  className="absolute left-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: roleIndex === index ? 1 : 0,
                    y: roleIndex === index ? 0 : 20
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {role}
                </motion.span>
              ))}
            </span>
          </motion.div>
        </motion.div>
      </>
    );
  };
  
  return (
    <div className="relative min-h-screen overflow-hidden">
      {showIntro && <IntroAnimation onAnimationComplete={handleIntroComplete} />}
      
      {!showIntro && (
        <>
          <div className="fixed inset-0 z-0">
            <Squares direction="diagonal" speed={0.5} squareSize={40} borderColor="#333" hoverFillColor="#222" />
          </div>
          
          <Navbar />
          <SocialLinks />
          
          <motion.main 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative pt-32 min-h-screen flex items-center justify-center z-10"
          >
            {getContent()}
          </motion.main>
        </>
      )}
    </div>
  );
};

export default Index;
