import React from "react";
import "./Skills.css";

const skills = [
  { name: "HTML / CSS", desc: "Semantic, Responsive, Styled UI", percent: 95 },
  { name: "JavaScript", desc: "ES6+, DOM, Events, APIs", percent: 90 },
  {
    name: "React + TypeScript",
    percent: 80,
    desc: "Component-based UI, Hooks, Type Safety",
  },
  {
    name: "Spring Boot",
    desc: "REST APIs, Microservices (Beginner)",
    percent: 60,
  },
  { name: "Java", desc: "OOP, Streams, Collections (Fresher)", percent: 70 },
  {
    name: "Reactive Programming",
    desc: "Project Reactor, Mono/Flux",
    percent: 55,
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">MY SKILLS</h2>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div key={i} className="skill-circle">
            <div className="outer">
              <div
                className="inner"
                style={{
                  background: `conic-gradient(#5d3ce2 ${
                    skill.percent * 3.6
                  }deg, #222 0deg)`,
                }}
              >
                <div className="number">{skill.percent}%</div>
              </div>
            </div>
            <div className="skill-label">
              <strong>{skill.name}</strong>
              <p>{skill.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
