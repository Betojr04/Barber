import React from "react";
import Link from "react-router-dom";
import "../styles/About.css";

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About Alek Herrera</h2>
          <p>
            Established in the heart of the city, The Gentleman's Cut has been
            providing discerning men with the finest grooming experiences for
            over a decade. Our skilled barbers are artisans of their craft,
            dedicated to the details that make every cut a work of art.
          </p>
          <p>
            From the classic straight razor shave to contemporary hair designs,
            we ensure each client leaves not just looking their best, but
            feeling their best. Step into our world, where tradition meets
            modern luxury, and grooming is more than a service—it's an
            experience.
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyYmVyfGVufDB8MXwwfHx8MA%3D%3D"
            alt="Inside The Gentleman's Cut"
          />
        </div>
      </div>
    </section>
  );
};
