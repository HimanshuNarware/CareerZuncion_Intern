/** @format */

import React, { useState } from 'react';
import './style.css';
import { GiCrossMark } from 'react-icons/gi';
import { FaGithub, FaLaptop, FaHome, FaRegSun } from 'react-icons/fa';
import { BiHome, BiEdit } from "react-icons/bi";
import { RiContactsLine } from "react-icons/ri";
import { BsFiletypeDoc } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate=useNavigate();
  function handleRedirect(){
    navigate("/");
  }
  let [slidebarClick, setSlidebarClick] = useState(false);

  // function slidebarClicked(e){
  // // slidebarClick=slidebarClick?false:true;
  // // slidebarClick=slidebarClick?false:true;
  // // if(slidebarClick==false).?

  // console.log(slidebarClick)

  // }

  const toggleDarkMode = () => setSlidebarClick(!slidebarClick);

  // </div>
  return (
    <>
      <nav className="Navbar">
        <div 
          className="nav-icons"
          style={{ cursor: 'pointer',fontSize:'2em' }}
          onClick={toggleDarkMode}>
          {slidebarClick ? <GiCrossMark /> : <FaRegSun />}
        </div>
        <div className="left-sight" onClick={handleRedirect} style={{textAlign:'center',fontSize:'2em',cursor:'pointer'}} 
        >
          CareerZunction</div>
        <div className="right-sight">
          <div className="cart-item">
            <Link to="/" className='link'><span className='icon'><BiHome /> </span>Home</Link>
          </div>
          <div className="cart-item">
            <Link to="/intern" className='link'> <span className='icon'><FaLaptop /></span> Internships</Link>
          </div>
          <div className="cart-item">
            <Link to="/docs" className='link'><span className='icon'><BiEdit /> </span>Documentation</Link>
          </div>
          <div className="cart-item">
            <Link to="https://github.com/HimanshuNarware/CareerZunction_Intern" className='link'><span className='icon'><FaGithub /></span> GitHub</Link>
          </div>
          <div className="cart-item">
            <Link to="/Contact" className='link'><span className='icon'><RiContactsLine /></span> Contact Us</Link>
          </div>
        </div>
      </nav>
  
        <div className="sidebar ">
          <div className="sidebar-options">
            {
              <Link to="/">
                <FaHome />
              </Link>
            }
          </div>
          <div className="sidebar-options">
            {
              <Link to="/intern">
                <FaLaptop />
              </Link>
            }
          </div>
          <div className="sidebar-options">
            {
              <Link to="/docs">
                <BsFiletypeDoc />
              </Link>
            }
          </div>
          <div className="sidebar-options">
            {
              <Link to="https://github.com/HimanshuNarware/CareerZunction_Intern" target="_blank">
                <FaGithub />
              </Link>
            }
          </div>
          <div className="sidebar-options">
            {
              <Link to="/Contact" target="_blank">
              </Link>
            }
          </div>
        </div>

       
    
    </>
  );
}

export default Navbar;