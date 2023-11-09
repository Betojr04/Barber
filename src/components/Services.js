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
            <img
              src="/path-to-your-image/icon-haircut.png"
              alt="Classic Haircut"
            />
          </div>
          <h3>Classic Haircut</h3>
          <p>Timeless styles combined with classic barbering techniques.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            {/* Place an icon or image here */}
            <img
              src="/path-to-your-image/icon-haircut.png"
              alt="Classic Haircut"
            />
          </div>
          <h3>Classic Haircut</h3>
          <p>Timeless styles combined with classic barbering techniques.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            {/* Place an icon or image here */}
            <img
              src="/path-to-your-image/icon-haircut.png"
              alt="Classic Haircut"
            />
          </div>
          <h3>Classic Haircut</h3>
          <p>Timeless styles combined with classic barbering techniques.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            {/* Place an icon or image here */}
            <img
              src="/path-to-your-image/icon-haircut.png"
              alt="Classic Haircut"
            />
          </div>
          <h3>Classic Haircut</h3>
          <p>Timeless styles combined with classic barbering techniques.</p>
        </div>
      </div>
    </section>
  );
};
