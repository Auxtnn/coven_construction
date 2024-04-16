"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TfiClose } from "react-icons/tfi";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import AnimatedSection from "./AnimatedSection";

interface DropdownItem {
  label: string;
  link: string;
}

interface Dropdown {
  label: string;
  items: DropdownItem[];
}

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [bungalowDropdownOpen, setBungalowDropdownOpen] =
    useState<boolean>(false);
  const [duplexDropdownOpen, setDuplexDropdownOpen] = useState<boolean>(false);
  const [flatsDropdownOpen, setFlatsDropdownOpen] = useState<boolean>(false);
  const [dropdownHovered, setDropdownHovered] = useState<string | null>(null);

  // Close the menu if clicked outside the menu
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const menu = document.querySelector(".mobile-menu");
      if (menu && !menu.contains(e.target as Node)) {
        closeMobileMenu();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleDropdownHover = (label: string) => {
    setDropdownHovered(label);
  };

  const handleDropdownLeave = () => {
    setDropdownHovered(null);
  };

  const toggleBungalowDropdown = () => {
    setBungalowDropdownOpen(!bungalowDropdownOpen);
  };

  const toggleDuplexDropdown = () => {
    setDuplexDropdownOpen(!duplexDropdownOpen);
  };

  const toggleFlatsDropdown = () => {
    setFlatsDropdownOpen(!flatsDropdownOpen);
  };

  const handleDropdownClick = (dropdownLabel: string) => {
    // Close all dropdowns except the clicked one
    if (dropdownLabel === "Bungalows") {
      setBungalowDropdownOpen(!bungalowDropdownOpen);
      setDuplexDropdownOpen(false);
      setFlatsDropdownOpen(false);
    } else if (dropdownLabel === "Duplex") {
      setDuplexDropdownOpen(!duplexDropdownOpen);
      setBungalowDropdownOpen(false);
      setFlatsDropdownOpen(false);
    } else if (dropdownLabel === "Flats") {
      setFlatsDropdownOpen(!flatsDropdownOpen);
      setBungalowDropdownOpen(false);
      setDuplexDropdownOpen(false);
    }
  };

  const handleDropdownItemClick = () => {
    // Close mobile menu when a dropdown item is clicked
    closeMobileMenu();

    // Close the dropdown of the clicked item
    setBungalowDropdownOpen(false);
    setDuplexDropdownOpen(false);
    setFlatsDropdownOpen(false);
  };

  const dropdowns: Dropdown[] = [
    {
      label: "Bungalows",
      items: [
        { label: "2 Bedroom Bungalow", link: "/bungalows/2-bedroom-bungalow" },
        { label: "3 Bedroom Bungalow", link: "/bungalows/3-bedroom-bungalow" },
        { label: "4 Bedroom Bungalow", link: "/bungalows/4-bedroom-bungalow" },
        { label: "5 Bedroom Bungalow", link: "/bungalows/5-bedroom-bungalow" },
        { label: "6+ Bedroom Bungalow", link: "/bungalows/6-bedroom-bungalow" },
      ],
    },
    {
      label: "Duplex",
      items: [
        { label: "2 Bedroom Duplex", link: "/duplex/2-bedroom-duplex" },
        { label: "3 Bedroom Duplex", link: "/duplex/3-bedroom-duplex" },
        { label: "4 Bedroom Duplex", link: "/duplex/4-bedroom-duplex" },
        { label: "5 Bedroom Duplex", link: "/duplex/5-bedroom-duplex" },
        { label: "6+ Bedroom Duplex", link: "/duplex/6-bedroom-duplex" },
      ],
    },
    {
      label: "Flats",
      items: [
        { label: "2 Bedroom Flat", link: "/flat/2-bedroom-flat" },
        { label: "3 Bedroom Flat", link: "/flat/3-bedroom-flat" },
        { label: "4 Bedroom Flat", link: "/flat/4-bedroom-flat" },
        { label: "5 Bedroom Flat", link: "/flat/5-bedroom-flat" },
        { label: "6+ Bedroom Flat", link: "/flat/6-bedroom-flat" },
      ],
    },
  ];

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

              {dropdowns.map((dropdown, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => handleDropdownHover(dropdown.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <span className="group inline-block relative text-gray-950 font-semibold transition-colors duration-300 cursor-pointer">
                    {dropdown.label}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                  </span>
                  {dropdown.label === dropdownHovered && (
                    <div className="absolute w-48 z-10 bg-white py-2 shadow-lg rounded-md">
                      <div className="flex flex-col">
                        {dropdown.items.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.link}
                            className="inline text-[.95rem] pl-2 py-2 text-gray-800 hover:bg-gray-100"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

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
                    className="block font-semibold mb-4 hover:text-blue"
                    onClick={closeMobileMenu}
                  >
                    About
                  </Link>
                  <Link
                    href="/#services"
                    className="block font-semibold mb-4 hover:text-blue"
                    onClick={closeMobileMenu}
                  >
                    Services
                  </Link>
                  <Link
                    href="/#project"
                    className="block mb-4 font-semibold hover:text-blue"
                    onClick={closeMobileMenu}
                  >
                    Projects
                  </Link>

                  {dropdowns.map((dropdown, index) => (
                    <div key={index} className="mb-4">
                      <span
                        onClick={() => handleDropdownClick(dropdown.label)}
                        className="block mb-2 font-semibold text-gray-800 cursor-pointer"
                      >
                        {dropdown.label}
                      </span>
                      {(dropdown.label === "Bungalows" &&
                        bungalowDropdownOpen) ||
                      (dropdown.label === "Duplex" && duplexDropdownOpen) ||
                      (dropdown.label === "Flats" && flatsDropdownOpen) ? (
                        <div>
                          {dropdown.items.map((item, idx) => (
                            <Link
                              key={idx}
                              href={item.link}
                              className="block mb-2 hover:text-blue "
                              // onClick={closeMobileMenu}
                              onClick={handleDropdownItemClick}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))}
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
