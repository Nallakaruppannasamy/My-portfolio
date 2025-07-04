import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const [menu,setMenu] = useState("home");

  return (
    <div className="navbar">
      <h1>MY PORTFOLIO</h1>

      <div className="navbar-links">
        <ul>
          <li className="navbar-link">
            <AnchorLink className="anchor-link" href="#home"><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>
          </li>
          <li className="navbar-link">
            <AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={()=>setMenu("about")}>About</p></AnchorLink>
          </li>
          <li className="navbar-link">
            <AnchorLink className="anchor-link" offset={50} href="#education"><p onClick={()=>setMenu("education")}>Education</p></AnchorLink>
          </li>
          <li className="navbar-link">
            <AnchorLink className="anchor-link" offset={50} href="#skills"><p onClick={()=>setMenu("skills")}>Skills</p></AnchorLink>
          </li>
          {/* <li className="navbar-link">
            <AnchorLink className="anchor-link" offset={50} href="#projects"><p onClick={()=>setMenu("projects")}>Projects</p></AnchorLink>
          </li> */}
          <li className="navbar-link">
            <AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>
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
            <AnchorLink className="anchor-link" href="#home"><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>
          </p>
          <p className="side-navbar-link">
            <AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={()=>setMenu("about")}>About</p></AnchorLink>
          </p>
          <p className="side-navbar-link">
            <AnchorLink className="anchor-link" offset={50} href="#education"><p onClick={()=>setMenu("education")}>Education</p></AnchorLink>
          </p>
          <p className="side-navbar-link">
            <AnchorLink className="anchor-link" offset={50} href="#skills"><p onClick={()=>setMenu("skills")}>Skills</p></AnchorLink>
          </p>
          {/* <p className="side-navbar-link">
            <AnchorLink className="anchor-link" offset={50} href="#projects"><p onClick={()=>setMenu("projects")}>Projects</p></AnchorLink>
          </p> */}
          <p className="side-navbar-link">
            <AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
