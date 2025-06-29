import React from "react";
import Home from "./Sections/Home/Home";
import About from "./Sections/About/About";
import Contact from "./Sections/Contact/Contact";
import "./styles/global.css";
import Navbar from "./Sections/NavBar/NavBar";
import Experience from "./Sections/Experience/Experience";
import Skills from "./Sections/Skills/Skills";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Skills />
      {/* <Projects /> */}
      <Contact />
    </>
  );
};

export default App;
