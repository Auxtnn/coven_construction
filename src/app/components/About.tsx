import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <div
      className="flex justify-center items-center px-16  max-md:px-5 md:pt-16"
      id="about"
    >
      <div className="mt-8 w-full max-w-[1200px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col mr-0 mx-auto w-[50%] md:order-first order-last mt-6 md:mt-0 max-md:w-full">
            <div className="md:max-w-md w-full mx-2 pr-4">
              <Image
                src="/images/ceo3.jpg"
                alt="image"
                width={200}
                quality={100}
                height={20}
                unoptimized
                className="rounded-bl-full w-full border-blue shadow-xl border-b-8 rounded-br-full"
              />
            </div>
          </div>
          <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
              <div className="md:text-xl text-lg font-bold text-blue max-md:max-w-full">
                Welcome to COVE DESIGN AND CONTRACTING LTD <br />{" "}
                <span className="text-base">(RC: 7270692) </span>
              </div>

              <div className=" gap-5 mt-4 max-md:max-w-full">
                <p className="text-sm">
                  At CDC construction company, we believe that every building
                  tells a story. With over 15years of experience in the
                  construction industry, we have been privileged to be a part of
                  countless stories, turning visions into realities.
                </p>
                <p className="text-sm mt-4">
                  Our mission is simple: to deliver exceptional construction
                  solutions with integrity, innovation, and excellence. From
                  residential projects to commercial developments, we approach
                  each endeavor with a commitment to quality craftsmanship,
                  attention to detail, and client satisfaction.
                </p>

                <p className="mt-2 text-sm leading-6">
                  What sets us apart is our dedicated team of professionals who
                  bring expertise, passion, and a collaborative spirit to every
                  project. We work closely with our clients, architects, and
                  subcontractors to ensure seamless communication and
                  coordination from concept to completion.
                </p>

                <p className="text-sm mt-4">
                  Thank you for considering CDC construction company for your
                  construction needs. We look forward to the opportunity to work
                  with you and to be a part of your next chapter
                </p>
                <div className="text-lg md:text-xl mt-3 leading-10 font-bold text-blue max-md:max-w-full">
                  Engr. Anasiudu David (CEO, C.D.C){" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
