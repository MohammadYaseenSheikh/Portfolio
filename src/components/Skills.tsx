import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaAward } from 'react-icons/fa';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Infogain India Pvt. Ltd.',
    period: 'Oct 2021 – Present',
    description: [
      'Designed and maintained scalable backend microservices using Spring Boot',
      'Built robust RESTful APIs and refactored core modules',
      'Implemented ORM mapping and optimized query execution',
      'Integrated Selenium/Cucumber for automation testing',
    ],
    icon: <FaBriefcase className="w-6 h-6" />,
  },
  {
    title: 'Software Engineer Intern',
    company: 'Tech Solutions Inc.',
    period: 'Jun 2021 – Sep 2021',
    description: [
      'Developed and maintained web applications using React and Node.js',
      'Implemented responsive designs and optimized performance',
      'Collaborated with cross-functional teams in an Agile environment',
    ],
    icon: <FaBriefcase className="w-6 h-6" />,
  },
];

const education = [
  {
    degree: 'Bachelor of Technology',
    school: 'Computer Science Engineering',
    period: '2017 – 2021',
    description: 'Graduated with First Class with Distinction',
    icon: <FaGraduationCap className="w-6 h-6" />,
  },
];

const certifications = [
  {
    title: 'Java Development',
    issuer: 'HackerRank',
    period: '2023',
    icon: <FaAward className="w-6 h-6" />,
  },
  {
    title: 'React Development',
    issuer: 'Meta',
    period: '2023',
    icon: <FaAward className="w-6 h-6" />,
  },
  {
    title: 'Generative AI',
    issuer: 'Deeplearning.ai',
    period: '2023',
    icon: <FaAward className="w-6 h-6" />,
  },
];

const TimelineItem = ({ item, index }: { item: typeof experiences[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 * index }}
      viewport={{ once: true }}
      className="relative pl-8 border-l-2 border-primary/20"
    >
      <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
        <div className="text-primary">{item.icon}</div>
      </div>
      <div className="glass-card p-6 mb-8">
        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
        <p className="text-primary font-medium mb-2">{item.company}</p>
        <p className="text-sm text-white/50 mb-4">{item.period}</p>
        <ul className="space-y-2">
          {item.description.map((desc, i) => (
            <li key={i} className="text-white/70 flex items-start gap-2">
              <span className="text-primary">•</span>
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const EducationItem = ({ item, index }: { item: typeof education[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 * index }}
      viewport={{ once: true }}
      className="glass-card p-6"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="text-primary">{item.icon}</div>
        <div>
          <h3 className="text-xl font-bold">{item.degree}</h3>
          <p className="text-primary">{item.school}</p>
        </div>
      </div>
      <p className="text-sm text-white/50 mb-2">{item.period}</p>
      <p className="text-white/70">{item.description}</p>
    </motion.div>
  );
};

const CertificationItem = ({ item, index }: { item: typeof certifications[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 * index }}
      viewport={{ once: true }}
      className="glass-card p-6"
    >
      <div className="flex items-center gap-4">
        <div className="text-primary">{item.icon}</div>
        <div>
          <h3 className="text-lg font-bold">{item.title}</h3>
          <p className="text-primary text-sm">{item.issuer}</p>
          <p className="text-sm text-white/50">{item.period}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center">Experience & Education</h2>

          <div className="max-w-4xl mx-auto">
            {/* Experience Timeline */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 gradient-text">Work Experience</h3>
              {experiences.map((exp, index) => (
                <TimelineItem key={exp.title} item={exp} index={index} />
              ))}
            </div>

            {/* Education */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 gradient-text">Education</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {education.map((edu, index) => (
                  <EducationItem key={edu.degree} item={edu} index={index} />
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold mb-8 gradient-text">Certifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {certifications.map((cert, index) => (
                  <CertificationItem key={cert.title} item={cert} index={index} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 