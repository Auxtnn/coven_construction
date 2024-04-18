import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import AnimatedSection from "./AnimatedSection";
import { getRoomByType } from "../../../sanity/lib/query";
import type { RoomsType } from "../../../types";

const Design: React.FC = async () => {
  const bungalow: RoomsType[] = await getRoomByType("2-bedroom-duplex");

  return (
    <div className=" py-8 md:py-6" id="design">
      <div className="text-blue px-5 text-2xl font-[900] md:text-center tracking-wider mt-4">
        Our Featured Building Plans
      </div>
      <div className="text-zinc-900 px-5 text-opacity-80 m-auto md:text-center text-sm tracking-wider max-w-[550px] mt-2 md:mt-4 max-md:max-w-full">
        Discover a curated collection of interior & exterior designs that blend
        innovation with functionality.
      </div>

      <div className="container place-items-center mx-auto gap-8 pt-6 grid md:grid-cols-3 grid-cols-1 w-full md:px-4 lg:w-11/12">
        {bungalow.map((bungalow: any) => (
          <div
            className="md:max-w-sm w-full mx-2 rounded overflow-hidden shadow-lg"
            key={bungalow._id}
          >
            {/* {bungalow.images.map((image: any, index: number) => (
              <Image
                className="w-full"
                width={300}
                height={300}
                key={index}
                src={image.url} // Assuming 'url' is the field containing the image URL
                alt={image.alt}
              />
            ))} */}
            {/* <div className="px-2 py-4">
              <div className="font-bold text-base mb-2">{bungalow.name}</div>
            </div> */}
          </div>
        ))}
      </div>

      {/* <div className="flex justify-center">
        {" "}
      
        <Link
          href="/"
          className="text-white bg-blue flex items-center gap-2 px-4 py-2 md:my-5 rounded-full border border-blue shadow-xl text-sm"
        >
          <h3>See more</h3>
          <IoIosArrowRoundForward className="text-white text-xl rounded-[50%] border" />
        </Link>
      </div> */}
    </div>
  );
};

export default Design;
