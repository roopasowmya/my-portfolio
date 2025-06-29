import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">CONTACT</h2>
      <div className="contact-container">
        <div className="contact-left">
          <h3>Drop Me a Message</h3>
          <p>
            I’d love to hear from you! Whether you have a question, a project
            idea, or just want to connect — feel free to reach out.
          </p>
          <div className="contact-info">
            <div className="info-item">
              <div className="icon">
                <FaPhoneAlt />
              </div>
              <span>+91 9989584446</span>
            </div>
            <div className="info-item">
              <div className="icon">
                <FaEnvelope />
              </div>
              <span>kandularoopsowmya@gmail.com</span>
            </div>
            <div className="info-item">
              <div className="icon">
                <FaMapMarkerAlt />
              </div>
              <span>Vishkapatnam, India</span>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <form className="contact-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea rows={5} placeholder="Message" required />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      {/* <footer className="contact-footer">
        <p>2025 – Your Name, All rights reserved</p>
        <div className="social-icons">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaLinkedinIn />
          </a>
          <a href="#">
            <FaBehance />
          </a>
        </div>
      </footer> */}
    </section>
  );
};

export default Contact;
