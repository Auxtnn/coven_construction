"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TfiClose } from "react-icons/tfi";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import AnimatedSection from "./AnimatedSection";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close the menu if clicked outside the menu
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        !!(e.target as HTMLElement).closest(".mobile-menu")
      ) {
        closeMobileMenu();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className=" bg-white w-full sticky top-0 z-10">
      <nav className="border shadow-xl bg-white mx-auto py-2">
        <AnimatedSection>
          <div className="container mx-auto flex justify-between items-center relative">
            <div className="text-blue font-bold text-3xl">
              <Link href="/">
                <Image
                  alt="logo"
                  src="/images/logo.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[10rem] h-auto"
                  unoptimized
                />
              </Link>
            </div>
            <div className="hidden md:flex items-center md:space-x-5 lg:space-x-10 ">
              <Link
                href="/#about"
                className="group inline-block relative text-gray-950 font-semibold transition-colors duration-300"
              >
                About
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
              <Link
                href="/#services"
                className="group inline-block relative text-gray-950 font-semibold transition-colors duration-300"
              >
                Services
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>

              <Link
                href="/#project"
                className="group inline-block relative text-gray-950 font-semibold transition-colors duration-300"
              >
                Projects
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
              <Link
                href="/#"
                className="group inline-block relative text-gray-950 font-semibold transition-colors duration-300"
              >
                Bungalows
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
              <Link
                href="/#"
                className="group inline-block relative text-gray-950 font-semibold transition-colors duration-300"
              >
                Duplex
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>

              <Link
                href="#"
                className="group inline-block relative text-gray-950 font-semibold transition-colors duration-300"
              >
                Flat
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>

              <Link
                href="/#contact"
                className="font-semibold bg-transparent shadow-lg text-blue rounded border-blue border py-2 px-4 hover:text-white hover:bg-blue"
              >
                Contact Us
              </Link>
            </div>
            <div className="md:hidden">
              {isMobileMenuOpen ? (
                <TfiClose
                  className="text-2xl text-blue cursor-pointer"
                  onClick={toggleMobileMenu}
                />
              ) : (
                <HiOutlineBars3BottomRight
                  className="text-3xl text-blue cursor-pointer"
                  onClick={toggleMobileMenu}
                />
              )}
            </div>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden fixed top-19 right-0 w-64 h-full bg-white z-50 mobile-menu"
              >
                <div className="text-center py-8">
                  <Link
                    href="/#about"
                    className="block mb-4 hover:text-blue"
                    onClick={closeMobileMenu}
                  >
                    About
                  </Link>
                  <Link
                    href="/#services"
                    className="block mb-4 hover:text-blue"
                    onClick={closeMobileMenu}
                  >
                    Services
                  </Link>
                  <Link
                    href="/#project"
                    className="block mb-4 hover:text-blue"
                    onClick={closeMobileMenu}
                  >
                    Our Projects
                  </Link>
                  <Link
                    href="/#"
                    className="block mb-4 hover:text-blue"
                    onClick={closeMobileMenu}
                  >
                    Bungalows
                  </Link>
                  <Link
                    href="/#"
                    className="block mb-4 hover:text-blue"
                    onClick={closeMobileMenu}
                  >
                    Duplex
                  </Link>
                  <Link
                    href="/#"
                    className="block mb-4 hover:text-blue"
                    onClick={closeMobileMenu}
                  >
                    Flat
                  </Link>
                  <Link
                    href="/#contact"
                    className=" bg-transparent text-blue rounded border-blue border py-2 px-4 hover:text-white hover:bg-blue"
                    onClick={closeMobileMenu}
                  >
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </AnimatedSection>
      </nav>
    </header>
  );
};

export default Navbar;
