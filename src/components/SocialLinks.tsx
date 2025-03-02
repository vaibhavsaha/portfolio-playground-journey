
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    { 
      id: 'linkedin', 
      icon: <Linkedin className="w-5 h-5" />, 
      url: 'https://www.linkedin.com/in/simran-singh-0562a7222/',
      label: 'LinkedIn'
    },
    { 
      id: 'twitter', 
      icon: <Twitter className="w-5 h-5" />, 
      url: 'https://x.com/SimranTwt_',
      label: 'Twitter'
    },
    { 
      id: 'email', 
      icon: <Mail className="w-5 h-5" />, 
      url: 'mailto:simranatsingh7j@gmail.com',
      label: 'Email'
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <motion.div 
      className="fixed bottom-10 right-10 z-40"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="flex flex-col space-y-4">
        {socialLinks.map((link) => (
          <motion.a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            variants={item}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="glass-morphism w-12 h-12 flex items-center justify-center rounded-full hover:text-primary transition-colors duration-300"
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default SocialLinks;
