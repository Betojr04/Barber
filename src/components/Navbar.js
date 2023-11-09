import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          The Gentleman's Cut
        </Link>
        <div className="navbar-menu">
          <Link to="#services" className="navbar-link">
            Services
          </Link>
          <Link to="#about" className="navbar-link">
            About
          </Link>
          <Link to="#contact" className="navbar-link">
            Contact
          </Link>
          <Link to="#booking" className="navbar-link navbar-cta">
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
};
