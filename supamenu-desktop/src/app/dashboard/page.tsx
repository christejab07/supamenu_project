import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { CirclePlus, Hourglass, Utensils } from "lucide-react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Dashboard",
};
const Dashboard = () => {
  return (
    <div className="h-screen bg-black">
      <Navbar />
      <div className="flex flex-col items-center">
        <HeroSection />
        <div className="bg-gray-200 w-[95%] min-h-68 p-10">
          <h1 className="font-bold text-4xl text-center my-4">How it works</h1>
          <div className="flex mt-5 text-center justify-between">
            <div className="w-1/5 bg-gray-100 shadow-neutral-400 flex flex-col items-center justify-center shadow-md rounded-lg m-6 p-6">
              <CirclePlus className="text-amber-500 " size={48} />
              <h1 className="font-bold text-2xl my-3">Step 1</h1>
              <p className="font-light text-xl text-neutral-600">
                Register your restaurant
              </p>
            </div>
            <div className="w-1/5 bg-gray-100 shadow-neutral-400 flex flex-col items-center justify-center shadow-lg rounded-md m-6 p-6">
              <Utensils className="text-amber-500" size={48} />
              <h1 className="font-bold text-2xl my-3">Step 2</h1>
              <p className="font-light text-xl text-neutral-600">
                Create your restaurant profile and create menu items
              </p>
            </div>
            <div className="w-1/5 bg-gray-100 shadow-neutral-400 flex flex-col items-center justify-center shadow-lg rounded-md m-6 p-6">
              <Hourglass className="text-amber-500" size={48} />
              <h1 className="font-bold text-2xl my-3">Step 3</h1>
              <p className="font-light text-xl text-neutral-600">
                Start receiving orders
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
