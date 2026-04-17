import logoDark from '../assets/logo.png'; 
import logoLight from '../assets/logo0.png';
import { useEffect, useState } from 'react';
import { TbSun, TbMoon } from 'react-icons/tb';
import { Link } from 'react-router-dom'; 
import { FaRegNoteSticky } from "react-icons/fa6";
import { BiHomeAlt } from "react-icons/bi";
import { IoMdLogIn } from "react-icons/io";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";
function Navbar() {

   const { isLight, toggleTheme } = useTheme();
	
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <div className="logo-img">
	   <img src={isLight ? logoLight : logoDark} alt="PEP logo" />
        </div>
      </div>
	<div className="nav-links">
        <Link to="/" className="nav-link"><BiHomeAlt id="icons" />home</Link>
        <Link to="/exam" className="nav-link"><FaRegNoteSticky id="icons" />exam</Link>
        <Link to="/notification" className="nav-link"><MdOutlineNotificationsActive id="icons" />notification</Link> 
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          title="toggle theme"
        >
          {isLight
            ? <TbMoon size={18} />
            : <TbSun size={18} />
          }
        </button>        
      <Link to="/login">
      <button className="nav-btn"><IoMdLogIn />login</button>
      </Link>
	</div>
    </nav>
  );
}

export default Navbar;
