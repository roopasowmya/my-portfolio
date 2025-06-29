import React from "react";
import "./Home.css";

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
  </section>
);

export default Home;
