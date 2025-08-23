import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle smooth scrolling
  const handleNavClick = (event) => {
    event.preventDefault(); // Prevent the default instant jump

    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }

    // Close the mobile menu if it's open
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <a href="#hero" className="navbar-logo" onClick={handleNavClick}>
        Portfolio<span className="dot">.</span>
      </a>

      {/* Desktop Links */}
      <ul className="navbar-links">
        <li><a href="#hero" className="nav-item" onClick={handleNavClick}>Home</a></li>
        <li><a href="#about" className="nav-item" onClick={handleNavClick}>About Me</a></li>
        <li><a href="#education" className="nav-item" onClick={handleNavClick}>Education</a></li>
        <li><a href="#skills" className="nav-item" onClick={handleNavClick}>Skills</a></li>
        <li><a href="#work" className="nav-item" onClick={handleNavClick}>My Work</a></li>
        <li><a href="#contact" className="nav-item" onClick={handleNavClick}>Contact Me</a></li>
      </ul>

      {/* Right Side */}
      <div className="navbar-right">
        <a href="#contact" className="contact-btn" onClick={handleNavClick}>Contact</a>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleMenu}>✕</button>
        <a href="#hero" className="mobile-link" onClick={handleNavClick}>Home</a>
        <a href="#about" className="mobile-link" onClick={handleNavClick}>About Me</a>
        <a href="#education" className="mobile-link" onClick={handleNavClick}>Education</a>
        <a href="#skills" className="mobile-link" onClick={handleNavClick}>Skills</a>
        <a href="#work" className="mobile-link" onClick={handleNavClick}>My Work</a>
        <a href="#contact" className="mobile-link" onClick={handleNavClick}>Contact Me</a>
      </div>
    </nav>
  );
};

export default Navbar;