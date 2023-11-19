import React from "react";
import { Link } from "react-router-dom";
import "../styles/Services.css";

export const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-header">
        <h2>My Services</h2>
        <p>
          Discover a new look with my premium grooming services tailored just
          for you.
        </p>
      </div>
      <div className="services-list">
        {/* Service Card 1 */}
        <div className="service-card">
          <div className="service-icon">
            {/* Place an icon or image here */}
            {/* <img
              src="/path-to-your-image/icon-haircut.png"
              alt="Classic Haircut"
            /> */}
          </div>
          <h3>Fade</h3>
          <p>Your traditional fade to keep you looking fresh.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            {/* Place an icon or image here */}
            {/* <img
              src="/path-to-your-image/icon-haircut.png"
              alt="Classic Haircut"
            /> */}
          </div>
          <h3>Eye brows</h3>
          <p>Keep your eyebrows looking fresh.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            {/* Place an icon or image here */}
            {/* <img
              src="/path-to-your-image/icon-haircut.png"
              alt="Classic Haircut"
            /> */}
          </div>
          <h3>Beard Lineup</h3>
          <p>Keep your beard cleaned up to get all the love you deserve.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            {/* Place an icon or image here */}
            {/* <img
              src="/path-to-your-image/icon-haircut.png"
              alt="Classic Haircut"
            /> */}
          </div>
          <h3>Stylish Style</h3>
          <p>
            A nice sort of style to keep you looking fresh no matter the
            occasion.
          </p>
        </div>
      </div>
    </section>
  );
};
