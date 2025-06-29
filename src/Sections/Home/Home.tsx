import React from "react";
import "./Home.css";
import profileImage from "../../assets/headerimage.jpg";

const Home: React.FC = () => (
  <section id="home" className="home">
    <div className="home-content">
      <span className="home-intro">I'm a </span>
      <h1>
        FULL STACK
        <br />
        SOFTWARE
        <br />
        DEVELOPER<span className="blue-dot">.</span>
      </h1>
      {/* <a href="#projects" className="projects-button">
        Previous Projects
      </a> */}
    </div>
    <div className="home-image">
      <img src={profileImage} alt="My profile" />
    </div>
  </section>
);

export default Home;
