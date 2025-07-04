import React, { useEffect } from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import AOS from 'aos';
import "aos/dist/aos.css";
import { FaFilePdf } from "react-icons/fa";

const Hero = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div id="home" className="hero-container">
      {/* Left side of the hero section */}
      <div className="hero-text" data-aos="fade-right">
        <h1><span>Hello, I'm Nallakaruppannasamy</span></h1>
        {/* <p>I'm a MERN Stack enthusiast and ECE student passionate about IT tools and modern web development.</p> */}
        <p>MERN Stack Learner | ECE Student | Passionate Web Developer in Progress | Creating Real Projects | Future Full Stack Developer </p>
        <div className="hero-action">
          <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with Me</AnchorLink></div>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hero-resume"><FaFilePdf style={{ marginRight: "8px" }} />My Resume</a>


        </div>
      </div>

      {/* Right side of the hero section */}
      <div className="hero-img" data-aos="fade-left">
        <img src={profile_img} alt="My Profile Photo" className="profile-img" />
      </div>
    </div>
  );
};

export default Hero;
