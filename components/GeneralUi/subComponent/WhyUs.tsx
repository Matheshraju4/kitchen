"use client";
import { Award, Smile, Users, ThumbsUp } from "lucide-react";

import Services2 from "./ServicesCLone";

const services = [
  {
    title: "12 Years Experience",
    description: "We have a clientele which covers almost all the industries.",
    icon: Award, // Store the reference to the Lucide component
  },
  {
    title: "Fast, Friendly Service",
    description: "We promise you faster delivery and friendly service",
    icon: Smile, // Store the reference to the Lucide component
  },
  {
    title: "Expert Technicians",
    description: "Our expert team will ensure everything on place",
    icon: Users, // Store the reference to the Lucide component
  },
  {
    title: "100% Satisfaction",
    description: "Customer Satisfaction is the priority in our service",
    icon: ThumbsUp, // Store the reference to the Lucide component
  },
];

const WhyUs = () => {
  return (
    <div className="mt-6 p-4 md:p-10 ">
      <h1 className="text-3xl font-bold text-center pb-3 ">Why Choose Us</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-2 md:p-10 md:pb-5">
        {services.map((category, index) => (
          <Services2
            key={index}
            title={category.title}
            Icon={category.icon}
            description={category.description}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
