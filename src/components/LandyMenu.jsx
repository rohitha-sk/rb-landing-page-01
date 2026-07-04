import { Menu } from "lucide-react";
import React from "react";

const LandyMenu = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ease-in-out
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      />
      {/* Menu Panel*/}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 md:w-1/4 rounded-l-md bg-white z-50
          flex flex-col px-4 py-4
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-row justify-between">
          <span className="text-lg font-bold text-blue-900">Menu</span>
          <div>
            <Menu size={28} onClick={() => setIsOpen(false)} />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-6 mt-10">
          <div className="flex flex-col items-center gap-10 text-blue-900">
            <a href="#about" className="text-lg">
              About
            </a>
            <a href="#mission" className="text-lg">
              Mission
            </a>
            <a href="#product" className="text-lg">
              Product
            </a>
            <button className="bg-indigo-900 text-white px-8 py-3">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandyMenu;
