import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with React, Node.js, and MongoDB",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates",
    tech: ["Next.js", "Firebase", "Tailwind"],
    github: "https://github.com",
    live: "https://example.com",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w-800",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with location-based forecasts",
    tech: ["React", "API", "Chart.js"],
    github: "https://github.com",
    live: "https://example.com",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">My Projects</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and
          experience.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-600 hover:text-primary"
                  >
                    <FaGithub className="mr-2" /> Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center text-gray-600 hover:text-primary"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
