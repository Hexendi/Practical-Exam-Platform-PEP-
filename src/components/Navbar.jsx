import logo from '../assets/logo.png'; 
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
        <a href="/" className="nav-link"><BiHomeAlt id="icons" />home</a>
        <a href="/exam" className="nav-link"><FaRegNoteSticky id="icons" />exam</a>
        <a href="/notification" className="nav-link"><MdOutlineNotificationsActive id="icons" />notification</a>
      <button className="nav-btn"><IoMdLogIn />login</button>
	</div>
    </nav>
  );
}

export default Navbar;
