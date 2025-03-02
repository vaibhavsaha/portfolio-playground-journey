
import { motion } from 'framer-motion';
import { Squares } from '@/components/ui/squares-background';
import Navbar from '@/components/Navbar';
import SocialLinks from '@/components/SocialLinks';
import { MagicCard } from '@/components/ui/magic-card';
import { useTheme } from 'next-themes';

const Contact = () => {
  const { theme } = useTheme();
  
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 z-0">
        <Squares direction="diagonal" speed={0.5} squareSize={40} borderColor="#333" hoverFillColor="#222" />
      </div>
      
      <Navbar />
      <SocialLinks />
      
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative pt-32 px-6 min-h-screen flex flex-col items-center justify-center z-10"
      >
        <motion.div 
          className="max-w-4xl mx-auto w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div 
            className="mb-8 inline-block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="px-4 py-2 rounded-full bg-foreground/10 dark:bg-foreground/5 backdrop-blur-sm text-lg font-medium">
              Contact Me
            </span>
          </motion.div>
          
          <motion.div 
            className="text-2xl leading-relaxed text-balance"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="mb-8 text-2xl">I'd love to hear from you! Feel free to reach out through any of these channels:</p>
            
            <div className="grid gap-6">
              <MagicCard 
                className="p-6 flex items-center hover:bg-foreground/5 transition-colors duration-300"
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
              >
                <a 
                  href="mailto:simranatsingh7j@gmail.com" 
                  className="w-full flex items-center text-xl"
                >
                  <span className="font-medium text-xl">Email:</span>
                  <span className="ml-3 text-xl">simranatsingh7j@gmail.com</span>
                </a>
              </MagicCard>
              
              <MagicCard 
                className="p-6 flex items-center hover:bg-foreground/5 transition-colors duration-300"
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
              >
                <a 
                  href="https://www.linkedin.com/in/simran-singh-0562a7222/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center text-xl"
                >
                  <span className="font-medium text-xl">LinkedIn:</span>
                  <span className="ml-3 text-xl">Simran Singh</span>
                </a>
              </MagicCard>
              
              <MagicCard 
                className="p-6 flex items-center hover:bg-foreground/5 transition-colors duration-300"
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
              >
                <a 
                  href="https://x.com/SimranTwt_" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center text-xl"
                >
                  <span className="font-medium text-xl">Twitter:</span>
                  <span className="ml-3 text-xl">@SimranTwt_</span>
                </a>
              </MagicCard>
            </div>
          </motion.div>
        </motion.div>
      </motion.main>
    </div>
  );
};

export default Contact;
