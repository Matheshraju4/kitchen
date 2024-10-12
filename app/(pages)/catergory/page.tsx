import Navbar from "@/components/GeneralUi/NavBar";
import SquareCard from "@/components/GeneralUi/subComponent/squareCard";
import { getCategories } from "@/lib/prisma";

const Page = async () => {
  const rawProducts: Products[] | null = await getCategories();

  return (
    <>
      <Navbar />
      <div className="mt-10 p-5">
        <h1 className="text-3xl font-bold text-center">Our Categories</h1>
        <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-4 gap-10 mt-4 ">
          {rawProducts?.map((product) => (
            <SquareCard
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

interface Products {
  id: number;
  name: string;
  image: string;
}
export default Page;
