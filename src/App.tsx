import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className={`portfolio ${isVisible ? 'visible' : ''}`}>
      <header className="header">
        <div className="header-content">
          <h1 className="glitch" data-text="YASEENSHEIKH">YASEENSHEIKH</h1>
          <p className="subtitle">Full Stack Developer</p>
          <div className="contact-info">
            <a href="https://linkedin.com/in/YaseenSheikh" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/YaseenSheikh" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="tel:7875869377">7875869377</a>
            <a href="mailto:official.yaseen.sheikh@gmail.com">official.yaseen.sheikh@gmail.com</a>
            <span>Hyderabad</span>
          </div>
        </div>
      </header>

      <main>
        <section className="skills-section">
          <h2 className="section-title">Skills</h2>
          <div className="skills-container">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">JavaScript</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-tags">
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Spring Boot</span>
                <span className="skill-tag">Kotlin</span>
                <span className="skill-tag">REST APIs</span>
                <span className="skill-tag">Microservices</span>
                <span className="skill-tag">Hibernate</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>DevOps & Tools</h3>
              <div className="skill-tags">
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Azure</span>
                <span className="skill-tag">GitHub Actions</span>
                <span className="skill-tag">CI/CD</span>
                <span className="skill-tag">Jenkins</span>
              </div>
            </div>
          </div>
        </section>

        <section className="experience-section">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Software Engineer</h3>
                <h4>Infogain India Pvt. Ltd.</h4>
                <p className="timeline-date">Oct 2021 – Present</p>
                <div className="project-details">
                  <h5>Project: FedEx Sustainability Insight & FDX (2.5 Years)</h5>
                  <ul>
                    <li>Developed scalable backend microservices using Spring Boot and Microservices</li>
                    <li>Built robust RESTful APIs and optimized database operations</li>
                    <li>Implemented best practices in ORM mapping and connection pooling</li>
                    <li>Integrated Selenium/Cucumber for automation testing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="projects-section">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>MATCHMaticAI</h3>
              <p>Ollama AI-Powered Resume Scanner & Chatbot</p>
              <div className="project-tech">
                <span>Spring Boot</span>
                <span>Docker</span>
                <span>Ollama AI</span>
              </div>
              <a href="https://github.com/YaseenSheikh/MATCHMaticAI" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
            <div className="project-card">
              <h3>COVID-19 Tracker</h3>
              <p>Real-Time Global Case Monitoring</p>
              <div className="project-tech">
                <span>Spring Boot</span>
                <span>Java</span>
                <span>REST API</span>
              </div>
              <a href="https://github.com/YaseenSheikh/COVID-19-Tracker" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
            <div className="project-card">
              <h3>BRICKStorm</h3>
              <p>2D Brick Breaker Game</p>
              <div className="project-tech">
                <span>Java</span>
                <span>Game Development</span>
              </div>
              <a href="https://github.com/YaseenSheikh/BRICKStorm" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        </section>

        <section className="education-section">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            <div className="education-card">
              <h3>MCA</h3>
              <p>G H Raisoni Institute of Information Technology, Nagpur</p>
              <span className="year">2022</span>
            </div>
            <div className="education-card">
              <h3>BCA</h3>
              <p>St. Francis De Sales College, Nagpur</p>
              <span className="year">2019</span>
            </div>
          </div>
        </section>

        <section className="certifications-section">
          <h2 className="section-title">Certifications</h2>
          <div className="cert-grid">
            <div className="cert-card">Java (HackerRank)</div>
            <div className="cert-card">React (Meta)</div>
            <div className="cert-card">Generative AI (Deeplearning.ai)</div>
            <div className="cert-card">Digital Marketing (Google)</div>
          </div>
        </section>
      </main>

      <footer>
        <p>Last updated in April 2025</p>
      </footer>
    </div>
  )
}

export default App
