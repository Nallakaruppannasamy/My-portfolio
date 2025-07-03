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
          👋 Hello! I'm a Electronics and Communication Engineering (ECE) student at Sathyabama Institute of Science and Technology, driven by a strong passion for Information Technology tools and modern
          software development. ⚙️💻 Although my academic journey is rooted in electronics, I’ve always been fascinated by the way software
          transforms ideas into reality. I actively explore full-stack development, version control systems like Git and GitHub, UI/UX
          principles, and cloud deployment tools. 🌐🚀 I enjoy crafting user-friendly digital experiences, solving real-world problems through
          code, and merging hardware knowledge with innovative software solutions. My goal is to bridge the gap between electronics and
          intelligent IT systems to contribute to smarter, more efficient technology. 🔌📲 I constantly engage in hands-on learning through
          online platforms, project work, and team collaborations to sharpen my technical and problem-solving skills. Whether it's building web apps,
          experimenting with automation, or understanding IoT systems, I’m always eager to grow and take on new challenges. 💡✨ I'm currently open to internships, collaborations, and learning opportunities where
          I can apply and enhance my skills. Let’s connect and build something impactful together! 🤝🙂
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
