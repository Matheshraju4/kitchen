import { getCategories, getCategoriesProducts } from "@/lib/prisma";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

import Navbar from "@/components/GeneralUi/NavBar";
import Link from "next/link";

interface Product {
  id: string;
  title: string;
  description: string;
  imageUrl: string;

  catName: string;
}
interface Products {
  id: number;
  name: string;
  image: string;
}
const page = async ({ params }: { params: { id: string } }) => {
  const id = Number(params.id);
  const rawProducts = await getCategoriesProducts(id);

  // Transform raw data to match Product interface

  const products: Product[] = rawProducts.map((product) => ({
    id: product.id.toString(),
    title: product.productName,
    description: product.productDescription,
    imageUrl: product.imageUrl, // Replace with actual URL if available

    catName: product.category?.name,
    // Replace with the actual price if available
  }));
  const rawProductsNav: Products[] | null = await getCategories();

  return (
    <>
      <Navbar rawProducts={rawProductsNav} />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">
          {products[0].catName ? products[0].catName : "Loading..."}
        </h1>
        {products.length === 0 ? (
          <p className="text-center text-gray-500">
            No products found in this category.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden w-full">
                <div className="aspect-square relative w-full mx-auto max-w-xl  h-52">
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    fill
                    className="object-contain "
                  />
                </div>
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold mb-2">
                    {product.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="w-full flex  items-center">
                    <Link
                      href={`/${params.id}/${product.id}`}
                      className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      See Product
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default page;
