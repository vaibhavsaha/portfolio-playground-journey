
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { MagicCard } from '@/components/ui/magic-card';
import { Linkedin, Github, Mail, Twitter } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useToast } from "@/hooks/use-toast";
import { Waves } from '@/components/ui/waves-background';
import SocialLinks from '@/components/SocialLinks';

const Contact = () => {
  const { toast } = useToast();
  
  const socialIcons = [
    { 
      name: 'LinkedIn', 
      icon: <Linkedin className="w-8 h-8 sm:w-12 sm:h-12" />, 
      url: 'https://www.linkedin.com/in/simran-singh-0562a7222/'
    },
    { 
      name: 'Github', 
      icon: <Github className="w-8 h-8 sm:w-12 sm:h-12" />, 
      url: 'https://github.com/Simranatsingh'
    },
    { 
      name: 'Email', 
      icon: <Mail className="w-8 h-8 sm:w-12 sm:h-12" />, 
      url: 'mailto:simranatsingh7j@gmail.com'
    },
    { 
      name: 'Twitter', 
      icon: <Twitter className="w-8 h-8 sm:w-12 sm:h-12" />, 
      url: 'https://x.com/SimranTwt_'
    },
  ];
  
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 z-0">
        <Waves 
          lineColor="rgba(255, 255, 255, 0.3)"
          backgroundColor="black"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
      </div>
      
      <Navbar />
      <SocialLinks />
      
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative pt-24 sm:pt-32 px-4 sm:px-6 min-h-screen flex flex-col items-center justify-center z-10"
      >
        <motion.div 
          className="max-w-4xl mx-auto w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div 
            className="mb-6 sm:mb-8 inline-block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="px-4 py-2 rounded-full bg-foreground/10 backdrop-blur-sm text-lg font-medium text-white">
              Connect
            </span>
          </motion.div>
          
          <motion.div 
            className="text-xl sm:text-2xl leading-relaxed text-balance text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="mb-6 sm:mb-8 text-white">I'd love to hear from you! Feel free to reach out through any of these channels:</p>
            
            <div className="grid gap-6 sm:gap-8">
              <div className="flex justify-center space-x-1 sm:space-x-3 my-4 sm:my-6">
                <TooltipProvider>
                  {socialIcons.map((social, index) => (
                    <Tooltip key={index}>
                      <TooltipTrigger asChild>
                        <motion.a 
                          href={social.url}
                          target={social.name !== 'Email' ? "_blank" : undefined}
                          rel={social.name !== 'Email' ? "noopener noreferrer" : undefined}
                          className="p-2 sm:p-4 bg-foreground/5 rounded-full flex items-center justify-center hover:bg-foreground/10 transition-all duration-300 text-white"
                          whileHover={{ 
                            scale: 1.2,
                            y: -10,
                            transition: { duration: 0.3 }
                          }}
                        >
                          {social.icon}
                        </motion.a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{social.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </TooltipProvider>
              </div>
            
              <MagicCard 
                className="p-4 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center hover:bg-foreground/5 transition-colors duration-300 bg-transparent border-foreground/10"
                gradientColor="rgba(38, 38, 38, 0.1)"
              >
                <a 
                  href="mailto:simranatsingh7j@gmail.com"
                  className="w-full flex flex-col sm:flex-row items-start sm:items-center text-xl sm:text-2xl text-white"
                >
                  <span className="font-medium text-xl sm:text-2xl mb-2 sm:mb-0 text-white">Email:</span>
                  <span className="sm:ml-4 text-xl sm:text-2xl break-all text-white">simranatsingh7j@gmail.com</span>
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
