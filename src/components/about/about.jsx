import "../../styles/about.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container section-padding">
        <div className="about-content">
          {/* Section Header */}
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <div className="section-divider"></div>
          </div>

          {/* Main Description */}
          <div className="about-description">
            <p className="description-text">
              I'm a dedicated developer with a passion for creating elegant
              solutions to complex problems.
            </p>
            <p className="description-text">
              With a background in computer science and years of experience in
              the industry, I specialize in building responsive web applications
              that deliver exceptional user experiences.
            </p>
          </div>

          <div className="divider-line"></div>

          {/* Two Column Layout for Education & Experience */}
          <div className="about-grid">
            {/* Left Column - Education */}
            <div className="about-column">
              <div className="section-subheader">
                <h3 className="subtitle">Education</h3>
                <div className="underline"></div>
              </div>

              <div className="education-item">
                <h4 className="item-title">
                  Bachelor's Degree in Computer Science
                </h4>
                <p className="item-subtitle">University Name, 2018-2022</p>
              </div>

              <div className="section-subheader mt-8">
                <h3 className="subtitle">Interests</h3>
                <div className="underline"></div>
              </div>

              <div className="interests-list">
                <div className="interest-tag">Open Source Contribution</div>
                <div className="interest-tag">UI/UX Design</div>
                <div className="interest-tag">Mobile Development</div>
              </div>
            </div>

            {/* Right Column - Experience */}
            <div className="about-column">
              <div className="section-subheader">
                <h3 className="subtitle">Experience</h3>
                <div className="underline"></div>
              </div>

              <div className="experience-item">
                <h4 className="item-title">Senior Developer at Company Name</h4>
                <p className="item-subtitle">2022-Present</p>
              </div>

              <div className="experience-item mt-6">
                <h4 className="item-title">
                  Junior Developer at Previous Company
                </h4>
                <p className="item-subtitle">2020-2022</p>
              </div>

              <div className="section-subheader mt-8">
                <h3 className="subtitle">Hobbies</h3>
                <div className="underline"></div>
              </div>

              <div className="hobbies-list">
                <div className="hobby-tag">Photography</div>
                <div className="hobby-tag">Hiking</div>
                <div className="hobby-tag">Reading</div>
                <div className="hobby-tag">Playing Guitar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
