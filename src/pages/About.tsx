
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden overflow-y-auto">
      <div className="fixed inset-0 z-0 bg-black">
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
          id="about"
          className="absolute top-6 left-6 bg-black/10 max-w-sm p-6 rounded-xl backdrop-blur-sm border border-white/5" // More transparent background
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ cursor: 'pointer' }}
          onClick={() => scrollToSection('about')}
        >
          <motion.div 
            className="mb-4 inline-block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="px-3 py-1 rounded-full bg-black/20 backdrop-blur-sm text-sm font-medium text-gray-200">
              About Me
            </span>
          </motion.div>
          
          <TextGenerateEffect
            words="Hi, I'm Simran—a developer, web designer, and caffeine enthusiast. I create sleek, responsive websites and turn problems into polished solutions. Let's build something amazing!"
            className="text-sm text-gray-300 font-mono" // Keeping font-mono for better keyboard aesthetic match
            duration={1.5}
            filter={true}
          />
        </motion.div>
        
        <div className="h-[100vh]" id="experience"></div>
        
        <motion.div 
          id="skills"
          className="glass-morphism max-w-4xl mx-auto p-8 rounded-2xl my-20 z-10 relative bg-black/10 backdrop-blur-sm border border-white/5" // More transparent background
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onClick={() => scrollToSection('skills')}
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            <h3 className="text-xl font-medium mb-6 text-gray-200 font-mono">Skills</h3>
            <div className="flex flex-wrap gap-8">
              {skills.map((skill, index) => (
                <AnimatedSkill key={index} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.main>
    </div>
  );
};

export default About;
