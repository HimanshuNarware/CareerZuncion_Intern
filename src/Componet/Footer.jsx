import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaStar } from "react-icons/fa6";
import "./Footer.css";
import { IoStar } from "react-icons/io5";
import { Link } from "react-router-dom";

const iconstyle = {
  height: "100%",
  width: "100%",
  borderRadius: "50%",
  height: "25px",
  width: "25px",
  color:"#892BE2"
};
function Footer() {
  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <div className="container">
          <div className="row" id="row">
            <div
              className="footer-col"
              id="logoRow"
              style={{ paddingTop: "0" }}
            >
              <h4 className="logo" id="logo" style={{ paddingLeft: "0" ,color:"#892BE2"}}>
                {" "}
                CareerZunction
              </h4>
              <p style={{ color: "#bbbbbb" }}>
                Career junction is a dynamic platform connecting eager students
                with valuable internship opportunity.
              </p>
            </div>
            <div className="footer-col">
              <h4>Documentation</h4>
              <ul>
                <li style={{ paddingLeft: "0" }}>
                  <a
                    className="doc-pera doc-perag"
                    onClick={() => {
                      window.open(
                        "https://opensource.com/resources/what-open-source"
                      );
                    }}
                  >
                    What is open-source ?
                  </a>
                </li>
                <li>
                  <a
                    className="doc-pera doc-perag"
                    onClick={() => {
                      window.open(
                        "https://opensource.guide/how-to-contribute/"
                      );
                    }}
                  >
                    What is git and github ?
                  </a>
                </li>
                <li>
                  <a
                    className="doc-pera doc-perag"
                    onClick={() => {
                      window.open(
                        "https://docs.github.com/en/get-started/using-git/about-git"
                      );
                    }}
                  >
                    How to start contributing to open source ?
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>License</h4>
              <ul>
                <li>
                  <a href="#">MIT License</a>
                </li>
                <li>
                  <a href="#">Code of Conduct</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="https://github.com/HimanshuNarware" target="_blank">
                  <FaGithub style={iconstyle} />
                </a>
                <a
                  href="https://www.linkedin.com/in/HimanshuNarware/"
                  target="_blank"
                >
                  <FaLinkedin style={iconstyle} />
                </a>
                <a href="https://twitter.com/N_Himanshu_" target="_blank">
                  <FaTwitter style={iconstyle} />
                </a>
                <a href="https://github.com/HimanshuNarware/CareerZunction_Intern" target="_blank">
                  <IoStar style={iconstyle} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
