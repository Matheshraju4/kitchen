"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ContactUs from "./ContactUs";

const images = [
  "/placeholder.svg?height=1080&width=1920&text=Image+1",
  "/placeholder.svg?height=1080&width=1920&text=Image+2",
  "/placeholder.svg?height=1080&width=1920&text=Image+3",
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const imageArray = [
    "/sample4.jpg",
    "/sample2.jpg",
    "/sample3.jpg",
    "/sample.jpg",
  ];

  useEffect(() => {
    // Scroll effect
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrollPosition = window.scrollY;
        backgroundRef.current.style.transform = `translateY(${
          scrollPosition * 0.5
        }px)`;
      }
    };

    // Image rotation
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 2000); // Change image every 2 seconds

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(imageInterval); // Clear interval on component unmount
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Scrollable background image */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          height: "150%",
          top: "-25%",
        }}
      >
        {imageArray.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={`Hero background ${index + 1}`}
            width={1920}
            height={1080}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            priority={index === 0}
          />
        ))}
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex min-h-screen items-center bg-black/50">
        <div className="container mx-auto px-4 md:px-16">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
              Premium Industrial Kitchen Equipment Setup for Commercial
              Business.
            </h1>
            <p className="max-w-[600px] text-lg text-gray-200 md:text-xl">
              Upgrade your commercial kitchen with our top-tier equipment and
              expert installation. We deliver customized solutions to streamline
              your food preparation and service.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/catergory"
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
              >
                Explore Now
              </Link>
              <ContactUs
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white bg-opacity-20 px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-opacity-30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                callString="Request Quote"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
