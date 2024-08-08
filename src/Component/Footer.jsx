import React from 'react';
import { FaGithub, FaLinkedin, FaStar, FaTwitter, FaFacebook, FaInstagram, FaFileAlt, FaLock, FaGavel, FaCode } from 'react-icons/fa';
import favicon from "../image/footer/favicon.png";
import img from "../image/footer/footer-qr.jpg";
import './Footer.css';
import { FaXTwitter } from "react-icons/fa6";


function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-section">
          <h3 className="footer-title">
            <img src={favicon} alt="logo" className="footer-favicon" />
            CareerZunction
          </h3>
          <p className="footer-pera">
            CareerZunction is a dynamic platform connecting eager students with valuable internship opportunities.
          </p>
        </div>
        <div className="footer-section footer-section-links">
          <div className="footer-subsection">
            <h4 className="footer-heading">
              Documentation
            </h4>
            <ul className="footer-links">
              <li onClick={() => window.open('https://opensource.com/resources/what-open-source')}>
                <FaCode className="footer-link-icon" />
                <span>What is Open-Source</span>
              </li>
              <li onClick={() => window.open('https://opensource.guide/how-to-contribute/')}>
                <FaGithub className="footer-link-icon" />
                <span>What is Git and GitHub</span>
              </li>
              <li onClick={() => window.open('https://docs.github.com/en/get-started/using-git/about-git')}>
                <FaCode className="footer-link-icon" />
                <span>How to start contributing to Open-Source</span>
              </li>
            </ul>
          </div>
          <div className="footer-subsection">
            <h4 className="footer-heading">
               Legal
            </h4>
            <ul className="footer-links">
              <li><span><a href="/privacypolicy"><FaLock className="footer-link-icon" /> Privacy Policy</a></span></li>
              <li><span><a href="/terms"><FaGavel className="footer-link-icon" /> Terms and Conditions</a></span></li>
              <li><span><a href="/licensing"><FaCode className="footer-link-icon" /> MIT License</a></span></li>
              <li><span><a href="/codeofconduct"><FaFileAlt className="footer-link-icon" /> Code of Conduct</a></span></li>
            </ul>
          </div>
          <div className="footer-subsection">
            <h4 className="footer-heading">Get in touch</h4>
            <div className="footer-social-icons">
              <a href="https://github.com/HimanshuNarware" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/HimanshuNarware/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/N_Himanshu_" target="_blank" rel="noopener noreferrer">
                <FaXTwitter />
              </a>
            </div>
          </div>
          <div className="footer-subsection footer-qr-section">
            <img src={img} id="qr" alt="QR Code" className="footer-qr" />
            <div className="footer-rate-us">
              <a href="https://github.com/HimanshuNarware/CareerZunction_Intern" target="_blank" rel="noopener noreferrer" className="footer-star-icon">
                <div className="rate-us"><FaStar /> Rate us!</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copy">
        &copy; {currentYear} All rights reserved. Made with 💜 by CareerZunction.
      </div>
    </footer>
  );
}

export default Footer;
