import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";
import { assets } from "../../assets/assets";

const skills = [
  { name: "HTML", logo: assets.html_logo },
  { name: "CSS", logo: assets.css_logo },
  { name: "JavaScript", logo: assets.javascript_logo },
  { name: "React", logo: assets.react_logo },
  { name: "BootStrap CSS", logo: assets.bootstrap_logo },
  { name: "Tailwind CSS", logo: assets.tailwindcss_logo },
  { name: "Node.js", logo: assets.nodejs_logo },
  { name: "Express.js", logo: assets.expressjs_logo },
  { name: "MongoDB", logo: assets.mongodb_logo },
  { name: "MySql", logo: assets.mysql_logo },
  { name: "Git", logo: assets.git_logo },
  { name: "GitHub", logo: assets.github_logo },
  { name: "Python", logo: assets.python_logo },
  { name: "Excel", logo: assets.excel_logo },
  { name: "Canva", logo: assets.canva_logo },
];

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      {/* Title */}
      <motion.h2
        className="skills-heading"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        // viewport={{ once: true }}
      >
        MY <span>SKILLS</span>
      </motion.h2>

      {/* Skill Cards */}
      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        // viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={skill.logo}
              alt={`${skill.name} logo`}
              className="skill-logo"
            />
            <p className="skill-name">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
