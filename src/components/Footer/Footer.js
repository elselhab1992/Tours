import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiOutlineInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footer-contact">
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="social-icons">
        <AiFillFacebook className="social-icon" />
        <AiFillTwitterCircle className="social-icon" />
        <AiOutlineInstagram className="social-icon" />
      </div>
      <div className="copyrights">copyrights@mo_tours2023</div>
    </footer>
  );
};

export default Footer;
