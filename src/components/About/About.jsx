import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";
import Title from "../Title/Title";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="about-me" id="about">
      <div className="title-component" data-aos="fade-down">
        <Title text1={"ABOUT"} text2={" ME"} />
      </div>

      <div className="description" data-aos="fade-up">
        <p>
          🚀 I'm a second-year Electronics and Communication Engineering (ECE) student at Sathyabama Institute of Science and Technology (SIST), Chennai, with a strong passion for web development and modern tech.
💻 I'm currently learning and building full-stack projects using the MERN stack — MongoDB, Express.js, React, and Node.js — along with tools like Vite, Tailwind CSS, and GitHub.
🎯 I enjoy designing responsive user interfaces and developing real-world applications that are clean, efficient, and user-friendly.
🌱 I'm a dedicated learner who’s always exploring new tools, improving my skills, and taking on practical challenges to grow as a developer.
🤝 I’m open to internships, collaborations, and opportunities where I can contribute, learn, and build meaningful solutions with enthusiastic teams.
        </p>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/nallakaruppannasamyr/" target="_blank" rel="noopener noreferrer"> <FaLinkedin /> </a>
          <a href="https://www.instagram.com/_rnks_007/" target="_blank" rel="noopener noreferrer"> <FaInstagram /> </a>
          <a href="https://github.com/Nallakaruppannasamy" target="_blank" rel="noopener noreferrer"> <FaGithub /> </a>
        </div>
      </div>
    </div>
  );
};

export default About;
