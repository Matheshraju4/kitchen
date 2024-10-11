import React from "react";
import { Button } from "../ui/button";

export const CalltoAction = () => {
  return (
    <div>
      <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-2xl text-white px-16 py-6 rounded-3xl font-medium hover:from-yellow-500 hover:to-orange-600 transition duration-300">
        Contact Us
      </Button>
    </div>
  );
};
