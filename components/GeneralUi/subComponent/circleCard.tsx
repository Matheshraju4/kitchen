import { Card } from "@/components/ui/card";

interface Products {
  key: number;
  id: number;
  name: string;
  image: string;
}
export default function CircleCard({ key, name, image, id }: Products) {
  return (
    <div className="">
      <Card
        className="w-44 h-44 md:w-64 md:h-64  mx-auto overflow-hidden  relative shadow-2xl"
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
      </Card>
      <div className=" inset-x-0 bottom-1 flex justify-center mt-4">
        <div className=" text-black py-1 px-4 text-lg font-semibold rounded-xl mt-2 ">
          {name}
        </div>
      </div>
    </div>
  );
}
