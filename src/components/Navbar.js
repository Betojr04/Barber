import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Alek Herrera
        </Link>
        <div className="navbar-menu">
          <a href="#services" className="navbar-link">
            Services
          </a>
          <a href="#about" className="navbar-link">
            About
          </a>
          <a href="#contact" className="navbar-link">
            Contact
          </a>
          <a to="#href" className="navbar-link navbar-cta">
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
};
