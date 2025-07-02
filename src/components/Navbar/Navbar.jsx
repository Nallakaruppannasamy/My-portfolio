import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import "./Navbar.css";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="navbar">
      <h1>MY PORTFOLIO</h1>

      <div className="navbar-links">
        <ul>
          <li className="navbar-link">
            <a href="#">Home</a>
            <hr />
          </li>
          <li className="navbar-link">
            <a href="#">About</a>
            <hr />
          </li>
          <li className="navbar-link">
            <a href="#">Education</a>
            <hr />
          </li>
          <li className="navbar-link">
            <a href="#">Skills</a>
            <hr />
          </li>
          <li className="navbar-link">
            <a href="#">Projects</a>
            <hr />
          </li>
          <li className="navbar-link">
            <a href="#">Contact</a>
            <hr />
          </li>

          <div className="navbar-menu-toggle" onClick={() => setVisible(true)}>
            <FaBars size={25} color="white" />
          </div>
        </ul>
      </div>

      <div className={`side-navbar ${visible ? "side-navbar-show" : ""}`}>
        <p style={{ textAlign: "right" }} onClick={() => setVisible(false)}>
          <FaTimes size={25} />
        </p>

        <div className="side-navbar-links">
          <p className="side-navbar-link">
            <a href="#">Home</a>
          </p>
          <p className="side-navbar-link">
            <a href="#">About</a>
          </p>
          <p className="side-navbar-link">
            <a href="#">Education</a>
          </p>
          <p className="side-navbar-link">
            <a href="#">Skills</a>
          </p>
          <p className="side-navbar-link">
            <a href="#">Projects</a>
          </p>
          <p className="side-navbar-link">
            <a href="#">Contact</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
