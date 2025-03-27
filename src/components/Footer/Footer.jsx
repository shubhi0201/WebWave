import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaDribbble,
  FaPaperPlane,
} from "react-icons/fa";
import "./Footer.css";
import { div } from "framer-motion/client";

const Footer = () => {
  return (
    <div className="footer-main">
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Where to Find Us */}
            <div className="footer-section">
              <h5>Where To Find Us</h5>
              <div className="footer-section-div">
                <img src="icon1.svg" alt="" className="icon" />
                <div className="footer-section-subtitle">
                  <span>17504 Carlton Cuevas Rd</span> Gulfport, MS, 39503
                </div>
              </div>

              <div className="footer-section-div">
                <img src="icon2.svg" alt="" className="icon" />
                <div className="footer-section-subtitle">
                  <span>17504 Carlton Cuevas Rd</span> Gulfport, MS, 39503
                </div>
              </div>
              <div className="footer-section-div">
                <img src="icon3.svg" alt="" className="icon" />
                <div className="footer-section-subtitle">
                  <span>17504 Carlton Cuevas Rd</span> Gulfport, MS, 39503
                </div>
              </div>
            </div>

            {/* Newsletter & Quick Links */}
            <div className="footer-section">
              <h5>Newsletter</h5>
              <div className="newsletter">
                <input type="text" placeholder="Enter Your Email" />
                <button>
                  <FaPaperPlane />
                </button>
              </div>

              <h6>Quick Links</h6>
              <div className="quick-links">
                <div>
                  {" "}
                  <ul>
                    {" "}
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Team</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    {" "}
                    <li>
                      <a href="#">Team Single</a>
                    </li>
                    <li>
                      <a href="#">Service Single</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Service Single</a>
                    </li>
                  </ul>
                </div>
                <div>
                <ul>
                    {" "}
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Blog Single</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                 
                </div>
              </div>
            </div>

            {/* Call Center */}
            <div className="footer-sections">
              <h5>Call Center</h5>
              <p className="call-number">1-800-555-500</p>
              <p className="call-text">and get a free estimate</p>

              {/* Social Icons */}
              <div className="social-icons">
              <div className="icons">  <a href="#">
                 FB
                </a></div>
               
                <div className="icons">  <a href="#">
                  TR
                </a></div>
                <div className="icons"> <a href="#">
                  DW
                </a></div>
                <div className="icons">  <a href="#">
                  BE
                </a></div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="footer-bottom">
            <img src="images/logo.svg" alt="logo" className="footer-logo" />
            <p>
              Developed and designed by <a href="#">Potenza Global Solutions</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
