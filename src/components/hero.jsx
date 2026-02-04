import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="section-padding min-h-screen flex items-center pt-20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Alex</span>
            <br />
            <span className="text-secondary">Full Stack Developer</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            I build exceptional digital experiences that are fast, accessible,
            visually appealing, and responsive.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <button className="btn-primary">View Projects</button>
            <button className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-all">
              Download CV
            </button>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com"
              className="text-2xl text-gray-600 hover:text-primary transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              className="text-2xl text-gray-600 hover:text-primary transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              className="text-2xl text-gray-600 hover:text-primary transition-colors"
            >
              <FaTwitter />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
