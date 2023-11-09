import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Link to="/" className="footer-brand">
          Alek Herrera -Your Favorite Barber
        </Link>
        <div className="footer-links">
          <Link to="#services" className="footer-link">
            Services
          </Link>
          <Link to="#about" className="footer-link">
            About
          </Link>
          <Link to="#contact" className="footer-link">
            Contact
          </Link>
        </div>
        <div className="footer-cta">
          <Link to="#booking" className="footer-booking">
            Book Now
          </Link>
        </div>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Created By{" "}
          <a href="https://betowebdev-six.vercel.app/">Alberto Valtierra</a> Jr.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};
