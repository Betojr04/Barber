import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <navbar>
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/">
            <button>Alek Herrera</button>
          </Link>
        </div>
        <div className="navbar-tagline">Quality Haircut</div>
      </div>
    </navbar>
  );
};
