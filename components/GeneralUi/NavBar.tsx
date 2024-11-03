"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import ContactUs from "./ContactUs";
import DropDown from "./subComponent/DropDown";

interface Products {
  id: number;
  name: string;
  image: string;
}

export default function Navbar({ rawProducts }: { rawProducts: Products[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const contactButtonClasses =
    "bg-gray-900  text-white px-8 py-2 rounded-3xl font-medium text-md hover:from-yellow-500 hover:to-orange-600 transition duration-300";

  const navbarClasses = `fixed w-full top-0 z-50 transition-all duration-300 ${
    isScrolled
      ? "bg-white shadow-lg backdrop-blur-sm bg-opacity-90"
      : "bg-white shadow-md"
  }`;

  const linkClasses =
    "text-gray-700 hover:text-orange-500 transition-colors duration-300 font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-orange-500 after:left-0 after:bottom-[-4px] after:transition-all hover:after:w-full";

  return (
    <nav className={navbarClasses}>
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            {/* <Link href="/" className="text-xl font-bold text-gray-800 ">
              Foretech Equipments
            </Link> */}
            <Image src={"/logo2.png"} alt="logo" width={150} height={50} />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={linkClasses}>
              Home
            </Link>
            <DropDown string="Our Products" rawProducts={rawProducts} />
            <Link href="#" className={linkClasses}>
              Blog
            </Link>
            <Link href="#" className={linkClasses}>
              Services
            </Link>
            <ContactUs
              callString="Contact Us"
              className={contactButtonClasses}
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ContactUs
              callString="Contact Us"
              className={contactButtonClasses}
            />
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-orange-500 transition-colors duration-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X
                  size={28}
                  className="transform transition-transform duration-300"
                />
              ) : (
                <Menu
                  size={28}
                  className="transform transition-transform duration-300"
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full"
        }`}
      >
        <div className="px-4 pt-2 pb-3 space-y-2">
          <Link
            href="/"
            className="block text-gray-700 hover:text-orange-500 py-2 transition-colors duration-300"
          >
            Home
          </Link>
          <DropDown string="Our Products" rawProducts={rawProducts} />
          <Link
            href="#"
            className="block text-gray-700 hover:text-orange-500 py-2 transition-colors duration-300"
          >
            Blog
          </Link>
          <Link
            href="#"
            className="block text-gray-700 hover:text-orange-500 py-2 transition-colors duration-300"
          >
            Services
          </Link>
        </div>
      </div>
    </nav>
  );
}
