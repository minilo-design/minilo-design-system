import React from "react";
import { ReactComponent as Component } from "../assets/Components.svg"; // Ensure this is using the ReactComponent syntax

const Components = () => {
  return (
    <div className="bg-[#FDFCFF] p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      {/* Figma link section */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        <a
          href="https://www.figma.com/design/eOMBuOepZXFo3g4LclkXlO/Minilo-Design-System?node-id=0-1&t=Ii49jLCi4V2j8jM6-1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:text-indigo-800 transition duration-300 ease-in-out"
        >
          Minilo Design System Figma
        </a>
      </h1>

      {/* SVG component */}
      <div className="flex justify-center">
        <Component className="w-72 h-72 text-gray-600" /> {/* Customize size */}
      </div>
    </div>
  );
};

export default Components;
