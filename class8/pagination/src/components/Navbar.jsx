import { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo">Logo</NavLink>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <ul>
         
         
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
