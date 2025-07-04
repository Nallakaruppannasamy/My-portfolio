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
        <p>🚀 I'm a <strong>Electronics and Communication Engineering (ECE) student</strong> at <strong>Sathyabama Institute of Science and Technology (SIST), Chennai</strong> with a growing passion for <strong>web development</strong> and modern technologies.</p>

        <p>💻 I’m currently building <strong>full-stack projects</strong> using the <strong>MERN stack</strong> (MongoDB, Express.js, React, Node.js), along with tools like <strong>Vite</strong>, <strong>Tailwind CSS</strong>, and <strong>GitHub</strong>.</p>

        <p>🎯 I focus on building <strong>responsive, user-centric interfaces</strong> and delivering <strong>efficient front-end experiences</strong> in real-world applications.</p>

        <p>🔎 As a self-driven learner, I constantly explore <strong>new tools</strong>, sharpen my <strong>JavaScript and React</strong> skills, and tackle <strong>practical challenges</strong> to grow as a developer.</p>

        <p>🤝 I’m actively seeking <strong>internships</strong>, <strong>collaborations</strong>, or project opportunities where I can <strong>contribute</strong>, <strong>learn</strong>, and build impactful solutions with passionate teams.</p>

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
