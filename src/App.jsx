import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div>
      <div className="flex flex-col px-12 md:px-10">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default App;
