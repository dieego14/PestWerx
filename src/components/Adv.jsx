import React from "react";
import { BsStar } from "react-icons/bs";
import { MdOutlineInventory2, MdOutlineLocationOn } from "react-icons/md";
const Adv = () => {
  return (
    <div className="max-w-[1920px] mx-auto p-4 py-12 bg-myColor">
      <div className="max-h-[640px]">
        <div>
          <h1 className="text-4xl sm:text-5xl font-myFont text-center">
            Unwelcome visitors in your home?
          </h1>
          <div className="font-unbounded text-lg sm:text-xl md:text-2xl md:p-5 py-5 gap-3 text-center md:flex">
            <p className="sm:py-2">
              Serving the Los Angeles area with over 15 years of experience in
              the pest control industry. We operate and manage solutions for all pest control problems.
              We treat & defend homes and businesses from unwanted pests.
            </p>
          </div>
        </div>
        {/* Info Cards */}
        <div className="grid grid-cols-3 gap-5 py-2">
            {/* First Card */}
          <div className="bg-slate-400 px-4 py-5 rounded-lg hover:bg-yellow-400">
            <div className="flex justify-center py-6 border-b-2 sm:border-b-4 border-black">
              <BsStar size={40} />
            </div>
            <div className="flex justify-center sm:text-2xl py-2 font-bold">
              {/* Description */}
              <p className="text-center">5 Star Service <span className="">Guaranteed</span></p>
            </div>
          </div>
          {/* Second Card */}
          <div className="bg-slate-400 px-4 py-5 rounded-lg hover:bg-yellow-400">
            <div className="flex justify-center py-6 border-b-2 sm:border-b-4 border-black">
              <MdOutlineInventory2 size={40} />
            </div>
            <div className="flex justify-center sm:text-2xl py-2 font-bold">
              {/* Description */}
              <p className="text-center">Numerous Pest Services</p>
            </div>
          </div>
           {/* Third Card */}
          <div id="help" className="bg-slate-400 px-4 py-5 rounded-lg hover:bg-yellow-400">
            <div className="flex justify-center py-6 border-b-2 sm:border-b-4 border-black">
              <MdOutlineLocationOn size={40} />
            </div>
            <div className="flex justify-center sm:text-2xl py-2 font-bold">
              {/* Description */}
              <p className="text-center">On-Site Estimates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Adv;
