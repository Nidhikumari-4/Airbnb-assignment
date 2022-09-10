import React from "react";
import { FiGlobe } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="footer_left">
          <a href="#">© 2022 Airbnb, Inc</a>.<a href="#">Privacy</a>.
          <a href="#">Terms</a>.<a href="#">Sitemap</a>.<a href="#">UK</a>.
          <a href="#">Modern Slavery Act</a>.<a href="#">Company details</a>.
          <a href="#">Destinations</a>
        </div>
        <div className="footer_right">
          <div className="footer_globe">
            <FiGlobe />
          </div>
          <a href="">English(GB)</a>
          <a href="">£ GBP</a>
          <a href="">Support & resources</a>
          <div className="footer_ChevronUp">
            <FiChevronUp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
