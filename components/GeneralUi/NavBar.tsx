"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const contactButtonClasses =
    "bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-2 rounded-3xl font-medium hover:from-yellow-500 hover:to-orange-600 transition duration-300";

  return (
    <nav className="bg-white shadow-md">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              Logo
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-800">
              Home
            </Link>
            <Link
              href="/products"
              className="text-gray-600 hover:text-gray-800"
            >
              Our Products
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-800">
              Blog
            </Link>
            <Link href="/contact" className={contactButtonClasses}>
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button and Contact Us button */}
          <div className="md:hidden flex items-center space-x-2">
            <Link href="/contact" className={`${contactButtonClasses} text-sm`}>
              Contact Us
            </Link>
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block text-gray-600 hover:text-gray-800 py-2"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block text-gray-600 hover:text-gray-800 py-2"
            >
              Our Products
            </Link>
            <Link
              href="/blog"
              className="block text-gray-600 hover:text-gray-800 py-2"
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
