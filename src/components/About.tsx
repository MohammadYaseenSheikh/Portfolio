import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaCloud } from 'react-icons/fa';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      icon: <FaCode className="w-6 h-6" />,
    },
    {
      category: 'Backend',
      items: ['Java', 'Spring Boot', 'Node.js', 'Express'],
      icon: <FaServer className="w-6 h-6" />,
    },
    {
      category: 'Database',
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
      icon: <FaDatabase className="w-6 h-6" />,
    },
    {
      category: 'DevOps',
      items: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
      icon: <FaCloud className="w-6 h-6" />,
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-title text-center">About Me</h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-8 mb-12"
          >
            <p className="text-lg text-white/70 mb-6">
              I'm a passionate Software Engineer with expertise in building scalable web applications
              and microservices. With a strong foundation in both frontend and backend development,
              I focus on creating efficient, maintainable, and user-friendly solutions.
            </p>
            <p className="text-lg text-white/70">
              Currently working at Infogain India Pvt. Ltd., I contribute to high-impact projects
              for clients like FedEx and Serko GetThere, implementing best practices in software
              development and cloud technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                viewport={{ once: true }}
                className="glass-card p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-primary">{skill.icon}</div>
                  <h3 className="text-xl font-semibold">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="skill-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <a
              href="#contact"
              className="inline-block px-8 py-3 rounded-lg bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 