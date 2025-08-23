import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Hero.css';

// Variants for staggered icons
const iconContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const iconItem = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } },
};

function Home() {
  return (
    <div id='home' className="app-container">
      {/* LEFT SIDE */}
      <motion.div
        className="content-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        // viewport={{ once: true }}
      >
        <motion.p
          className="intro-text"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          // viewport={{ once: true }}
        >
          Hi there, I'm
        </motion.p>

        <motion.h1
          className="name-text"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          // viewport={{ once: true }}
        >
          Nallakaruppannasamy
        </motion.h1>

        <TypeAnimation
          sequence={[
            'I am into Frontend Development', 1500,
            'I am into MERN Stack Development', 1500,
            'I am into Full Stack Development', 1500,
          ]}
          wrapper="h2"
          speed={50}
          className="role-text"
          repeat={Infinity}
        />

        {/* Social icons with staggered bounce */}
        <motion.div
          className="social-icons"
          variants={iconContainer}
          initial="hidden"
          whileInView="show"
          // viewport={{ once: true }}
        >
          <motion.a
            href="https://www.instagram.com/_rnks_007"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconItem}
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <FaInstagram />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/nallakaruppannasamyr"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconItem}
            whileHover={{ scale: 1.2, rotate: -10 }}
          >
            <FaLinkedinIn />
          </motion.a>

          <motion.a
            href="https://github.com/Nallakaruppannasamy"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconItem}
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <FaGithub />
          </motion.a>
        </motion.div>

        <motion.button
          className="explore-button"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 15px rgba(100, 255, 218, 0.8)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Explore My Work &rarr;
        </motion.button>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        className="content-right"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        // viewport={{ once: true }}
      >
        <motion.div
          className="animated-graphic"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <motion.div
            className="icon-brackets left-bracket"
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            &lt;
          </motion.div>
          <motion.div
            className="icon-brackets right-bracket"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            &gt;
          </motion.div>
          <motion.div
            className="inner-icon code-slash"
            whileHover={{ scale: 1.2, color: "#64ffda" }}
          >
            &lt;/&gt;
          </motion.div>
          <motion.div
            className="inner-icon code-braces"
            whileHover={{ scale: 1.2, color: "#ff6489" }}
          >
            &#123; &#125;
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;
