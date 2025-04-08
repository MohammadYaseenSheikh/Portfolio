import './App.css'

function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <h1>Mohammad Yaseen Sheikh</h1>
        <p>Full Stack Developer</p>
      </header>

      <main>
        <section className="about">
          <h2>About Me</h2>
          <p>I am a passionate Full Stack Developer with experience in modern web technologies.</p>
        </section>

        <section className="projects">
          <h2>Projects</h2>
          <div className="project-grid">
            {/* Add your projects here */}
            <div className="project-card">
              <h3>Project 1</h3>
              <p>Description of your first project</p>
            </div>
            <div className="project-card">
              <h3>Project 2</h3>
              <p>Description of your second project</p>
            </div>
          </div>
        </section>

        <section className="skills">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill">React</div>
            <div className="skill">TypeScript</div>
            <div className="skill">Node.js</div>
            <div className="skill">JavaScript</div>
            {/* Add more skills */}
          </div>
        </section>

        <section className="contact">
          <h2>Contact</h2>
          <p>Get in touch with me:</p>
          <div className="contact-links">
            <a href="https://github.com/MohammadYaseenSheikh" target="_blank" rel="noopener noreferrer">GitHub</a>
            {/* Add more contact links */}
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Mohammad Yaseen Sheikh. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
