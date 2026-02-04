import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

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
    alert("Message sent! (This is a demo)");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-padding bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Get In Touch</h2>
        <p className="text-gray-600 text-center mb-12">
          Have a project in mind? Feel free to reach out!
        </p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn-primary w-full flex items-center justify-center"
          >
            <FaPaperPlane className="mr-2" />
            Send Message
          </button>
        </motion.form>

        <div className="mt-12 text-center text-gray-600">
          <p>
            Or email me directly at:{" "}
            <a href="mailto:hello@example.com" className="text-primary">
              hello@example.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
