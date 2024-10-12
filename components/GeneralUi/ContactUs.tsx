"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactUs({
  callString,
  className,
}: {
  callString: string;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const companyDetails = {
    name: "Foretech Equipments",
    email: "sales@foretechequipments.com",
    phone: "7373050573",
    address: "16/275,Athipet Kuppam,Vanagaram Road,Chennai,TamilNadu,600058",
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className={className}>{callString}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {companyDetails.name}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-gray-500" />
            <span>{companyDetails.email}</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-gray-500" />
            <span>{companyDetails.phone}</span>
          </div>
          <div className="flex items-start space-x-3">
            <MapPin className="h-5 w-5 text-gray-500 mt-1" />
            <span>{companyDetails.address}</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
