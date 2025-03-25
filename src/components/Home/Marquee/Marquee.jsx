import React from "react";
import "./Marquee.css"; // External CSS

const logos = [
  { id: 1, src: "/img1.png", text: "UI/UX Design" },
  { id: 2, src: "/img3.png", text: "Digital Agency"},
  { id: 3, src: "/img5.png", text: "Web Design" },
  { id: 4, src: "/img3.png", text: "ISO Developer" }
  
  
];

const Marquee = () => {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {/* Duplicating the content to make it seamless */}
        {[...logos,...logos,...logos].map((logo, index) => (
          <div className="marquee-item" key={index}>
            <img src={logo.src} alt={logo.text} className="logo" />
            <div className="logotext"><p className="marque-item-title">{logo.text}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
