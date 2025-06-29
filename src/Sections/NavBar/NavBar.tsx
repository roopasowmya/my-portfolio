import React from "react";
import "./NavBar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <a href="#home" className="active">
        HOME
      </a>
      <a href="#about">ABOUT ME</a>
      <a href="#projects">PORTFOLIO</a>
      <a href="#experience">EXPERIENCE</a>
      <a href="#contact" className="contact-button">
        CONTACT
      </a>
    </nav>
  );
};

export default Navbar;
