import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="max-w-[1920px] bg-myColor">
      <div className="max-h-[1000px]">
        {/* About Us */}
        <div className>
          <img className="w-full max-h-[300px] object-cover"
            src="https://img1.wsimg.com/isteam/stock/2141/:/rs=w:1350,m"
           />
           <h1 className=" py-5 font-myFont text-center text-6xl">
            WHO WE ARE
          </h1>
          <div>
            <p className="p-16 flex justify-center text-3xl">
             Founded in and servicing the Los Angeles Area. We find and manege
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
