import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const Footer = () => {
  return (
    <footer>
      <div className="bg-slate-900 pt-2 md:pt-20 pb-4">
        <div className="lg:w-11/12 pb-10 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
          <div className=" font-bold text-3xl">
            <Link href="/">
              <Image
                alt="logo"
                src="/images/logo.jpg"
                width="0"
                height="0"
                sizes="100vw"
                className="w-[10rem] h-auto"
                unoptimized
              />
            </Link>
          </div>

          <div className=" text-white md:px-0 px-5 text-sm">
            <div className=" uppercase font-extrabold">Quick Links</div>

            <Link href="#" className="my-5 block opacity-70">
              About Us
            </Link>
            <Link href="#" className="my-5 block opacity-70">
              Contact Us
            </Link>
            <Link href="#" className="my-5 block opacity-70">
              Projects
            </Link>
          </div>

          <div className="md:px-0 px-5 text-sm text-white">
            <div className="uppercase font-extrabold">Services</div>
            <p className="my-5 block opacity-70">Building Construction</p>
            <p className="my-5 block opacity-70">Architectural Design</p>
            <p className="my-5 block opacity-70">Renovation</p>
          </div>

          <div className="md:px-0 px-5 text-sm mt-5 text-white">
            <p className="my-5 block opacity-70">Civil Engineering</p>
            <p className="my-5 block opacity-70">Interior & Exterior Designs</p>
            {/* <p className="my-5 block opacity-70">Brand Development</p> */}
          </div>
        </div>

        <div className=" max-w-screen-lg text-center mx-auto opacity-10 rounded-sm border border-white"></div>
        <div className="flex flex-col items-start md:flex-row px-5 pt-8 justify-between md:items-center lg:w-11/12">
          <div className="flex items-start mx-auto md:flex-row text-white">
            <Link href="/#" className="w-6 mx-1">
              <FaXTwitter />
            </Link>
            <Link href="#" className="w-6 mx-1">
              <FaInstagram />
            </Link>
            <Link href="#" className="w-6 mx-1">
              <FaFacebookF />
            </Link>
          </div>
          <div className=" text-white  text-sm flex flex-col md:flex-row gap-5 md:gap-10">
            <p className="block opacity-70">Privacy Policy</p>
            <p className="block opacity-70">Terms of Service </p>
            <p className="block opacity-70">Help</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
