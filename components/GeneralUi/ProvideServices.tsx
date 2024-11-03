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
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 
                     animate-fade-in relative">
          We provide the following services
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 
                        w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2 md:p-10">
          {categories.map((category, index) => (
            <div
              key={index}
              className="animate-fade-up"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <Services 
                title={category.title} 
                Icon={category.icon}
                description={`Professional ${category.title.toLowerCase()} equipment and maintenance services`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProvideServices;