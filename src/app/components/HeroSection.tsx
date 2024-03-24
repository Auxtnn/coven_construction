import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="">
      <div className="flex-col bg-blue overflow-hidden self-stretch relative flex min-h-[300px] w-full items-center pt-12 px-16 max-md:max-w-full max-md:px-5">
        <div className="relative w-full max-w-[1226px] mt-12 px-px max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[46%] max-md:w-full max-md:ml-0">
              <div className="relative flex flex-col mt-14 items-start max-md:max-w-full max-md:mt-10">
                <h1 className="text-white text-4xl font-extrabold tracking-widest max-md:max-w-full max-md:text-3xl">
                  Your Amazing Online Shopping Mall
                </h1>
                <div className="text-white text-base tracking-wider self-stretch mt-4 max-md:max-w-full">
                  Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et veit interdum, ac aliquet odio mattis.
                </div>
                <Link
                  href="#"
                  className="justify-center items-stretch shadow-sm bg-teal-950 hover:bg-teal-900 flex gap-2.5 mt-10 px-6 py-4 rounded-2xl max-md:px-5"
                >
                  <FaShoppingBasket className="text-white text-2xl font-bold grow whitespace-nowrap" />
                  <div className="text-white text-base font-bold grow whitespace-nowrap">
                    Shop Now
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[54%] ml-5 max-md:w-full max-md:ml-0">
              <Image
                loading="lazy"
                width={500}
                height={400}
                unoptimized
                alt="image"
                src="/images/4.jpg"
                className="aspect-[1.36] object-contain border-bottom-radius-[20rem] object-center w-full overflow-hidden grow max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;