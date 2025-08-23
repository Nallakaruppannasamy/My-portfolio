import React from "react";
import "./About.css";
import { assets } from "../../assets/assets";
import { motion } from "framer-motion";

// Variants for staggered info items
const infoContainer = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3, // delay each child
    },
  },
};

const infoItem = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

const About = () => {
  return (
    <section className="about" id="about">
      {/* Section Title */}
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        // viewport={{ once: true }}
      >
        About <span>Me</span>
      </motion.h2>

      <div className="about-container">
        {/* Left: Profile Image */}
        <motion.div
          className="about-img"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          // viewport={{ once: true }}
        >
          <img src={assets.profileImg} alt="Profile" />
        </motion.div>

        {/* Right: Info */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          // viewport={{ once: true }}
        >
          <motion.h3
            className="about-name"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            // viewport={{ once: true }}
          >
            I'm Nallakaruppannasamy
          </motion.h3>

          <motion.p
            className="about-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            // viewport={{ once: true }}
          >
            I am a B.E. Electronics and Communication Engineering student with a
            strong passion for software development. My primary focus lies in
            full-stack web development, particularly using the MERN stack. I
            have worked on academic and personal projects that emphasize clean
            design and efficient functionality. With a solid foundation in
            programming and problem-solving, I strive to write scalable and
            maintainable code. I am eager to expand my technical expertise and
            explore emerging tools and frameworks. I actively participate in
            technical events and student initiatives to strengthen my skills.
            Collaboration, adaptability, and continuous learning are key aspects
            of my professional growth. I aim to contribute to impactful projects
            that solve real-world challenges.
          </motion.p>

          {/* Info with staggered children */}
          <motion.div
            className="about-info"
            variants={infoContainer}
            initial="hidden"
            whileInView="show"
            // viewport={{ once: true }}
          >
            <motion.div variants={infoItem}>
              <span className="info-title">Email:</span>
              <p className="info-text">rnksamy007@gmail.com</p>
            </motion.div>
            <motion.div variants={infoItem}>
              <span className="info-title">Location:</span>
              <p className="info-text">Chennai, India</p>
            </motion.div>
          </motion.div>

          {/* Button */}
          <motion.a
            href="#"
            download
            className="btn"
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 15px rgba(100, 255, 218, 0.8)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
