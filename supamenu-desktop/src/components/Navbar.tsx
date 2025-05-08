import { Search, BellDot } from "lucide-react";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-white shadow-md p-4">
      <div>
        <h1 className="font-bold text-4xl flex items-center">
          <span>Supa</span>
          <span className="text-amber-500">Menu</span>
        </h1>
      </div>
      <div className="flex flex-1/8 items-center justify-end-safe">
        <Search className="mx-1" color="black" />
        <BellDot className="text-amber-500 m-2" fill="#ffa500" />
        <span className="text-2xl mx-2 text-gray-400">|</span>
        <h1 className="font-bold m-2"> Gabimaru the Hollow </h1>
        <Image
          src="/images/gabi1.jpg"
          alt="profile"
          width={40}
          height={40}
          className="rounded-4xl w-auto h-auto border-gray-600 border-2"
        />
      </div>
    </div>
  );
};

export default Navbar;
