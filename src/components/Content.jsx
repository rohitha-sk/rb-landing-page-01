import { Menu } from "lucide-react";
import React from "react";

const Content = ({ setIsOpen }) => {
  return (
    <div className="flex justify-between items-center px-6 py-6">
      <div>Logo</div>
      <div>
        <Menu size={30} onClick={() => setIsOpen((open) => !open)} />
      </div>
    </div>
  );
};

export default Content;
