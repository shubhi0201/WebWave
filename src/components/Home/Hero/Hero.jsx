import React from "react";
import "./Hero.css";
import MagneticButton from "../Magneticbutton/MagneticButton";
const Hero = () => {
 

  
  return (
    <>
      <div className="Hero">
        <div className="banner">
          <img src="img1.png" alt="" />
        </div>

        <div className="description">Creative Solutions Real Results</div>
      </div>
      <div className="Button"><MagneticButton text=" Get a Quote" /></div>
      
    </>
  );
};

export default Hero;
