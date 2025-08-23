import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLink } from 'react-icons/fa';
import './MyWork.css';
import { assets } from '../../assets/assets';

// --- You can replace this with your actual project data ---
const myProjects = [
  {
    name: "E-commerce Website",
    description: "A full-featured e-commerce platform built with the MERN stack, including payment gateway integration.",
    image: assets.ezybuyImg,
    liveLink: "https://ezy-buy.vercel.app",
    codeLink: "https://github.com/Nallakaruppannasamy/EzyBuy",
    tech: ["React", "MongoDB", "Express", "Tailwind CSS"]
  },
  {
    name: "Portfolio Website",
    description: "A responsive personal portfolio to showcase skills and projects, built with React and Framer Motion.",
    image: assets.portfolioImg,
    liveLink: "https://my-portfolio-rose-pi-46.vercel.app",
    codeLink: "https://github.com/Nallakaruppannasamy/My-portfolio",
    tech: ["React", "CSS", "Framer Motion"]
  },
  {
    name: "Chat Application",
    description: "A real-time chat application built with React and Socket.io. Features include instant messaging, user authentication, and a clean, responsive interface for seamless communication across devices.",
    image: assets.chatAppImg,
    liveLink: "https://chat-app-zeta-ruddy.vercel.app",
    codeLink: "https://github.com/Nallakaruppannasamy/Chat-App",
    tech: ["React", "MongoDb", "Express", "Tailwind CSS", "Socket.io"]
  }
];
// ---------------------------------------------------------


// Framer Motion animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Each child will appear 0.3s after the previous one
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const MyWork = () => {
  return (
    <section id="work" className="work-section">
      {/* Section Title */}
      <motion.h2
        className="work-heading"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        // viewport={{ once: true }}
      >
        My <span>Work</span>
      </motion.h2>

      {/* Projects Grid */}
      <motion.div
        className="work-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }} 
      >
        {myProjects.map((project, index) => (
          <motion.div
            className="work-card"
            key={index}
            variants={cardVariants}
            whileHover={{ y: -10, boxShadow: "0px 15px 30px rgba(0,0,0,0.4)" }}
          >
            <div className="work-image-container">
              <img src={project.image} alt={`${project.name} screenshot`} className="work-image" />
              <div className="work-overlay">
                <p className="work-description">{project.description}</p>
                <div className="work-links">
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" title="View Code">
                    <FaGithub />
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" title="Live Demo">
                    <FaLink />
                  </a>
                </div>
              </div>
            </div>
            <div className="work-info">
              <h3 className="work-title">{project.name}</h3>
              <div className="work-tech">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default MyWork;
