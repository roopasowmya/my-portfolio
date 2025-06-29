import React from "react";
import ProfileImage from "../../assets/9700_4_04.jpg";
import "./About.css";

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image-wrapper">
          <img src={ProfileImage} alt="Profile" className="about-image" />
          <div className="about-image-border"></div>
        </div>
        <div className="about-content">
          <h2>ABOUT ME</h2>
          <p>
            I'm a Full Stack Developer passionate about building scalable web
            applications. I previously worked on a no-code platform,
            contributing to both the front-end with React + TypeScript and the
            back-end using Reactive Programming in Java. I'm currently looking
            for new opportunities to grow and contribute to impactful tech
            projects.
          </p>
          <div className="about-buttons">
            <button
              className="hire-button"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection)
                  contactSection.scrollIntoView({ behavior: "smooth" });
              }}
            >
              HIRE ME
            </button>
            <button className="resume-button">
              {" "}
              <a
                href="/resume.pdf"
                download
                style={{ color: "inherit", textDecoration: "none" }}
              >
                RESUME
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
