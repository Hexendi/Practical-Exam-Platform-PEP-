import logo from '../assets/logo.png'; 
import { Link } from 'react-router-dom'; 
import { FaRegNoteSticky } from "react-icons/fa6";
import { BiHomeAlt } from "react-icons/bi";
import { IoMdLogIn } from "react-icons/io";
import { MdOutlineNotificationsActive } from "react-icons/md";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <div className="logo-img">
          <img src={logo} alt="PEP logo" />
        </div>
      </div>
	<div className="nav-links">
        <Link to="/" className="nav-link"><BiHomeAlt id="icons" />home</Link>
        <Link to="/exam" className="nav-link"><FaRegNoteSticky id="icons" />exam</Link>
        <Link to="/notification" className="nav-link"><MdOutlineNotificationsActive id="icons" />notification</Link>
      <Link to="/login">
      <button className="nav-btn"><IoMdLogIn />login</button>
      </Link>
	</div>
    </nav>
  );
}

export default Navbar;
