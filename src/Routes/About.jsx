import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="max-w-[1920px] bg-gray-600">
      <div className="max-h-[600px]">
        {/* About Us */}
        <div className="py-5">
          <h1 className="font-myFont text-cneter text-4xl">
            ABOUT US
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
