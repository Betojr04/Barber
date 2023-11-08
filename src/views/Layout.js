import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Navbar } from "../components/Navbar.js";
// import { Footer } from "../components/Footer.js";
import { LandingPage } from "./LandingPage.js";

const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
};

export default Layout;
