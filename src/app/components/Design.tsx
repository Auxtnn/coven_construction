import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import { IoIosArrowRoundForward } from "react-icons/io";

const Design = () => {
  return (
    <AnimatedSection>
      <section className=" flex flex-col min-h-[680px] py-10">
        <div className="text-blue text-2xl font-[900] md:text-center tracking-wider mt-4">
          Our Designs
        </div>
        <div className="text-zinc-900 text-opacity-80 m-auto md:text-center text-sm tracking-wider max-w-[550px] mt-4 max-md:max-w-full">
          Discover a curated collection of designs that blend innovation with
          functionality. From captivating interior layouts to captivating
          exterior landscapes, our designs embody style and practicality.
        </div>
        <div className="md:px-0 px-3 space-y-8 md:space-x-10 justify-center items-center my-10 md:mx-20 flex md:flex-row flex-col md:space-y-0">
          <AnimatedSection>
            <div className="bg-white shadow-2xl flex min-h-[460px] max-w-[285px] flex-col rounded-sm ">
              <Image
                loading="lazy"
                src="/images/s22.jpg"
                height={90}
                width={90}
                alt="design"
                unoptimized
                className="aspect-square mx-auto object-contain object-center w-full overflow-hidden max-w-[230px]"
              />
              <div className="px-2">
                {/* <h1 className="text-center text-zinc-900 text-sm mt-3">
                  8 fl oz
                </h1>
                <h1 className=" text-center text-zinc-900 text-base font-extrabold mt-3">
                  Small Water Bottle
                </h1>
                <h1 className="text-center text-green-500 text-sm my-3">
                  $350.00
                </h1> */}
                <p className="text-center text-zinc-900 text-sm font-light tracking-wide">
                  Smaller bottles are often preferred for on-the-go use, while
                  larger bottles are suitable for more extended periods without
                  access to a water source.
                </p>

                <button className=" m-auto flex my-4">
                  <Link
                    href="/"
                    className="text-blue py-2 my-auto shadow-xl text-sm border border-blue  gap-2 px-4 md:my-5 flex rounded-full "
                  >
                    <h3>More Details</h3>

                    <IoIosArrowRoundForward className="my-auto text-blue text-xl rounded-[50%] border border-blue" />
                  </Link>
                </button>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-white shadow-2xl flex min-h-[460px] max-w-[285px] flex-col rounded-sm ">
              <Image
                loading="lazy"
                src="/images/s22.jpg"
                height={90}
                width={90}
                alt="design"
                unoptimized
                className="aspect-square mx-auto object-contain object-center w-full overflow-hidden max-w-[230px]"
              />
              <div className="px-2">
                {/* <h1 className="text-center text-zinc-900 text-sm mt-3">
                  16.9 fl oz
                </h1>
                <h1 className=" text-center text-zinc-900 text-base font-extrabold mt-3">
                  Medium Water Bottle
                </h1>
                <h1 className="text-center text-green-500 text-sm my-3">
                  $350.00
                </h1> */}
                <p className="text-center text-zinc-900 text-sm font-light tracking-wide">
                  Smaller bottles are often preferred for on-the-go use, while
                  larger bottles are suitable for more extended periods without
                  access to a water source.
                </p>

                <button className=" m-auto flex my-4">
                  <Link
                    href="/"
                    className="text-blue py-2 my-auto shadow-xl text-sm border border-blue  gap-2 px-4 md:my-5 flex rounded-full "
                  >
                    <h3>More Details</h3>

                    <IoIosArrowRoundForward className="my-auto text-blue text-xl rounded-[50%] border border-blue" />
                  </Link>
                </button>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-white shadow-2xl flex min-h-[460px] max-w-[285px] flex-col rounded-sm ">
              <Image
                loading="lazy"
                src="/images/s22.jpg"
                height={90}
                width={90}
                alt="design"
                unoptimized
                className="aspect-square mx-auto object-contain object-center w-full overflow-hidden max-w-[230px]"
              />
              <div className="px-2">
                {/* <h1 className="text-center text-zinc-900 text-sm mt-3">
                  16.9 fl oz
                </h1>
                <h1 className=" text-center text-zinc-900 text-base font-extrabold mt-3">
                  Medium Water Bottle
                </h1>
                <h1 className="text-center text-green-500 text-sm my-3">
                  $350.00
                </h1> */}
                <p className="text-center text-zinc-900 text-sm font-light tracking-wide">
                  Smaller bottles are often preferred for on-the-go use, while
                  larger bottles are suitable for more extended periods without
                  access to a water source.
                </p>

                <button className=" m-auto flex my-4">
                  <Link
                    href="/"
                    className="text-blue py-2 my-auto shadow-xl text-sm border border-blue  gap-2 px-4 md:my-5 flex rounded-full "
                  >
                    <h3>More Details</h3>

                    <IoIosArrowRoundForward className="my-auto text-blue text-xl rounded-[50%] border border-blue" />
                  </Link>
                </button>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-white shadow-2xl flex min-h-[460px] max-w-[285px] flex-col rounded-sm ">
              <Image
                loading="lazy"
                src="/images/s22.jpg"
                height={90}
                width={90}
                alt="design"
                unoptimized
                className="aspect-square mx-auto object-contain object-center w-full overflow-hidden max-w-[230px]"
              />
              <div className="px-2">
                {/* <h1 className="text-center text-zinc-900 text-sm mt-3">
                  33.8 fl oz
                </h1>
                <h1 className=" text-center text-zinc-900 text-base font-extrabold mt-3">
                  Large Water Bottle
                </h1>
                <h1 className="text-center text-green-500 text-sm my-3">
                  $350.00
                </h1> */}
                <p className="text-center text-zinc-900 text-sm font-light tracking-wide">
                  Smaller bottles are often preferred for on-the-go use, while
                  larger bottles are suitable for more extended periods without
                  access to a water source.
                </p>

                <button className=" m-auto flex my-4">
                  <Link
                    href="/"
                    className="text-blue py-2 my-auto shadow-xl text-sm border border-blue  gap-2 px-4 md:my-5 flex rounded-full "
                  >
                    <h3>More Details</h3>

                    <IoIosArrowRoundForward className="my-auto text-blue text-xl rounded-[50%] border border-blue" />
                  </Link>
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Design;
