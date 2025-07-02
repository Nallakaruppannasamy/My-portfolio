import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpg";

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Left side of the hero section */}
      <div className="hero-text">
        <h1><span>Hello, I'm Nallakaruppannasamy</span></h1>
        <p>I'm a MERN Stack enthusiast and ECE student passionate about IT tools and modern web development.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with Me</div>
            <div className="hero-resume">My Resume</div>
        </div>
      </div>

      {/* Right side of the hero section */}
      <div className="hero-img">
        <img src={profile_img} alt="My Profile Photo" className="profile-img" />
      </div>
    </div>
  );
};

export default Hero;
