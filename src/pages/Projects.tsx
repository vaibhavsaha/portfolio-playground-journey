
import { motion } from 'framer-motion';
import { Squares } from '@/components/ui/squares-background';
import Navbar from '@/components/Navbar';
import SocialLinks from '@/components/SocialLinks';
import { GradientButton } from '@/components/ui/gradient-button';
import { Github } from 'lucide-react';

interface ProjectType {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const Projects = () => {
  const projects: ProjectType[] = [
    {
      title: "Course Selling Server",
      description: "A backend server for a course selling platform with user authentication and course management.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      link: "https://github.com/Simranatsingh/course-selling-server"
    },
    {
      title: "Todo Application",
      description: "A todo list application built with DOM manipulation for managing tasks.",
      technologies: ["HTML", "CSS", "JavaScript", "DOM API"],
      link: "https://github.com/Simranatsingh/TODO_DOM"
    }
  ];

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
        className="relative pt-32 px-6 min-h-screen flex flex-col items-center z-10"
      >
        <motion.div 
          className="glass-morphism max-w-4xl w-full mx-auto p-8 rounded-2xl mb-8"
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
              My Projects
            </span>
          </motion.div>
          
          <motion.p 
            className="text-xl leading-relaxed text-balance mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Here are some of the projects I've worked on. Check out my 
            <a 
              href="https://github.com/Simranatsingh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-2 py-1 mx-1 rounded-md bg-foreground/10 dark:bg-foreground/5 inline-flex items-center gap-1 hover:bg-foreground/20 transition-colors"
            >
              <Github className="w-4 h-4" /> GitHub
            </a> 
            for more!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-morphism p-6 rounded-xl h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-foreground/80 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-2 py-1 text-xs rounded-full bg-foreground/10 dark:bg-foreground/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm hover:underline"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </motion.main>
    </div>
  );
};

export default Projects;
