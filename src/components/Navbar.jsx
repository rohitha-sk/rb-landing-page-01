import React, { useState } from "react";
import LandyMenu from "./LandyMenu";
import Content from "./Content";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Content setIsOpen={setIsOpen} />
      <LandyMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Navbar;
