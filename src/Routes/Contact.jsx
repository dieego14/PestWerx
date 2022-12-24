import React from "react";
import {BsFillTelephoneFill} from 'react-icons/bs'
import {FiPhoneCall} from 'react-icons/fi'

const Contact = () => {
  return (
    <div className="max-w-[1920px] bg-myColor ">
      <div className="max-h-[800px]">
        <div className="bg-black/80 h-[200px]">
          <h1 className="text-white font-myFont text-5xl flex justify-center py-[80px]">
            CUSTOMER CARE
          </h1>
        </div>
        <div className="h-[600px] grid grid-cols-2">
          <div className="px-12">
            <h1 className="font-myFont text-5xl mt-12 mb-4">
              Contact us
            </h1>
            <p className=" mr-8 font-unbounded">
              Want to schedule a visit? Got questions?
              Or want an estimate? We'd like to hear from you!
            </p>
            <div className="flex py-8 text-xl">
              <FiPhoneCall size={30} />
              <p className="ml-4 font-raleway">
                CALL US <button className=" bg- underline underline-offset-4 hover:invisible font-mukta ml-1 py-[-1px]">(800)-283-8290</button>
              </p>
            </div>
          </div>
          <div>
            <h1>
              Form
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
