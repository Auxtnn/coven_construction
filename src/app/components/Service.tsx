"use client";

import React, { useState } from "react";
import { TbInputSearch } from "react-icons/tb";
import { MdOutlineAdsClick } from "react-icons/md";
import { SiConvertio } from "react-icons/si";
import { BsGraphUpArrow } from "react-icons/bs";
import { LuConstruction } from "react-icons/lu";
import { MdDesignServices } from "react-icons/md";
import { HiBuildingStorefront } from "react-icons/hi2";
import { FaTools } from "react-icons/fa";
import { FaBroom } from "react-icons/fa";
const Features = () => {
  //track hovering on card

  const features = [
    {
      icon: <HiBuildingStorefront />,
      title: "Building Construction",
      text: "Constructing structures from start to finish",
    },
    {
      icon: <MdDesignServices />,
      title: "Architectural Design",
      text: "Creative planning and visualization of building structures",
    },
    {
      icon: <FaTools />,
      title: "Renovation",
      text: "Enhancing existing structures, improving value.",
    },
    {
      icon: <LuConstruction />,
      title: "Civil Engineering",
      text: "Designing & Constructing infrastructure projects.",
    },
    {
      icon: <FaBroom />,
      title: "Interior & Exterior Designs",
      text: "Beautifying indoor and outdoor spaces, maintaining comfort.",
    },
  ];

  interface FeaturesCardProps {
    icon: React.ReactNode;
    title: string;
    text: string;
  }

  const FeaturesCard: React.FC<FeaturesCardProps> = ({ icon, title, text }) => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
      setIsHover(true);
    };

    const handleMouseLeave = () => {
      setIsHover(false);
    };
    return (
      <div
        className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`${
            isHover ? "bg-blue" : ""
          } shadow-lg  flex grow flex-col w-full py-10 rounded-2xl items-start max-md:mt-7 px-2`}
        >
          <div className={`text-3xl  ${isHover ? "text-white" : "text-blue"}`}>
            {icon}
          </div>
          <div
            className={`${
              isHover ? "text-white" : ""
            } text-base font-bold tracking-wider self-stretch mt-4`}
          >
            {title}
          </div>
          <div
            className={`${
              isHover ? "text-white" : ""
            } text-sm leading-6 capitalize self-stretch mt-2`}
          >
            {text}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="flex flex-col py-4 px-5 mx-auto max-w-screen-xl sm:py-16 lg:px-6 lg:w-11/12"
      id="services"
    >
      <div className="text-blue text-2xl font-[900] md:text-center tracking-wider mt-4">
        Our Services
      </div>
      <div className=" text-opacity-80 m-auto md:text-center text-sm tracking-wider max-w-[550px] mt-4 max-md:max-w-full">
        Discover excellence in construction with us. From concept to completion,
        we offer top-notch services tailored to your needs. Explore our
        offerings below
      </div>

      <div className="self-stretch w-full mt-16 px- max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          {features.map((item, key) => (
            <FeaturesCard
              key={key}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
