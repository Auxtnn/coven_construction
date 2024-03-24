import React from "react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="bg-blue px-8 md:py-16 py-4 lg:px-16">
      <div className="max-w-7xl mx-auto lg:flex lg:justify-between lg:items-center">
        <div className="text-white text-2xl md:text-3xl font-bold tracking-widest lg:w-1/2 lg:text-left lg:mb-0 mb-4">
          Promote Your Brand With Us, Guarantee Your Success
        </div>
        <div className="lg:w-1/2 lg:text-right md:my-0 my-8">
          <Link
            href="#"
            className="text-blue text-base font-bold whitespace-nowrap shadow-sm bg-white px-8 py-3 rounded-xl"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
