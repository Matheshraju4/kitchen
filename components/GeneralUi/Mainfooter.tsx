"use client";
import { Contact } from "lucide-react";
import Link from "next/link";
import ContactUs from "./ContactUs";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-12 px-4 md:px-6">
      {/* Main Footer Content */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-start max-w-7xl">
        {/* Company Info */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Foretech Equipments</h2>
          <div className="space-y-2 text-gray-300">
            <p className="text-sm">16/275,Athipet Kuppam,Vanagaram Road</p>
            <p className="text-sm">Chennai,TamilNadu,600058</p>
            <p className="text-sm hover:text-yellow-400 transition-colors">
              <span className="font-semibold">Phone:</span> 7373050573
            </p>
            <p className="text-sm hover:text-yellow-400 transition-colors">
              <span className="font-semibold">Email:</span>{" "}
              sales@foretechequipments.com
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <nav className="flex flex-col gap-2">
            <Link
              href="/"
              className="text-sm text-gray-300 hover:text-yellow-400 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-300 hover:text-yellow-400 transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-sm text-gray-300 hover:text-yellow-400 transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              href="/category"
              className="text-sm text-gray-300 hover:text-yellow-400 transition-colors duration-200"
            >
              Products
            </Link>
          </nav>
        </div>

        {/* Contact Section */}
        <div className="mt-8 md:mt-0">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
            Get in Touch
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto mt-12 pt-6 border-t border-gray-700 max-w-7xl">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-2 sm:mb-0">
            © {new Date().getFullYear()} Foretech Equipments. All rights
            reserved.
          </p>
          <p className="text-sm text-gray-400">
            Developed by{" "}
            <a
              href="https://Zeyone.com"
              className="text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              ZeyOne
            </a>
          </p>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 opacity-50"></div>
    </footer>
  );
}
