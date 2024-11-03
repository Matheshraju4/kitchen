"use client";
import React from "react";
import SingleClient from "./subComponent/SingleClient";

const Clients = () => {
  const clients = Array.from({ length: 10 }, (_, index) => ({
    name: `Client ${index + 1}`,
  }));

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Trusted by world's most innovative teams
        </h2>

        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>

          {/* Single row infinite scroll */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll whitespace-nowrap">
              {/* First set of logos */}
              <div className="flex space-x-16 pr-16">
                {clients.map((_, index) => (
                  <div key={index} className="flex-shrink-0 w-40">
                    <SingleClient location={index + 1} />
                  </div>
                ))}
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex space-x-16 pr-16">
                {clients.map((_, index) => (
                  <div key={`duplicate-${index}`} className="flex-shrink-0 w-40">
                    <SingleClient location={index + 1} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;