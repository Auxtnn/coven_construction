"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { projectItems } from "../../../constants";
import AnimatedSection from "./AnimatedSection";

interface ProjectItem {
  imagePath: string;
  title: string;
  description: string;
}

const Portfolio: React.FC = () => {
  const [startIndex, setStartIndex] = useState<number>(0);
  const [numVisible, setNumVisible] = useState<number>(4);
  const [currentSlide, setCurrentSlide] = useState<number>(1);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setNumVisible(1);
    } else {
      setNumVisible(4);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const updateCurrentSlide = (index: number) => {
    setCurrentSlide(Math.floor(index / numVisible) + 1);
  };

  const showPrev = () => {
    if (startIndex === 0) {
      setCurrentSlide(1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
    setStartIndex((prevIndex) => (prevIndex === 0 ? prevIndex : prevIndex - 1));
    updateCurrentSlide(startIndex - 1);
  };

  const showNext = () => {
    if (startIndex >= projectItems.length - numVisible) {
      setCurrentSlide(Math.ceil(projectItems.length / numVisible));
    } else {
      setCurrentSlide(currentSlide + 1);
    }
    setStartIndex((prevIndex) =>
      prevIndex >= projectItems.length - numVisible ? prevIndex : prevIndex + 1
    );
    updateCurrentSlide(startIndex + 1);
  };

  const visibleProjectItems: ProjectItem[] = projectItems.slice(
    startIndex,
    startIndex + numVisible
  );

  return (
    <AnimatedSection>
      <div className="relative py-8 md:py-6" id="project">
        <div className="text-blue px-5 text-2xl font-[900] md:text-center tracking-wider mt-4">
          Our Projects
        </div>
        <div className=" px-5 text-opacity-80 m-auto md:text-center text-sm tracking-wider max-w-[550px] mt-2 md:mt-4 max-md:max-w-full">
          Explore our portfolio of completed projects that showcase our
          expertise and dedication to excellence in construction and design
        </div>

        <div className="container mx-auto flex flex-col md:flex-row items-center w-full md:px-4 lg:w-11/12">
          {visibleProjectItems.map((item, index) => (
            <div
              key={index}
              className="w-full justify-center  md:justify-start lg:w-11/12 md:p-6 py-5"
            >
              <div className="shadow-lg  p-2 w-full">
                <Image
                  alt="client"
                  src={item.imagePath}
                  quality={100}
                  height={314}
                  width={478}
                  unoptimized
                  className="object-center object-cover w-full h-full"
                />

                <h6 className="my-4 text-[1rem] font-black">{item.title}</h6>
                <h6 className="my-4 text-sm">{item.description}</h6>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto text-center md:px-20 px-10">
          <div className="flex items-center justify-center gap-5 sm:bottom-0">
            <div className="cursor-pointer">
              <button
                onClick={showPrev}
                className="flex h-[30px] w-[30px] items-center justify-center rounded-full border  border-blue bg-white hover:bg-deep-red"
              >
                <GrLinkPrevious className="text-blue hover:text-white" />
              </button>
            </div>
            <div className="next-arrow cursor-pointer">
              <button
                onClick={showNext}
                className="d flex h-[30px] w-[30px] items-center justify-center rounded-full border border-blue bg-white hover:bg-deep-red"
              >
                <GrLinkNext className="text-blue hover:text-white " />
              </button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Portfolio;
