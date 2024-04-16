"use client";

import React, { useState } from "react";
import Link from "next/link";

const Contact: React.FC = () => {
  return (
    <div className="bg-blue px-8 md:py-16 py-4 lg:px-16" id="contact">
      <div className="max-w-7xl mx-auto lg:flex lg:justify-between lg:items-center">
        <div className="text-white text-2xl md:text-3xl text-center font-bold tracking-widest lg:w-1/2 lg:text-left lg:mb-0 mb-4">
          Elevate Your Projects with Us, Ensure Your Success
        </div>
        <div className="lg:w-1/2 lg:text-right text-center md:my-0 my-8 mx-auto">
          <Link
            href="https://wa.link/530cj2"
            target="_blank"
            className="font-semibold bg-transparent shadow-lg text-blue bg-white rounded outline-none border-blue border py-2 px-4 hover:text-white hover:bg-slate-950"
          >
            Contact us
          </Link>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Contact;
