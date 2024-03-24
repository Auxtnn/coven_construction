"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";
import { TfiClose } from "react-icons/tfi";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import AnimatedSection from "./AnimatedSection";
import Image from "next/image";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close the menu if clicked outside the menu
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isMobileMenuOpen && !e.target.closest(".mobile-menu")) {
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
      <nav className="border shadow-xl bg-white mx-auto ">
        <AnimatedSection>
          <div className="container mx-auto py-4 flex justify-between items-center relative">
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
            <div className="hidden md:flex items-center space-x-16 pr-2">
              <Link href="/#home" className="hover:text-blue">
                Home
              </Link>

              <Link href="/#about" className="hover:text-blue">
                About
              </Link>
              <Link href="/#service" className="hover:text-blue">
                Service
              </Link>
              <Link href="/#contact" className="hover:text-blue">
                Projects
              </Link>
              <Link href="/#contact" className="hover:text-blue">
                Designs
              </Link>

              <Link
                href="/#contact"
                className=" bg-blue text-white rounded-3xl border-blue border py-1 px-4 hover:bg-blue"
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
                className="md:hidden fixed top-16 right-0 w-64 h-full bg-white z-50 mobile-menu"
              >
                <div className="text-center py-8">
                  <Link
                    href="/#home"
                    className="block mb-4 hover:text-blue-600"
                    onClick={closeMobileMenu}
                  >
                    Home
                  </Link>
                  <Link
                    href="/#about"
                    className="block mb-4 hover:text-blue"
                    onClick={closeMobileMenu}
                  >
                    About
                  </Link>
                  <Link
                    href="/#service"
                    className="block mb-4 hover:text-blue"
                    onClick={closeMobileMenu}
                  >
                    Service
                  </Link>
                  <Link
                    href="/#service"
                    className="block mb-4 hover:text-blue"
                    onClick={closeMobileMenu}
                  >
                    Projects
                  </Link>
                  <Link
                    href="/#service"
                    className="block mb-4 hover:text-blue"
                    onClick={closeMobileMenu}
                  >
                    Designs
                  </Link>

                  <Link
                    href="/#contact"
                    className=" bg-blue text-white rounded-3xl border-blue border py-1 px-4 hover:bg-blue"
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
