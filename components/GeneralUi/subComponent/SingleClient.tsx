import Image from "next/image";

const SingleClient = ({ location }: { location: number }) => {
  return (
    <div className="w-28 md:w-56 h-full rounded-md">
      <Image
        src={`/clients/clients-${location}.jpg`}
        alt="client"
        className="w-full h-full object-fill rounded-md shadow-md"
        width={250}
        height={100}
      />
    </div>
  );
};

export default SingleClient;
