
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MagnetLines } from '@/components/ui/magnet-lines';
import IntroAnimation from '@/components/IntroAnimation';
import Navbar from '@/components/Navbar';
import SocialLinks from '@/components/SocialLinks';
import { Link } from 'react-router-dom';
import { MagnetizeButton } from '@/components/ui/magnetize-button';
import { GooeyText } from '@/components/ui/gooey-text-morphing';
import { GooeyFilter } from '@/components/ui/gooey-filter';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  
  const roles = ['developer', 'designer', 'prototyper', 'illustrator'];
  
  const handleIntroComplete = () => {
    setShowIntro(false);
  };
  
  return (
    <div className="relative min-h-screen overflow-hidden">
      {showIntro && <IntroAnimation onAnimationComplete={handleIntroComplete} />}
      
      {!showIntro && (
        <>
          <div className="fixed inset-0 z-0">
            <MagnetLines 
              rows={12} 
              columns={12} 
              containerSize="100vw" 
              lineColor="rgba(150, 150, 150, 0.15)" 
              lineWidth="0.5vmin" 
              lineHeight="4vmin" 
              baseAngle={-10}
            />
          </div>
          
          <GooeyFilter id="gooey-filter" strength={8} />
          
          <Navbar />
          <SocialLinks className="fixed bottom-8 right-8 z-20" />
          
          <motion.main 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative pt-24 min-h-screen flex items-center z-10"
          >
            <motion.div 
              className="flex flex-col items-start justify-center px-4 max-w-3xl mx-auto z-10 pl-8 sm:pl-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div 
                className="mb-6 text-lg sm:text-xl font-medium tracking-wider"
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
                className="flex flex-col items-start mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <span className="text-2xl mb-2">I'm a</span>
                <div className="h-24 sm:h-28">
                  <GooeyText 
                    texts={roles}
                    morphTime={1}
                    cooldownTime={2.5}
                    className="text-5xl sm:text-7xl font-bold"
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-8"
              >
                <Link to="/contact">
                  <MagnetizeButton>
                    Contact Me
                  </MagnetizeButton>
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
