import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'MATCHMaticAI',
    description: 'AI-Powered Resume Scanner & Chatbot integrating Ollama AI with Spring Boot backend and interactive frontend.',
    tech: ['Spring Boot', 'Ollama AI', 'Docker', 'React', 'TypeScript'],
    github: 'https://github.com/YaseenSheikh',
    demo: '#',
  },
  {
    title: 'COVID-19 Tracker',
    description: 'Real-time COVID-19 statistics monitoring application with global case tracking and visualization.',
    tech: ['Java', 'Spring Boot', 'REST APIs', 'React', 'Chart.js'],
    github: 'https://github.com/YaseenSheikh',
    demo: '#',
  },
  {
    title: 'BRICKStorm',
    description: '2D brick breaker game featuring engaging gameplay mechanics and smooth paddle control.',
    tech: ['Java', 'Game Development', 'UI Design'],
    github: 'https://github.com/YaseenSheikh',
    demo: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'Modern portfolio website with 3D elements, animations, and responsive design.',
    tech: ['React', 'TypeScript', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
    github: 'https://github.com/YaseenSheikh',
    demo: '#',
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 * index }}
      viewport={{ once: true }}
      className="project-card"
    >
      <h3 className="text-2xl font-bold mb-4 gradient-text">{project.title}</h3>
      <p className="text-white/70 mb-6">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <span key={tech} className="skill-tag">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors duration-300"
        >
          <FaGithub className="w-5 h-5" />
          <span>GitHub</span>
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors duration-300"
        >
          <FaExternalLinkAlt className="w-5 h-5" />
          <span>Live Demo</span>
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 