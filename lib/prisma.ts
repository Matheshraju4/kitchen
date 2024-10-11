import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getCategories() {
  const categories = await prisma.category.findMany();
  console.log("Categories", categories);
  return categories;
}
export async function getCategoriesProducts(categoryId: number) {
  const categories = await prisma.product.findMany({
    where: {
      categoryId: categoryId,
    },
    include: {
      category: true,
    },
  });

  console.log("Categories", categories);
  return categories;
}
export async function getSingleProduct(productId: number) {
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
    include: {
      productSpecification: true,
      availableSize: true,
    },
  });
  console.log("Product", product);
  return product;
}
