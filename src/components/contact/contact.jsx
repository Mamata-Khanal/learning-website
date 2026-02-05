import { useState } from "react";
import "../../styles/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert("Message sent successfully! (This is a demo)");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container section-padding">
        <div className="contact-content">
          {/* Section Header */}
          <div className="section-header">
            <h2 className="section-title">Contact Me</h2>
            <div className="section-divider"></div>
          </div>
          
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="Your email address"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="form-textarea"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-btn">
              <span>Send Message</span>
              <svg
                className="send-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 2L11 13" />
                <path d="M22 2L15 22L11 13L2 9L22 2Z" />
              </svg>
            </button>
          </form>

          {/* Alternative Contact Info */}
          <div className="contact-info">
            <p className="contact-alt">
              Or email me directly at:{" "}
              <a href="mailto:mamata@example.com" className="contact-email">
                mamata@example.com
              </a>
            </p>
          </div>

          {/* Additional Info Section */}
          <div className="contact-extra">
            <div className="extra-item">
              <div className="extra-icon">📍</div>
              <div>
                <h3 className="extra-title">Location</h3>
                <p className="extra-text">Kathmandu, Nepal</p>
              </div>
            </div>

            <div className="extra-item">
              <div className="extra-icon">⏰</div>
              <div>
                <h3 className="extra-title">Response Time</h3>
                <p className="extra-text">Usually within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
