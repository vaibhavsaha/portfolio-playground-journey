
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import AnimatedSkill from '@/components/AnimatedSkill';
import KeyboardBackground from '@/components/KeyboardBackground';
import HireMeButton from '@/components/HireMeButton';

const About = () => {
  const skills = [
    "JavaScript", "Java", "TypeScript", "HTML", "CSS", 
    "React", "Solana", "Third Web", "Linux", "Version Control"
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 z-0 bg-black">
        {/* Background with keyboard */}
        <KeyboardBackground />
      </div>
      
      <Navbar />
      
      <div className="absolute bottom-8 left-8 z-50">
        <HireMeButton />
      </div>
      
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <motion.div 
          className="bg-transparent max-w-xs mx-0 p-4 rounded-xl mt-24 ml-6 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ cursor: 'default' }}
        >
          <motion.div 
            className="mb-3 inline-block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="px-3 py-1 rounded-full bg-foreground/10 backdrop-blur-sm text-sm font-medium text-white">
              About Me
            </span>
          </motion.div>
          
          <TextGenerateEffect
            words="Hi, I'm Simran—a developer, web designer, and caffeine enthusiast. I create sleek, responsive websites and turn problems into polished solutions. Let's build something amazing!"
            className="text-sm text-white" 
            duration={1.5}
            filter={true}
          />
        </motion.div>
        
        <div className="h-[90vh]"></div> {/* Increased spacer to push skills section down */}
        
        <motion.div 
          className="glass-morphism max-w-4xl mx-auto p-8 rounded-2xl my-20 z-10 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            <h3 className="text-xl font-medium mb-6 text-white">Skills</h3>
            <div className="flex flex-wrap gap-8"> 
              {skills.map((skill, index) => (
                <AnimatedSkill key={index} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.main>
      
      {/* Instead of using the style tag with jsx and global attributes, adding a style tag with regular CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        body {
          cursor: none;
        }
      `}} />
    </div>
  );
};

export default About;
