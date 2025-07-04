import React, { useEffect, useRef } from 'react';
import './Contact.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../Title/Title";
import { assets } from '../../assets/assets';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const formRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "4f505c92-93ef-4759-8698-dbe4287e5182");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Message sent successfully!");
      formRef.current.reset(); // ✅ Reset form after success
    } else {
      toast.error("Failed to send message.");
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div id='contact' className='contact'>
      <div className="contact-title-component" data-aos="fade-down">
        <Title text1={"GET-IN"} text2={" TOUCH"} />
      </div>

      <div className="contact-section" data-aos="fade-up">
        {/* Left Side */}
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm always open to <strong>exciting opportunities</strong>, <strong>meaningful collaborations</strong>, or simply a <strong>tech-focused conversation</strong>.  
  Whether you're planning a project or just want to connect, feel free to reach out — let’s create something impactful together.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={assets.mail_logo} alt="email" />
              <p>rnksamy007@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={assets.call_logo} alt="call" />
              <p>+91 6369606763</p>
            </div>
            <div className="contact-detail">
              <img src={assets.location_logo} alt="location" />
              <p>Chennai, India</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <form ref={formRef} onSubmit={onSubmit} className="contact-right">
          <label>Full Name:</label>
          <input type="text" placeholder='Enter your name' name='name' required />
          
          <label>Email Address:</label>
          <input type="email" placeholder='Enter your email' name='email' required />
          
          <label>Let’s Start the Conversation:</label>
          <textarea name="message" rows="8" placeholder="Tell me about your project, idea, or question..." required></textarea>
          
          <button type='submit' className='contact-submit'>Submit Now</button>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick pauseOnFocusLoss draggable pauseOnHover theme="dark"/>

    </div>
  );
};

export default Contact;
