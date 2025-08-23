import React, { useRef } from 'react';
import './Contact.css';
import { assets } from '../../assets/assets';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

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
      formRef.current.reset();
    } else {
      toast.error("Failed to send message.");
    }
  };

  return (
    <div id='contact' className='contact'>
      {/* Heading */}
      <motion.h2 
        className="contact-title-component"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        GET IN <span>TOUCH</span>
      </motion.h2>

      <div className="contact-section">
        {/* Left Side */}
        <motion.div 
          className="contact-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1>Let's talk</h1>
          <p>
            I'm always open to <strong>exciting opportunities</strong>, 
            <strong> meaningful collaborations</strong>, or simply a 
            <strong> tech-focused conversation</strong>. Whether you're 
            planning a project or just want to connect, feel free to reach out 
            — let’s create something impactful together.
          </p>
          <div className="contact-details">
            <motion.div 
              className="contact-detail"
              whileHover={{ scale: 1.05 }}
            >
              <img src={assets.mail_logo} alt="email" />
              <p>rnksamy007@gmail.com</p>
            </motion.div>
            <motion.div 
              className="contact-detail"
              whileHover={{ scale: 1.05 }}
            >
              <img src={assets.call_logo} alt="call" />
              <p>+91 6369606763</p>
            </motion.div>
            <motion.div 
              className="contact-detail"
              whileHover={{ scale: 1.05 }}
            >
              <img src={assets.location_logo} alt="location" />
              <p>Chennai, India</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.form 
          ref={formRef} 
          onSubmit={onSubmit} 
          className="contact-right"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <label>Full Name:</label>
          <input type="text" placeholder='Enter your name' name='name' required />
          
          <label>Email Address:</label>
          <input type="email" placeholder='Enter your email' name='email' required />
          
          <label>Let’s Start the Conversation:</label>
          <textarea name="message" rows="8" placeholder="Tell me about your project, idea, or question..." required></textarea>
          
          <motion.button 
            type='submit' 
            className='contact-submit'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Now
          </motion.button>
        </motion.form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick pauseOnFocusLoss draggable pauseOnHover theme="dark"/>
    </div>
  );
};

export default Contact;
