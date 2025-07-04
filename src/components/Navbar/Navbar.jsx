import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [menu, setMenu] = useState("home");

  const handleMenuClick = (section) => {
    setMenu(section);
    setVisible(false); // Auto-close for side-navbar
  };

  return (
    <div className="navbar">
      <h1>MY PORTFOLIO</h1>

      <div className="navbar-links">
        <ul>
          <li className="navbar-link">
            <AnchorLink
              className={`anchor-link ${menu === "home" ? "active" : ""}`}
              href="#home"
              onClick={() => handleMenuClick("home")}
            >
              <span>Home</span>
            </AnchorLink>
          </li>
          <li className="navbar-link">
            <AnchorLink
              className={`anchor-link ${menu === "about" ? "active" : ""}`}
              offset={50}
              href="#about"
              onClick={() => handleMenuClick("about")}
            >
              <span>About</span>
            </AnchorLink>
          </li>
          <li className="navbar-link">
            <AnchorLink
              className={`anchor-link ${menu === "education" ? "active" : ""}`}
              offset={50}
              href="#education"
              onClick={() => handleMenuClick("education")}
            >
              <span>Education</span>
            </AnchorLink>
          </li>
          <li className="navbar-link">
            <AnchorLink
              className={`anchor-link ${menu === "skills" ? "active" : ""}`}
              offset={50}
              href="#skills"
              onClick={() => handleMenuClick("skills")}
            >
              <span>Skills</span>
            </AnchorLink>
          </li>
          <li className="navbar-link">
            <AnchorLink
              className={`anchor-link ${menu === "contact" ? "active" : ""}`}
              offset={50}
              href="#contact"
              onClick={() => handleMenuClick("contact")}
            >
              <span>Contact</span>
            </AnchorLink>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div className="navbar-menu-toggle" onClick={() => setVisible(true)}>
          <FaBars size={25} color="white" />
        </div>
      </div>

      {/* Side Navbar */}
      <div className={`side-navbar ${visible ? "side-navbar-show" : ""}`}>
        <p style={{ textAlign: "right" }} onClick={() => setVisible(false)}>
          <FaTimes size={25} />
        </p>

        <div className="side-navbar-links">
          <p className="side-navbar-link">
            <AnchorLink
              className={`anchor-link ${menu === "home" ? "active" : ""}`}
              href="#home"
              onClick={() => handleMenuClick("home")}
            >
              <span>Home</span>
            </AnchorLink>
          </p>
          <p className="side-navbar-link">
            <AnchorLink
              className={`anchor-link ${menu === "about" ? "active" : ""}`}
              offset={50}
              href="#about"
              onClick={() => handleMenuClick("about")}
            >
              <span>About</span>
            </AnchorLink>
          </p>
          <p className="side-navbar-link">
            <AnchorLink
              className={`anchor-link ${menu === "education" ? "active" : ""}`}
              offset={50}
              href="#education"
              onClick={() => handleMenuClick("education")}
            >
              <span>Education</span>
            </AnchorLink>
          </p>
          <p className="side-navbar-link">
            <AnchorLink
              className={`anchor-link ${menu === "skills" ? "active" : ""}`}
              offset={50}
              href="#skills"
              onClick={() => handleMenuClick("skills")}
            >
              <span>Skills</span>
            </AnchorLink>
          </p>
          <p className="side-navbar-link">
            <AnchorLink
              className={`anchor-link ${menu === "contact" ? "active" : ""}`}
              offset={50}
              href="#contact"
              onClick={() => handleMenuClick("contact")}
            >
              <span>Contact</span>
            </AnchorLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
