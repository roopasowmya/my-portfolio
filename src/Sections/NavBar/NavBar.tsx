import React, { useEffect, useState } from "react";
import "./NavBar.css";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "skills", "contact"];
      const scrollPos = window.scrollY + 200;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPos) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <a href="#home" className={activeSection === "home" ? "active" : ""}>
        HOME
      </a>
      <a href="#about" className={activeSection === "about" ? "active" : ""}>
        ABOUT ME
      </a>
      <a
        href="#experience"
        className={activeSection === "experience" ? "active" : ""}
      >
        EXPERIENCE
      </a>
      <a href="#skills" className={activeSection === "skills" ? "active" : ""}>
        MY SKILLS
      </a>
      <a href="#contact" className="contact-button">
        CONTACT
      </a>
    </nav>
  );
};

export default Navbar;
