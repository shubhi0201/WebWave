import "./Aboutus.css";
import MagneticButton from "../Magneticbutton/MagneticButton";
import Countrun from "../countrun/Countrun";
const AboutUs = () => {
  return (
    <div className="about">
      <div className="aboutdata">
        <div className="sub-title">
          <div className="about1">
            <div className="image">
              <img src="img3.png" alt="" />
            </div>
            <div className="aboutus"> ABOUT US</div>
          </div>
          <div className="title">Your experience is everything to us</div>
        </div>
        <div className="subtitle">
          <div className="image2">
            <img src="img4.jpg" alt="" />
          </div>
          <div className="subtitle2">
            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </div>
            <div className="Button2">
              <MagneticButton text=" About Us" />
            </div>
          </div>
        </div>
        <div className="incresediv">
        <div className="count">
            
           <div><Countrun target={240} data-speed={2000} /><span>+</span></div> 
           <div className="count-title">Business Peoples</div>
            
        </div>
        <div className="count">
            
            <div><Countrun target={100} data-speed={1000} /><span>%</span></div> 
            <div className="count-title">Customer Satisfaction</div>
             
         </div>
        </div>
      </div>
      <div className="aboutimage">
        <img src="img2.jpg" alt="" />
      </div>
      
    </div>
  );
};

export default AboutUs;
