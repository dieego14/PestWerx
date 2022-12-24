import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1890px] bg-myColor mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/*Overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col py-6 sm:py-20">
          <h1 className="px-4 font-myFont text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-bold">
            WE'LL GET THE <span className="text-red-600">BUGS OUT</span>
          </h1>
          <h1 className="px-4 font-myFont text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-bold">
            <span className="text-red-600">BEFORE YOU BUG OUT</span>
          </h1>
          <h2 className="px-4 text-sm sm:text-2xl font-semibold">
            Providing thorough and professional expertise for all your home pest
            control needs!
          </h2>
          <div className=" h-11 px-4 py-3 sm:h-20 sm:px-4 sm:py-8">
            <button className="bg-gray-700 rounded-lg px-2 py-2 sm:px-4 sm:py-4 hover:bg-red-500 active:bg-red-700 active:duration-100">
              Contact us
            </button>
          </div>
        </div>
        <img
          className="w-full max-h-[500px] object-cover "
          src="https://images.pexels.com/photos/209112/pexels-photo-209112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
    </div>
  );
};
export default Hero;
