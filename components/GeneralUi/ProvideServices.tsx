"use client";
import Services from "./subComponent/services";
import {
  Hotel,
  Utensils,
  Hospital,
  School,
  Factory,
  Briefcase,
} from "lucide-react";

const categories = [
  { title: "Hotels", icon: Hotel },
  { title: "Restaurants", icon: Utensils },
  { title: "Hospitals", icon: Hospital },
  { title: "Educational Institutions", icon: School },
  { title: "Industrial Canteens", icon: Factory },
  { title: "Other Industries", icon: Briefcase },
];

const ProvideServices = () => {
  return (
    <div className="mt-10 p-5">
      <h1 className="text-3xl font-bold text-center">
        We provide the following services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-2 md:p-10">
        {categories.map((category, index) => (
          <Services key={index} title={category.title} Icon={category.icon} />
        ))}
      </div>
    </div>
  );
};

export default ProvideServices;
