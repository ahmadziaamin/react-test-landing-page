import React from "react";
import "./Footer.css";
import logo from "../../assets/images/footerlogo.png";
import appstore from "../../assets/images/appstoredown.png";
import playstore from "../../assets/images/googleplay.png";
import twitter from "../../assets/images/x.png";
import linkedin from "../../assets/images/linkdin.png";
import facebook from "../../assets/images/facebook.png";

function Footer() {
  return (
    <footer className="footer global_theme">
      <div className="footer-top">
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p className="footer-text">
            Designed to bring you closer to the Quran<br />
            listen, learn, & reflect anytime, anywhere.
          </p>
       
        </div>

        <div className="footer-right">
          <h4>Get the app</h4>
          <img src={appstore} alt="App Store" className="store-btn" />
          <img src={playstore} alt="Play Store" className="store-btn" />
        </div>
      </div>
         <ul className="footer-links">
            <li>Community</li>
            <li>Blog</li>
            <li>Support Center</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms of services</li>
          </ul>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p>© 2025 The Clear Quran Audiobook. All rights reserved.</p>
        <div className="social-icons">
          <img src={twitter} alt="X" />
          <img src={linkedin} alt="LinkedIn" />
          <img src={facebook} alt="Facebook" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
