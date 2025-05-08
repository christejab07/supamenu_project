import {
  ChartPie,
  CircleUserRound,
  Settings,
  TableOfContents,
  Users,
} from "lucide-react";
import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-black text-gray-400 w-1/4">
      <div className="flex flex-col h-screen">
        <div className="flex items-center justify-center h-16 border-b border-gray-700 py-10">
          <h1 className="text-3xl font-bold">
            <span className="text-amber-500">Supa</span>
            <span className="text-white">Menu</span>
          </h1>
        </div>
        <div className="flex-grow py-10">
          <ul>
            <li className="py-4 hover:bg-neutral-900 hover:border-l-white hover:text-gray-200 border-2 border-black flex items-center">
              <TableOfContents className="mx-2 p-0.5" />
              <span>Overview</span>
            </li>
            <li className="py-4 hover:bg-neutral-900 hover:border-l-white hover:text-gray-200 flex items-center border-2 border-black">
              <ChartPie className="mx-2 p-0.5" />
              <span>Clients</span>
            </li>
            <li className="py-4 hover:bg-neutral-900 hover:border-l-white hover:text-gray-200 flex items-center border-2 border-black">
              <Users className="mx-2 p-0.5" />
              <span>Users</span>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col">
          <li className="py-4 hover:bg-neutral-900 hover:border-l-white hover:text-gray-200 border-2 border-black flex items-center">
              <Settings className="mx-2 p-0.5" />
              <span>Settings</span>
            </li>
            <li className="py-4 hover:bg-neutral-900 hover:border-l-white hover:text-gray-200 border-2 border-black flex items-center">
              <CircleUserRound className="mx-2 p-0.5" />
              <span>My Account</span>
            </li>
          </ul>
          <h1 className="text-center text-gray-500 text-sm bg-amber-500 h-16">
            {/* &copy; 2023 SupaMenu. All rights reserved. */}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
