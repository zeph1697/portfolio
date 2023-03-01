import React from "react";
import "./footer.css";
import { RiFacebookFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        zeph1697
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com" target="_blank">
          <RiFacebookFill />
        </a>
        <a href="https://instagram.com" target="_blank">
          <RiInstagramFill />
        </a>
        <a href="https://twitter.com" target="_blank">
          <RiTwitterFill />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; 2022 zeph1697. All right reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
