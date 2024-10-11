import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
interface Products {
  key: number;
  id: number;
  name: string;
  image: string;
}
export default function CircleCard({ key, name, image, id }: Products) {
  return (
    <Card
      className="w-44 h-44 md:w-64 md:h-64  mx-auto overflow-hidden rounded-full relative"
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
        <div className="absolute inset-x-0 top-16 md:top-24 flex justify-center">
          <Badge className="bg-gray-800 text-white py-1 px-5 text-md font-semibold rounded-xl mt-2 hover:bg-gray-100">
            {name}
          </Badge>
        </div>
      </a>
    </Card>
  );
}
