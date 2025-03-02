
import { motion } from 'framer-motion';
import { SparklesCore } from '@/components/ui/sparkles';
import Navbar from '@/components/Navbar';
import SocialLinks from '@/components/SocialLinks';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

const About = () => {
  const skills = [
    "JavaScript", "Java", "TypeScript", "HTML", "CSS", 
    "React", "Solana", "Third Web", "Linux", "Version Control"
  ];

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
            className="mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            <h3 className="text-lg font-medium mb-3">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span 
                  key={index}
                  className="px-3 py-1 rounded-full bg-foreground/10 dark:bg-foreground/5 backdrop-blur-sm text-sm"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 2 + index * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.main>
    </div>
  );
};

export default About;
