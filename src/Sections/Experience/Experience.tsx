import React from "react";
import "./Experience.css";

const timeline = [
  {
    title: "High School",
    subtitle: "Sri Gayatri Junior College,Vishakapatnam",
    date: "SEP 2018 - JUN 2019",
    side: "left",
  },
  {
    title: "Bachelor of Technology(ECE)",
    subtitle: "Dr.Lankapalli Bullaya College,Vishakapatnam",
    date: "JUL 2019 - JUL 2023",
    side: "right",
  },
  {
    title: "Associate Software Developer",
    subtitle: "Modlix,Banglore",
    date: "SEP 2023 - SEP 2024",
    side: "left",
  },
  {
    title: "SDE-1",
    subtitle: "Modlix,Banglore",
    date: "SEP 2024 - PRESENT",
    side: "right",
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title">EDUCATION - EXPERIENCE</h2>
      <div className="timeline">
        {timeline.map((item, idx) => (
          <div key={idx} className={`timeline-item ${item.side}`}>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p className="timeline-subtitle">{item.subtitle}</p>
            </div>
            <div className="timeline-circle">
              <span>{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
