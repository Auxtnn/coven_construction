import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { designItems } from "../../../constants";
import AnimatedSection from "./AnimatedSection";

interface DesignItem {
  imagePath: string;
  title: string;
  description: string;
}

const Design: React.FC = () => {
  return (
    <AnimatedSection>
      <div className="relative py-8 md:py-6" id="project">
        <div className="text-blue px-5 text-2xl font-[900] md:text-center tracking-wider mt-4">
          Our Featured Building Plans
        </div>
        <div className=" px-5 text-opacity-80 m-auto md:text-center text-sm tracking-wider max-w-[550px] mt-2 md:mt-4 max-md:max-w-full">
          Discover a curated collection of interior & exterior designs that
          blend innovation with functionality.
        </div>

        <div className="container mx-auto flex flex-col md:flex-row items-center w-full md:px-4 lg:w-11/12">
          {designItems.map((item: DesignItem, index: number) => (
            <div
              key={index}
              className="w-full justify-center md:justify-start lg:w-1/2 md:p-6 py-5"
            >
              <div className="shadow-lg p-2 w-full">
                <Image
                  alt="client"
                  src={item.imagePath}
                  quality={100}
                  height={314}
                  width={478}
                  unoptimized
                  className="w-full"
                />

                <h6 className="my-4 text-[1rem] text-center font-black">
                  {item.title}
                </h6>
                <h6 className="my-2 text-sm text-center">{item.description}</h6>
                <div className="flex justify-center my-8 md:my-0">
                  {" "}
                  {/* Adjusted this div */}
                  <Link
                    href="/"
                    className="text-blue flex items-center gap-2 px-4 py-2 md:my-5 rounded-full border border-blue shadow-xl text-sm"
                  >
                    <h3>View plan</h3>
                    <IoIosArrowRoundForward className="text-blue text-xl rounded-[50%] border border-blue" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center my-4">
          {" "}
          {/* Adjusted this div */}
          <Link
            href="/"
            className="text-white bg-blue flex items-center gap-2 px-4 py-2 md:my-5 rounded-full border border-blue shadow-xl text-sm"
          >
            <h3>See more</h3>
            <IoIosArrowRoundForward className="text-white text-xl rounded-[50%] border border-white" />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Design;
