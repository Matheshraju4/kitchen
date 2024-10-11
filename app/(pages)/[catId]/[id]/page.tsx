import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { getCategoriesProducts, getSingleProduct } from "@/lib/prisma";

import Link from "next/link";
import Navbar from "@/components/GeneralUi/NavBar";
interface Products {
  id: string;
  title: string;
  description: string;
  imageUrl: string;

  catName: string;
}
interface ProductSpecification {
  id: number;
  leftalign: string;
  rightalign: string;
  productId: number;
}

// Interface for Available Size
interface AvailableSize {
  id: number;
  size: string;
  productId: number;
}

// Interface for Product
interface Product {
  id: number;
  productName: string;
  productDescription: string;
  categoryId: number;
  productSpecification: ProductSpecification[];
  availableSize: AvailableSize[];
  imageUrl: string;
}
export default async function ProductPage({
  params,
}: {
  params: { id: string; catId: string };
}) {
  const id = Number(params.id);
  const products: Product | null = await getSingleProduct(id);
  const relatedid = Number(params.catId);
  const rawProducts = await getCategoriesProducts(relatedid);

  // Transform raw data to match Product interface

  const relatedProducts: Products[] = rawProducts.map((product: any) => ({
    id: product.id.toString(),
    title: product.productName,
    description: product.productDescription,
    imageUrl: product.imageUrl, // Replace with actual URL if available

    catName: product.category?.name,
    // Replace with the actual price if available
  }));
  return (
    <>
      <Navbar />
      {products ? (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <main>
            <section className="mb-12">
              <h1 className="text-4xl font-bold mb-8 text-center">
                {products.productName}
              </h1>

              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="relative aspect-square w-full max-w-md mx-auto">
                  <Image
                    src={products.imageUrl}
                    alt="Premium Wireless Headphones"
                    layout="fill"
                    className="rounded-lg shadow-lg object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-lg leading-relaxed">
                    {products.productDescription}
                  </p>
                  <div className="flex flex-col justify-center">
                    <p className="text-xl leading-relaxed font-bold">
                      Specifications:
                    </p>

                    <p className="text-lg leading-relaxed">
                      {products.productSpecification.map((spec) => (
                        <table key={spec.id}>
                          <tbody>
                            <tr key={spec.id}>
                              <td className="text-lg font-semibold pr-3">
                                {spec.leftalign}:
                              </td>
                              <td className="text-lg font-medium">
                                {spec.rightalign}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      ))}
                    </p>
                  </div>
                  <div className="flex flex-col justify-center  mt-4">
                    <p className="text-xl leading-relaxed font-bold ">
                      Available Sizes:
                    </p>

                    <p className="text-lg">
                      {products.availableSize.map((spec) => (
                        <table key={spec.id}>
                          <tbody>
                            <tr key={spec.id}>
                              <td className="text-lg font-medium pr-3">
                                {spec.size}:
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-6 text-center">
                Related Products
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {relatedProducts.map((item) => (
                  <Card key={item.id} className="flex flex-col  gap-2 w-full">
                    <CardHeader className="p-3 pb-0">
                      <div className="relative aspect-square mb-2">
                        <Image
                          src={item.imageUrl}
                          alt={`Related Product ${item.id}`}
                          layout="fill"
                          className="rounded-lg object-contain"
                        />
                      </div>
                      <CardTitle className="">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 pt-1 flex-grow">
                      <CardDescription className="text-sm text-gray-600 flex flex-col gap-3">
                        <p> {item.description}</p>

                        <div>
                          <Link
                            href={`/${params.catId}/${item.id}`}
                            className="bg-blue-900 text-white px-8 py-2 rounded-lg"
                          >
                            View Product
                          </Link>
                        </div>
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </main>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
