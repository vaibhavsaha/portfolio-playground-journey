
import { useState } from 'react';
import { motion } from 'framer-motion';
import { RetroGrid } from '@/components/ui/retro-grid';
import IntroAnimation from '@/components/IntroAnimation';
import Navbar from '@/components/Navbar';
import SocialLinks from '@/components/SocialLinks';
import { Link } from 'react-router-dom';
import { GooeyText } from '@/components/ui/gooey-text-morphing';
import { Button } from '@/components/ui/button';

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
              className="flex flex-col items-start justify-center px-4 max-w-3xl mx-4 sm:ml-12 z-10"
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
                <div className="h-24 sm:h-32 mt-2">
                  <GooeyText 
                    texts={roles}
                    morphTime={1}
                    cooldownTime={2.5}
                    className="text-6xl sm:text-7xl font-bold"
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
