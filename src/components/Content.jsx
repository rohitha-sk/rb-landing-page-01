import { Menu } from "lucide-react";
import React from "react";

const Content = ({ setIsOpen }) => {
  return (
    <div className="flex justify-between items-center md:px-10 py-6 ">
      <div className="text-xl font-bold text-blue-900">Landy</div>
      <div className="md:hidden">
        <Menu size={30} onClick={() => setIsOpen((open) => !open)} />
      </div>
      <div className="hidden md:flex justify-between items-center">
        <ul className="md:flex-row flex gap-4 md:items-center">
          <li className="px-4 text-blue-900 font-semibold cursor-pointer">
            Home
          </li>
          <li className="px-4 text-blue-900 font-semibold cursor-pointer">
            About
          </li>
          <li className="px-4 text-blue-900 font-semibold cursor-pointer">
            Services
          </li>
          <li className="px-4 text-blue-900 font-semibold cursor-pointer">
            Portfolio
          </li>
          <li className="px-4 text-blue-900 font-semibold cursor-pointer">
            <button className="bg-blue-900 text-white py-2 px-12 rounded-sm md:shadow-lg">
              Contact
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Content;
