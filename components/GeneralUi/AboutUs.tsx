"use client";

import Image from "next/image";
import WhyUs from "./subComponent/WhyUs";
import { CalltoAction } from "./Button";

const AboutUs = () => {
  return (
    <div className="flex flex-col  justify-center items-center md:mt-15 bg-blue-950 text-white pb-10">
      <h1 className="text-5xl font-bold   mt-10">About Us</h1>

      <div className="flex md:flex-row flex-col gap-4 mt-6 w-full p-5 bg-gray-100 text-black max-w-7xl mx-auto rounded-lg">
        <div className="w-full md:w-2/3 flex flex-col items-center justify-center">
          <Image
            src="/logo1.png"
            alt=""
            width={1000}
            height={1000}
            className=" object-cover rounded-md mx-auto mt-7 md:mr-10 w-full"
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center p-3 gap-3">
          <h4 className="text-xl font-bold text-left w-full">
            Foretech Kitchen Equipments
          </h4>
          <p className="mb-4 ">
            We are specialized manufacturers and suppliers of commercial kitchen
            and industrial canteen equipment. Foretech Kitchen Equipments is a
            leading provider in the manufacturing of top-quality kitchen and
            food service equipment for a wide range of sectors, including
            industrial kitchens, canteens, hotels, restaurants, resorts,
            hospitals, IT sectors, messes/canteens, marriage halls, clubs,
            educational and professional institutions, and more.
          </p>
          <p>
            We offer fully customizable equipment tailored to the specific needs
            and requirements of our customers, including various sizes, models,
            dimensions, and heights. All of our products are crafted with
            premium materials and are delivered promptly, ensuring the highest
            level of satisfaction for our clients.
          </p>
        </div>
      </div>
      <WhyUs />
      <CalltoAction />
    </div>
  );
};

export default AboutUs;
