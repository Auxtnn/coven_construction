"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import Number from "./Number";

const HeroSection: React.FC = () => {
  const [bgLoaded, setBgLoaded] = useState<boolean>(false);

  useEffect(() => {
    const loadImage = () => {
      const img = new Image();
      img.src = "/images/hero.jpg";
      img.onload = () => {
        setBgLoaded(true);
      };
    };

    // Trigger image loading when component mounts
    loadImage();
  }, []);

  return (
    <div
      className={`relative py-[3.28rem] md:py-[4rem] items-center justify-center ${
        bgLoaded ? "bg-loaded" : ""
      }`}
      style={{
        backgroundImage: bgLoaded ? "url('/images/hero.jpg')" : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="container lg:w-11/12">
        <h1 className="text-[2rem] uppercase md:text-[2.5rem] font-black mb-2 max-w-[33rem] tracking-[0.04rem] leading-[2rem] md:leading-[3rem]">
          Building Dreams
          <span className="text-blue font-black "> Shaping Futures</span>
        </h1>
        <p className="text-[1.125rem] mb-6 mt-4 max-w-[30.3125rem] tracking-[0.04rem]">
          Your trusted partner in building construction, architectural designs,
          interior & exterior designs, renovation and civil engineering
          projects.
        </p>

        <div className="my-[2.5rem] md:flex space-y-8 md:space-y-0 md:space-x-10">
          <button className="mr-10">
            <Link
              href="/#services"
              className="text-white font-black bg-blue rounded py-3 px-6 hover:text-white hover:bg-blue hover:border-blue border"
            >
              Discover Our Services
            </Link>
          </button>
          {/* <button>
            <Link
              href="/#design"
              className="text-blue font-black bg-transparent rounded py-3 px-6 hover:text-white hover:bg-blue hover:border-blue border-2 border-blue"
            >
              View Our Designs
            </Link>
          </button> */}
        </div>
      </div>
      <Number />
    </div>
  );
};

export default HeroSection;
