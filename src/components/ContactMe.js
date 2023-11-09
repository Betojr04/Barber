import React from "react";
import { Link } from "react-router-dom";
import "../styles/ContactMe.css";

export const ContactMe = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <p>Have any questions? We're here to help.</p>
        <form className="contact-form">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="6"
            required
          ></textarea>
          <button type="submit" className="contact-submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
