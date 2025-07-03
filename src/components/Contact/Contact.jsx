import React, { useEffect } from 'react';
import './Contact.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../Title/Title";
import { assets } from '../../assets/assets';

const Contact = () => {

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
      alert(res.message);
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

        {/* Left side */}
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ad suscipit nostrum mollitia vel reprehenderit quidem placeat tempora odit repellat.</p>
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

        {/* Right side form */}
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name:</label>
          <input type="text" placeholder='Enter your name' name='name' required />
          <label htmlFor="">Your Email:</label>
          <input type="email" placeholder='Enter your email' name='email' required />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
          <button type='submit' className='contact-submit'>Submit Now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
