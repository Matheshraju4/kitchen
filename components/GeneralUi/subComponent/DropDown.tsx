import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";
interface Products {
  id: number;
  name: string;
  image: string;
}
const DropDown = async ({
  string,
  rawProducts,
}: {
  string: string;
  rawProducts: Products[];
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{string}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Categories</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {rawProducts?.map((product) => (
          <DropdownMenuItem key={product.id}>
            <Link href={`/catergory/${product.id}`}> {product.name}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDown;
