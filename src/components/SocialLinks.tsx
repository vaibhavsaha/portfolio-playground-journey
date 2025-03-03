
import { motion } from 'framer-motion';
import { LinkedinIcon } from '@/components/ui/linkedin';
import { TwitterIcon } from '@/components/ui/twitter';
import { GithubIcon } from '@/components/ui/github';
import { MailIcon } from '@/components/ui/mail';

const SocialLinks = () => {
  const socialLinks = [
    { 
      id: 'linkedin', 
      icon: <LinkedinIcon />, 
      url: 'https://www.linkedin.com/in/simran-singh-0562a7222/',
      label: 'LinkedIn'
    },
    { 
      id: 'twitter', 
      icon: <TwitterIcon />, 
      url: 'https://x.com/SimranTwt_',
      label: 'Twitter'
    },
    { 
      id: 'github', 
      icon: <GithubIcon />, 
      url: 'https://github.com/Simranatsingh',
      label: 'GitHub'
    },
    { 
      id: 'email', 
      icon: <MailIcon />, 
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
      <div className="flex flex-row space-x-4">
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
            className="glass-morphism rounded-full"
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default SocialLinks;
