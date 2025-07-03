import React, { useEffect } from "react";
import "./Education.css";
import Title from "../Title/Title";
import AOS from 'aos';
import "aos/dist/aos.css";

const educationData = [
  {
    institution: "Sathyabama Institute of Science and Technology",
    degree: "B.E in Electronics and Communication Engineering",
    cgpa: "8.82 / 10.00",
    duration: "August 2024 - Present",
    location: "Chennai, India",
  },
  {
    institution: "Bhuvana Krishnan Matriculation Higher Secondary School",
    degree: "Higher Secondary Education - XII",
    marks: "546 / 600",
    percentage: "91%",
    duration: "June 2023 – March 2024",
    location: "Chennai, India",
  },
  {
    institution: "St. Joseph’s Matriculation School",
    degree: "Secondary Education - X",
    marks: "396 / 500",
    percentage: "79.2%",
    duration: "June 2022 – March 2023",
    location: "Chennai, India",
  },
];

const Education = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);

  return (
    <div>
      <div className="education-title-component" data-aos="fade-down">
        <Title text1={"EDUCATIONAL"} text2={" QUALIFIACTION"} />
      </div>
      <div className="education-section" data-aos="fade-up">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <div className="edu-left">
              <h3>{edu.institution}</h3>
              <p>
                <em>{edu.degree}</em>
              </p>
              {edu.cgpa && <p>• CGPA: {edu.cgpa}</p>}
              {edu.marks && <p>• Marks Obtained: {edu.marks}</p>}
              {edu.percentage && <p>• Percentage: {edu.percentage}</p>}
            </div>
            <div className="edu-right">
              <p>
                <em>{edu.duration}</em>
              </p>
              <p>{edu.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
