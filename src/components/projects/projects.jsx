import "../../styles/project.css";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured online store with product management, cart functionality, and payment processing.",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    description:
      "A productivity application for managing tasks, projects, and team collaboration.",
    tech: ["Vue.js", "Firebase", "Tailwind CSS"],
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing projects and skills.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
  },
  {
    title: "Recipe Finder",
    description:
      "A web application for discovering and saving recipes based on available ingredients.",
    tech: ["React", "Express", "Spoonacular API"],
  },
  {
    title: "Social Media Dashboard",
    description:
      "An analytics dashboard for tracking social media performance across platforms.",
    tech: ["Angular", "Chart.js", "Bootstrap"],
  },
  {
    title: "Weather Application",
    description:
      "A real-time weather application with location-based forecasts and alerts.",
    tech: ["React", "OpenWeather API", "CSS"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container section-padding">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <div className="section-divider"></div>
        </div>

        <p className="projects-subtitle">
          Here are some of my recent projects that showcase my skills and
          experience.
        </p>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {/* Project Number Indicator */}
              <div className="project-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Project Content */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>

                <p className="project-description">{project.description}</p>

                {/* Tech Stack Tags */}
                <div className="tech-stack">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="project-links">
                  <a
                    href="https://github.com"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="link-text">View Code</span>
                    <svg
                      className="link-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M9 18L15 12L9 6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>

                  <a
                    href="https://demo.com"
                    className="project-link live-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="link-text">Live Demo</span>
                    <svg
                      className="link-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M18 13V19C18 20.1046 17.1046 21 16 21H5C3.89543 21 3 20.1046 3 19V8C3 6.89543 3.89543 6 5 6H11"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M15 3H21V9"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M10 14L21 3"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="view-more-container">
          <button className="view-more-btn">
            View All Projects
            <svg
              className="arrow-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M5 12H19" strokeWidth="2" strokeLinecap="round" />
              <path
                d="M12 5L19 12L12 19"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
