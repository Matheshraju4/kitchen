"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Services = ({
  title,
  Icon,
  description,
}: {
  title: string;
  Icon: any;
  description?: string;
}) => {
  return (
    <Card className="group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 to-red-500/0 
                    group-hover:from-red-500/5 group-hover:to-red-500/10 
                    transition-all duration-300 rounded-lg"></div>
      
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 
                    border-transparent group-hover:border-yellow-200 
                    rounded-tl-lg transition-all duration-300 opacity-0 
                    group-hover:opacity-100"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 
                    border-transparent group-hover:border-yellow-200 
                    rounded-br-lg transition-all duration-300 opacity-0 
                    group-hover:opacity-100"></div>

      <CardHeader className="flex flex-row items-center space-x-4 relative z-10">
        <div className="relative">
          {/* Icon container with animation */}
          <div className="h-12 w-12 rounded-full bg-yellow-500 flex items-center justify-center p-2 
                        text-white transition-all duration-300 
                        group-hover:bg-yellow-500 group-hover:scale-110">
            <Icon className="w-8 h-8 transition-transform duration-300" />
          </div>
          
          {/* Animated ring */}
          <div className="absolute -inset-2 rounded-full border-2 border-transparent
                        group-hover:border-yellow-200 group-hover:scale-125 
                        transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
        </div>
        
        <h2 className="text-xl font-bold transition-colors duration-300 
                     group-hover:text-black">
          {title}
        </h2>
      </CardHeader>

      <CardContent className="relative z-10">
        <p className="text-gray-600 transition-colors duration-300 
                   group-hover:text-gray-700">
          {description ? (
            description
          ) : (
            <>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit atque
              voluptatem quos. Animi accusantium maxime perspiciatis ipsa
              pariatur, sed laborum, eaque excepturi molestiae corporis placeat
              ullam voluptas repellendus hic et.
            </>
          )}
        </p>
      </CardContent>
    </Card>
  );
};

export default Services;