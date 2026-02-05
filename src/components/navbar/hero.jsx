// src/components/herojxs/Hero.js
import "../../styles/hero.css";

const Hero = () => {
  // Handle button clicks for smooth scrolling
  const handleViewWork = (e) => {
    e.preventDefault();
    const element = document.querySelector("#projects");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleContactMe = (e) => {
    e.preventDefault();
    const element = document.querySelector("#contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container section-padding">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="name-highlight">Mamata Khanal</span>.
          </h1>

          <h2 className="hero-subtitle">
            I'm a passionate developer with expertise in web development,
          </h2>

          <p className="hero-description">
            creating beautiful and functional applications that provide
            excellent user experiences. I specialize in modern web technologies
            and love turning complex problems into simple, beautiful designs.
          </p>

          <div className="hero-buttons">
            <button onClick={handleViewWork} className="btn btn-primary">
              View My Work
            </button>
            <button onClick={handleContactMe} className="btn btn-secondary">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
