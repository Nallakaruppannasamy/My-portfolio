import React, { useState } from "react";
import "./Navbar.css";
import { Menu, X, ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      {/* Left Logo */}
      <a href="#home" className="navbar-logo">
        Portfolio<span className="dot">.</span>
      </a>

      {/* Desktop Links */}
      <ul className="navbar-links">
        <a href="#home" className="nav-item">Home</a>
        <a href="#about" className="nav-item">About me</a>
        <a href="#education" className="nav-item">Education</a>
        <a href="#skills" className="nav-item">Skills</a>
        <a href="#work" className="nav-item">My Work</a>
        <a href="#contact" className="nav-item">Contact me</a>
      </ul>

      {/* Right Side */}
      <div className="navbar-right">
        <a href="#contact" className="contact-btn">
          Contact <ArrowUpRight size={16} />
        </a>

        {/* Mobile Menu Icon */}
        <button className="menu-toggle" onClick={() => setMenuOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          <X size={24} />
        </button>
        <a href="#home" className="mobile-link" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" className="mobile-link" onClick={() => setMenuOpen(false)}>About me</a>
        <a href="#education" className="mobile-link" onClick={() => setMenuOpen(false)}>Eductaion</a>
        <a href="#skills" className="mobile-link" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#work" className="mobile-link" onClick={() => setMenuOpen(false)}>My Work</a>
        <a href="#contact" className="mobile-link" onClick={() => setMenuOpen(false)}>Contact me</a>
      </div>
    </header>
  );
};

export default Navbar;
