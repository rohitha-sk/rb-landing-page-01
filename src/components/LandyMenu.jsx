import { Menu } from "lucide-react";
import React from "react";

const LandyMenu = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      {isOpen ? (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div
            className="fixed top-0 right-0 h-full w-1/2 bg-yellow-300 z-50
                      flex flex-col  px-4 py-4
                      transition-transform duration-300 ease-in-out"
            style={{ transform: "translateX(0)" }}
          >
            <div className="flex flex-row justify-between">
              <span>Menu</span>
              <div>
                <Menu size={28} onClick={() => setIsOpen((open) => !open)} />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-6 mt-10">
              <div className="flex flex-col items-center gap-10 ">
                <a href="#about" className="text-lg">
                  About
                </a>
                <a href="#mission" className="text-lg">
                  Mission
                </a>
                <a href="#product" className="text-lg">
                  Product
                </a>
                <button className="bg-indigo-900 text-white px-8 py-3 rounded-lg">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        "Menu is closed"
      )}
    </div>
  );
};

export default LandyMenu;
