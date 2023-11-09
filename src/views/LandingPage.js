import React from "react";
import { HeroSection } from "../components/HeroSection";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { ContactMe } from "../components/ContactMe";
import { SchedSection } from "../components/SchedSection";

export const LandingPage = () => {
  return (
    <main>
      <HeroSection />
      <Services />
      <About />
      <ContactMe />
      <SchedSection />
    </main>
  );
};
