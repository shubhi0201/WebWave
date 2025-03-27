import React from "react";
import Hero from "../Hero/Hero";
import "./Home.css";
import AboutUs from "../Aboutus/AboutUs";
import Marquee from "../Marquee/Marquee";

const Home = () => {
  return (
    <div>
     <Hero/>
     <div className="Infinite"> Infinite</div>
     <AboutUs/>
     <Marquee/>
     
    </div>
    
  );
};

export default Home;
