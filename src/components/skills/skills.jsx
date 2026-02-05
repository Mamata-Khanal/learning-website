import "../../styles/skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container section-padding">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="section-divider"></div>
        </div>

        <p className="skills-intro">
          I've developed a diverse set of skills throughout my career. Here are
          some of the technologies and tools I'm proficient in.
        </p>

        {/* Skills Grid */}
        <div className="skills-grid">
          {/* Column 1: Frontend Development */}
          <div className="skills-category">
            <h3 className="category-title">
              <span className="category-icon">🖥️</span>
              Frontend Development
            </h3>
            <div className="skills-list">
              {[
                "HTML/CSS",
                "JavaScript",
                "React",
                "Vue.js",
                "Next.js",
                "Tailwind CSS",
                "Responsive Design",
              ].map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-dot"></div>
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Backend Development */}
          <div className="skills-category">
            <h3 className="category-title">
              <span className="category-icon">⚙️</span>
              Backend Development
            </h3>
            <div className="skills-list">
              {[
                "Node.js",
                "Express",
                "Python",
                "Django",
                "RESTful APIs",
                "GraphQL",
                "Firebase",
              ].map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-dot"></div>
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Databases & Tools */}
          <div className="skills-category">
            <h3 className="category-title">
              <span className="category-icon">🗄️</span>
              Databases & Tools
            </h3>
            <div className="skills-list">
              {[
                "MongoDB",
                "PostgreSQL",
                "MySQL",
                "Git",
                "Docker",
                "AWS",
                "CI/CD",
                "Testing",
              ].map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-dot"></div>
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Design & UI/UX */}
          <div className="skills-category">
            <h3 className="category-title">
              <span className="category-icon">🎨</span>
              Design & UI/UX
            </h3>
            <div className="skills-list">
              {[
                "Figma",
                "Adobe XD",
                "UI Design",
                "Wireframing",
                "Prototyping",
                "UX Research",
                "Accessibility",
              ].map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-dot"></div>
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 5: Project Management */}
          <div className="skills-category">
            <h3 className="category-title">
              <span className="category-icon">📊</span>
              Project Management
            </h3>
            <div className="skills-list">
              {[
                "Agile",
                "Scrum",
                "Jira",
                "Trello",
                "Team Leadership",
                "Client Communication",
                "Technical Writing",
              ].map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-dot"></div>
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 6: Other Skills */}
          <div className="skills-category">
            <h3 className="category-title">
              <span className="category-icon">✨</span>
              Other Skills
            </h3>
            <div className="skills-list">
              {[
                "SEO",
                "Performance Optimization",
                "Database Design",
                "Project Management",
              ].map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-dot"></div>
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
