import React from "react";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Features from "./components/Service";
import About from "./components/About";
import Portfolio from "./components/Project";
import HeroSection from "./components/HeroSection";
import Design from "./components/Design";
import Number from "./components/Number";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
     
      <About />
      <Features />
      <Portfolio />
      <Number/>
      <Design />
      <Contact />
      <Footer />
    </div>
  );
}
