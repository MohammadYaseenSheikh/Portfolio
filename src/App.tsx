import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import './App.css';

const Hero = () => (
  <section id="hero" className="min-h-screen flex items-center py-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <img
          src="/profile.jpg"
          alt="Yaseen Sheikh"
          className="w-32 h-32 rounded-full mx-auto mb-8 object-cover border-4 border-primary"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">YASEEN SHEIKH</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">Software Engineer</p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a href="mailto:official.yaseen.sheikh@gmail.com" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            official.yaseen.sheikh@gmail.com
          </a>
          <a href="tel:7875869377" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            7875869377
          </a>
          <span className="text-gray-600 dark:text-gray-300">Hyderabad</span>
        </div>
        <div className="flex justify-center gap-4">
          <a
            href="https://linkedin.com/in/YaseenSheikh"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/YaseenSheikh"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Experienced Software Engineer specializing in Java Backend Development with expertise in Spring Boot,
          Microservices, and Cloud Technologies. Currently working at Infogain India Pvt. Ltd., contributing to
          high-impact projects for clients like FedEx and Serko GetThere.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Frontend: React, HTML, CSS, JavaScript</li>
              <li>• Backend: Java (Spring Boot), Kotlin, REST APIs</li>
              <li>• Cloud & DevOps: Azure, Docker, GitHub Actions</li>
              <li>• Databases: SQL, MySQL, PostgreSQL</li>
              <li>• Testing: JUnit, Cucumber, Selenium</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Certifications</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Java (HackerRank)</li>
              <li>• React (Meta)</li>
              <li>• Generative AI (Deeplearning.ai)</li>
              <li>• Digital Marketing (Google)</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="MATCHMaticAI"
          description="AI-Powered Resume Scanner & Chatbot integrating Ollama AI with Spring Boot backend and interactive frontend."
          tech={['Spring Boot', 'Ollama AI', 'Docker', 'HTML/CSS/JS']}
          github="https://github.com/YaseenSheikh"
        />
        <ProjectCard
          title="COVID-19 Tracker"
          description="Real-time COVID-19 statistics monitoring application with global case tracking and visualization."
          tech={['Java', 'Spring Boot', 'REST APIs', 'Frontend Development']}
          github="https://github.com/YaseenSheikh"
        />
        <ProjectCard
          title="BRICKStorm"
          description="2D brick breaker game featuring engaging gameplay mechanics and smooth paddle control."
          tech={['Java', 'Game Development', 'UI Design']}
          github="https://github.com/YaseenSheikh"
        />
      </div>
    </div>
  </section>
);

const ProjectCard = ({ title, description, tech, github }: {
  title: string;
  description: string;
  tech: string[];
  github: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
  >
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tech.map((item) => (
        <span
          key={item}
          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
        >
          {item}
        </span>
      ))}
    </div>
    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary hover:text-primary-dark font-medium"
    >
      View on GitHub →
    </a>
  </motion.div>
);

const Experience = () => (
  <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative pl-8 border-l-2 border-primary"
        >
          <div className="mb-12">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
            <h3 className="text-xl font-bold">Software Engineer</h3>
            <p className="text-primary font-medium">Infogain India Pvt. Ltd.</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Oct 2021 – Present</p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Project: FedEx Sustainability Insight & FDX (2.5 Years)</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Designed and maintained scalable backend microservices using Spring Boot</li>
                  <li>Built robust RESTful APIs and refactored core modules</li>
                  <li>Implemented ORM mapping and optimized query execution</li>
                  <li>Integrated Selenium/Cucumber for automation testing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Project: Serko GetThere (2 Months)</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Worked on automation testing using Java, Selenium, and Cucumber</li>
                  <li>Executed automation test cases for new features</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
      <div className="max-w-2xl mx-auto">
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  </section>
);

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-800 z-50"
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          <SunIcon className="w-6 h-6" />
        ) : (
          <MoonIcon className="w-6 h-6" />
        )}
      </button>

      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
