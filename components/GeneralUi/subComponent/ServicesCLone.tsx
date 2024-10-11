"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Services2 = ({
  title,
  Icon,
  description,
}: {
  title: string;
  Icon: string | any;
  description?: string;
}) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center space-x-4 ">
        <div className="h-12 w-12 rounded-full bg-yellow-500 flex items-center justify-center p-2 text-white">
          <Icon className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </CardHeader>
      <CardContent>
        {description ? (
          <p>{description}</p>
        ) : (
          <>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit atque
            voluptatem quos. Animi accusantium maxime perspiciatis ipsa
            pariatur, sed laborum, eaque excepturi molestiae corporis placeat
            ullam voluptas repellendus hic et.
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default Services2;
