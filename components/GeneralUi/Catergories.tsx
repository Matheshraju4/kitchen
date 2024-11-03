import { getCategories } from "@/lib/prisma";
import CircleCard from "./subComponent/circleCard";

import Link from "next/link";

interface Products {
  id: number;
  name: string;
  image: string;
}
const Catergories = async () => {
  const rawProducts: Products[] | null = await getCategories();

  const renderFourProducts = rawProducts?.slice(0, 4);
  console.log(renderFourProducts);

  return (
    <>
      <div className=" p-5 ">
        <div className="flex flex-row justify-between">
          <h1 className="text-xl md:text-3xl font-bold text-left md:text-right text-black w-full">
            Our Categories
          </h1>
          <div className="w-3/4 text-right md:pr-12">
            <Link
              href="/catergory"
              className="mt-10 bg-blue-950 text-white px-4 py-2 rounded-md w-24"
            >
              View All
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-4 gap-4   py-10">
          {renderFourProducts?.map((product) => (
            <CircleCard
              id={product.id}
              key={product.id}
              name={product.name}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Catergories;
