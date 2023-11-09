import React from "react";
import "../styles/SchedSection.css";

export const SchedSection = () => {
  return (
    <section className="scheduling" id="scheduling">
      <div className="scheduling-container">
        <h2>Book Your Appointment</h2>
        <p>
          Select your preferred time and services directly through our online
          booking system.
        </p>
        <div className="scheduling-iframe-container">
          <iframe
            src="https://squareup.com/appointments/book/tkk840zwm1wp35/L1808ZT848X9K/services?buttonTextColor=ffffff&color=006aff"
            frameborder="0"
            title="Booking"
            allowfullscreen
            className="scheduling-iframe"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
