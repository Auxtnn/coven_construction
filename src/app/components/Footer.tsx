import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { FaEnvelope } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer: React.FC = () => {
  const getFullYear = (): number => {
    const currentYear: number = new Date().getFullYear();
    return currentYear;
  };
  return (
    <footer>
      <div className="bg-slate-900 pt-2 md:pt-20 pb-4">
        <div className=" pb-10 pt-10 md:pt-5 text-gray-800 sm:grid md:grid-cols-3 sm:grid-cols-2 place-items-center">
          <div className="md:px-0 px-5 text-sm text-white">
            <div className=" font-extrabold">Services</div>
            <p className="my-5 block opacity-70">Building Construction</p>
            <p className="my-5 block opacity-70">Architectural Design</p>
            <p className="my-5 block opacity-70">Renovation</p>
            <p className="my-5 block opacity-70">Civil Engineering</p>
            <p className="my-5 block opacity-70">Interior & Exterior Designs</p>
          </div>
          <div className=" text-white md:px-0 px-5 text-sm">
            <div className=" font-extrabold">Useful Links</div>

            <Link href="#" passHref={true} className="my-5 block opacity-70">
              Services
            </Link>
            <Link href="#" passHref={true} className="my-5 block opacity-70">
              About us
            </Link>
            <Link href="#" passHref={true} className="my-5 block opacity-70">
              Projects
            </Link>
            <Link href="#" passHref={true} className="my-5 block opacity-70">
              Contact Us
            </Link>
            <Link
              href="tel:+2348103075739"
              target="_blank"
              passHref={true}
              className="my-5 block opacity-70"
            >
              0810 307 5739
            </Link>
          </div>
          <div className=" text-white md:px-0 px-5 text-sm">
            <div className=" font-extrabold">Designs</div>

            <Link href="#" passHref={true} className="my-5 block opacity-70">
              Bungalow
            </Link>
            <Link href="#" passHref={true} className="my-5 block opacity-70">
              Duplex
            </Link>
            <Link href="#" passHref={true} className="my-5 block opacity-70">
              Flat
            </Link>
            <p className="my-5 block opacity-70">Non-residential</p>
            <p className="my-5 block opacity-70">Renovation</p>

            <Link
              href="#"
              passHref={true}
              className="my-5 block opacity-70"
            ></Link>
          </div>

          {/* <div className=" text-white md:px-0 px-5 text-sm">
            <div className=" font-extrabold">Company</div>
            <Link href="#" passHref={true} className="my-5 block opacity-70">
              Terms of service
            </Link>
            <Link href="#" passHref={true} className="my-5 block opacity-70">
              Legal
            </Link>
            <Link href="#" passHref={true} className="my-5 block opacity-70">
              Privacy Policy
            </Link>
            <Link
              href="https://wa.link/530cj2"
              target="_blank"
              passHref={true}
              className="my-5 block opacity-70"
            >
              0810 307 5739
            </Link>
            <Link
              href="mailto:cdcdesignandconstruction@gmail.com"
              passHref={true}
              className="my-5 block opacity-70"
            >
              Email
            </Link>
          </div> */}
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-white text-center text-2xl font-extrabold tracking-wider">
            Cove Design & Contracting LTD.
          </h1>

          <p className="text-center text-white text-sm font-normal leading-relaxed">
            © {getFullYear()} CDC. All rights reserved.{" "}
          </p>
          <div className="flex items-start mx-auto md:flex-row text-white">
            <Link
              href="https://www.facebook.com/cdcconstruction.ng?mibextid=LQQJ4d"
              passHref={true}
              className="w-6 mx-1"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="https://www.instagram.com/cdc_construction_company_ltd?igsh=MWs4MHBuZWUycGFlZA%3D%3D&utm_source=qr"
              passHref={true}
              className="w-6 mx-1"
            >
              <FaInstagram />
            </Link>
            <Link
              href="mailto:cdcdesignandconstruction@gmail.com"
              passHref={true}
              className="w-6 mx-1"
            >
              <FaEnvelope />
            </Link>
          </div>
        </div>
        <div className="fixed right-[1rem] bottom-10 border-2 rounded-full border-green-700 p-2 ">
          <Link href="https://wa.link/530cj2" target="_blank">
            <IoLogoWhatsapp className="animate-pulse text-green-700 rounded-full p-1 md:text-5xl text-6xl bg-emerald-100" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
