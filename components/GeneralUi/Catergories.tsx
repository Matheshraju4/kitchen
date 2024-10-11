import { getCategories } from "@/lib/prisma";
import CircleCard from "./subComponent/circleCard";

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
      <div className="mt-10 p-5">
        <h1 className="text-3xl font-bold text-center">Our Categories</h1>
        <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-4 gap-4 mt-4 ">
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
