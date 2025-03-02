
import { motion } from 'framer-motion';
import { Squares } from '@/components/ui/squares-background';
import Navbar from '@/components/Navbar';
import SocialLinks from '@/components/SocialLinks';

const Contact = () => {
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
              Contact Me
            </span>
          </motion.div>
          
          <motion.div 
            className="text-xl leading-relaxed text-balance"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="mb-6">I'd love to hear from you! Feel free to reach out through any of these channels:</p>
            
            <div className="grid gap-4">
              <a 
                href="mailto:simranatsingh7j@gmail.com" 
                className="glass-morphism p-4 rounded-xl flex items-center hover:bg-foreground/5 transition-colors duration-300"
              >
                <span className="font-medium">Email:</span>
                <span className="ml-2">simranatsingh7j@gmail.com</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/simran-singh-0562a7222/" 
                target="_blank"
                rel="noopener noreferrer"
                className="glass-morphism p-4 rounded-xl flex items-center hover:bg-foreground/5 transition-colors duration-300"
              >
                <span className="font-medium">LinkedIn:</span>
                <span className="ml-2">Simran Singh</span>
              </a>
              <a 
                href="https://x.com/SimranTwt_" 
                target="_blank"
                rel="noopener noreferrer"
                className="glass-morphism p-4 rounded-xl flex items-center hover:bg-foreground/5 transition-colors duration-300"
              >
                <span className="font-medium">Twitter:</span>
                <span className="ml-2">@SimranTwt_</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </motion.main>
    </div>
  );
};

export default Contact;
