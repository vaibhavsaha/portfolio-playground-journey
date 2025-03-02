
import { motion } from 'framer-motion';
import { SparklesCore } from '@/components/ui/sparkles';
import Navbar from '@/components/Navbar';
import SocialLinks from '@/components/SocialLinks';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 z-0 bg-black">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={1}
        />
      </div>
      
      <Navbar />
      <SocialLinks />
      
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative pt-32 px-6 min-h-screen flex items-center justify-center z-10"
      >
        <motion.div 
          className="glass-morphism max-w-3xl mx-auto p-8 rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div 
            className="mb-6 inline-block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="px-3 py-1 rounded-full bg-foreground/10 dark:bg-foreground/5 backdrop-blur-sm text-sm font-medium">
              About Me
            </span>
          </motion.div>
          
          <TextGenerateEffect
            words="Hi, I'm Simran—a developer, web designer, and caffeine enthusiast. I create sleek, responsive websites and turn problems into polished solutions. Let's build something amazing!"
            className="text-xl"
            duration={1.5}
            filter={true}
          />
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            className="mt-8 flex justify-center sm:justify-start"
          >
            <Link to="/contact">
              <Button className="bg-violet-100 dark:bg-violet-900 hover:bg-violet-200 dark:hover:bg-violet-800 text-violet-600 dark:text-violet-300 border border-violet-300 dark:border-violet-700 transition-all duration-300">
                Reach Out
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.main>
    </div>
  );
};

export default About;
