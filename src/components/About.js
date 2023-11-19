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
            Alek Herrera is a licensed barber who has been cutting hair for over
            a year and getting all of his clients looking their best.
          </p>
          <p>
            From the classic straight razor shave to a sharp fade, you and Alek
            can figure out the haircut that best fits you.
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
