import React from "react";

import {
  Design,
  Portfolio,
  About,
  Features,
  Contact,
  Footer,
  Navbar,
  HeroSection,
} from "./components/";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Features />
      <Portfolio />
      <Design />
      <Contact />
      <Footer />
    </div>
  );
}
