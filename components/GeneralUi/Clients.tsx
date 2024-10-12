import React from "react";
import SingleClient from "./subComponent/SingleClient";

const Clients = () => {
  const clients = Array.from({ length: 21 }, (_, index) => ({
    name: `Client ${index + 1}`,
  }));
  return (
    <div className="mt-10 p-5">
      <h1 className="text-3xl font-bold text-center">Our Clients</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 md:gap-4 p-2 md:p-10 mx-auto place-items-center text-center">
        {clients.map((_, index) => (
          <SingleClient location={index + 1} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Clients;
