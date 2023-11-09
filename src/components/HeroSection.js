import React from "react";
import "../styles/HeroSection.css";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">The Art of Grooming</h1>
        <p className="hero-subtitle">
          Experience the craft of professional barbering.
        </p>
        <div className="hero-cta-group">
          <a href="#scheduling" className="hero-cta">
            Book Appointment
          </a>
          <a href="#services" className="hero-cta-alt">
            View Services
          </a>
        </div>
      </div>
    </section>
  );
};
