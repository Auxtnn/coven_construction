"use client";

import React from "react";
import Slider from "react-slick";
import AnimatedSection from "./AnimatedSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { projectItems } from "../../../constants";
import CarouselSettings from "../../../types";

const Portfolio: React.FC = () => {
  const settings: CarouselSettings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <AnimatedSection>
      <div className="py-4 max-w-screen-2xl lg:pb-10 mx-auto " id="project">
        <div className="text-blue px-5 text-2xl font-[900] md:text-center tracking-wider mt-4">
          Our Projects
        </div>
        <div className=" px-5 text-opacity-80 m-auto md:text-center text-sm tracking-wider max-w-[550px] mt-2 md:mt-4 max-md:max-w-full">
          Explore our portfolio of completed projects that showcase our
          expertise and dedication to excellence in construction and design
        </div>
        <div className="w-full overflow-hidden mt-10">
          <Slider {...settings} className="mx-auto">
            {projectItems.map((item, index) => (
              <div key={index} className="px-2">
                <Image
                  src={item.imagePath}
                  alt={`Project ${index + 1}`}
                  width={80}
                  height={50}
                  unoptimized
                  className="w-full rounded-2xl "
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Portfolio;
