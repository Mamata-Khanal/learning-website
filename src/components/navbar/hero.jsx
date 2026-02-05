import "../../styles/global.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="section-padding hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="hero-highlight">Mamata Khanal</span>
        </h1>

        <h2 className="hero-subtitle">
          I'm a passionate developer with expertise in web development,
        </h2>

        <p className="hero-description">
          creating beautiful and functional applications that provide excellent
          user experiences. I specialize in modern web technologies and love
          turning complex problems into simple, beautiful designs.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
      </div>

      {/* Background decoration - optional SVG pattern */}
      <div className="hero-bg-decoration">
        <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#2563eb"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
