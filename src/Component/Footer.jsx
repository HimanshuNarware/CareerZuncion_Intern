/** @format */

import React from 'react';
import { FaGithub, FaLinkedin, FaStar, FaTwitter } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import favicon from "../image/footer/favicon.png";
import img from "../image/footer/footer-qr.jpg";
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-section">
          <h3 className="footer-title">
            <img src={favicon} alt="logo" className='footer-favicon' />
            CareerZunction
          </h3>
          <p className="footer-pera">
            CareerZunction is a dynamic platform connecting eager students with valuable internship opportunities.
          </p>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Documentation</h4>
          <ul className="footer-links">
            <li onClick={() => window.open('https://opensource.com/resources/what-open-source')}>
              What is Open-Source
            </li>
            <li onClick={() => window.open('https://opensource.guide/how-to-contribute/')}>
              What is Git and GitHub
            </li>
            <li onClick={() => window.open('https://docs.github.com/en/get-started/using-git/about-git')}>
              How to start contributing to Open-Source
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">License</h4>
          <ul className="footer-links">
            <li>MIT License</li>
            <li>Code of Conduct</li>
          </ul>
          <h4 className="footer-heading">Get in touch</h4>
          <div className="footer-social-icons">
            <a href="https://github.com/HimanshuNarware" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/HimanshuNarware/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/N_Himanshu_" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <img src={img} id='qr' alt="QR Code" className="footer-qr"/>
          <div className="footer-social-icons">
            <a herf="https://github.com/HimanshuNarware/CareerZunction_Intern" target='_blank' rel="noopener noreferrer" >
              <FaStar  /> 
            </a><div className='rate-us'>Rate us!</div>
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
