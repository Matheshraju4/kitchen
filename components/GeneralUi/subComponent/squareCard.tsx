import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
interface Products {
  key: number;
  id: number;
  name: string;
  image: string;
}
export default function SquareCard({ key, name, image, id }: Products) {
  return (
    <Card
      className="w-44 h-44 md:w-64 md:h-64  mx-auto overflow-hidden rounded-md  relative"
      key={key}
    >
      <a className="w-full h-full relative" href={`/catergory/${id}`}>
        <img
          alt="Background image"
          className="w-full h-full object-contain"
          height="256"
          src={image}
          // style={{
          //   aspectRatio: "1/1",
          //   objectFit: "cover",
          // }}
          width="256"
        />
      </a>
      <CardHeader className="absolute inset-x-0 bottom-0 md:bottom-0 font-bold text-white bg-gray-950 h-7 text-base  flex justify-center">
        {name}
      </CardHeader>
    </Card>
  );
}
