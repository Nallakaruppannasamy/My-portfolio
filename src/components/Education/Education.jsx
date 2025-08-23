import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./Education.css";

// Container animation (stagger children)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  },
};

// Card animations
const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

// Icon animations
const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: { 
    scale: 1, 
    rotate: 0, 
    transition: { type: "spring", stiffness: 120 }
  },
  hover: { scale: 1.2, rotate: 10 }
};

const Education = () => {
  return (
    <section id="education" className="education-section">
      {/* Title with animation */}
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My <span>Education</span>
      </motion.h2>

      {/* Container */}
      <motion.div 
        className="education-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        // viewport={{ once: true }}
      >
        {/* B.E Card */}
        <motion.div 
          className="education-card"
          variants={cardVariants}
          whileHover={{ rotateX: 5, rotateY: -5, scale: 1.05 }}
        >
          <h3>B.E Electronics and Communication Engineering</h3>
          <p className="institute">
            <motion.span variants={iconVariants} whileHover="hover">
              <FaGraduationCap className="icon" />
            </motion.span>
            Sathyabama Institute of Science And Technology
          </p>
          <p className="details"><FaCalendarAlt className="icon" /> 2024 - Present</p>
          <p className="details"><FaMapMarkerAlt className="icon" /> Chennai</p>
        </motion.div>

        {/* Higher Secondary Card */}
        <motion.div 
          className="education-card"
          variants={cardVariants}
          whileHover={{ rotateX: -5, rotateY: 5, scale: 1.05 }}
        >
          <h3>Higher Secondary (Compupter Science)</h3>
          <p className="institute">
            <motion.span variants={iconVariants} whileHover="hover">
              <FaSchool className="icon" />
            </motion.span>
            Bhuvana Krishna Mat Hr Sec School
          </p>
          <p className="details"><FaCalendarAlt className="icon" /> 2022 - 2024</p>
          <p className="details"><FaMapMarkerAlt className="icon" /> Kelambakkam, Chengalpattu</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;
