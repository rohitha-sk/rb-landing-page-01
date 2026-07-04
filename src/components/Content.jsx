import { Menu } from "lucide-react";
import React from "react";

const Content = ({ setIsOpen }) => {
  return (
    <div className="flex justify-between items-centermd:px-10 py-6">
      <div className="text-xl font-bold text-blue-900">Landy</div>
      <div className="md:hidden">
        <Menu size={30} onClick={() => setIsOpen((open) => !open)} />
      </div>
      <div className="hidden">menu items</div>
    </div>
  );
};

export default Content;
