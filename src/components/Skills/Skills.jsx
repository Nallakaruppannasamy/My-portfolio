import React, { useEffect } from "react";
import "./Skills.css";
import Title from '../Title/Title.jsx';
import AOS from "aos";
import "aos/dist/aos.css";
import { assets } from "../../assets/assets.js";


const skills = [
  { name: "HTML", logo: assets.html_logo },
  { name: "CSS", logo: assets.css_logo },
  { name: "JavaScript", logo: assets.javascript_logo },
  { name: "React", logo: assets.react_logo },
  { name: "BootStrap CSS", logo: assets.bootstrap_logo },
  { name: "Tailwind CSS", logo: assets.tailwindcss_logo },
  { name: "Node.js", logo: assets.nodejs_logo },
  { name: "MongoDB", logo: assets.mongodb_logo },
  { name: "MySql", logo: assets.mysql_logo },
  { name: "Git", logo: assets.git_logo },
  { name: "GitHub", logo: assets.github_logo },
  { name: "Python", logo: assets.python_logo },
  { name: "Excel", logo: assets.excel_logo },
  { name: "Canva", logo: assets.canva_logo },
];


const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="skill-title-component" data-aos="fade-down">
        <Title text1={"MY"} text2={" SKILLS"} />
      </div>

      <div className="skills-grid" data-aos="fade-up">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
