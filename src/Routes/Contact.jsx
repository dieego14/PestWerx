import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="max-w-[1920px] bg-myColor ">
      <div className="max-h-[5000px]">
        <div className="bg-black/80 h-[200px]">
          <h1 className="text-white font-myFont text-5xl flex justify-center py-[80px]">
            CUSTOMER CARE
          </h1>
        </div>
        <div className="h-[600px] grid grid-cols-2">
          <div className="px-12">
            <h1 className="font-myFont text-5xl mt-12 mb-4">Contact us</h1>
            <p className=" mr-8 font-unbounded">
              Want to schedule a visit? Got questions? Or want an estimate? We'd
              like to hear from you!
            </p>
            <div className="flex py-8 text-xl">
              <FiPhoneCall size={30} />
              <p className="ml-4 font-raleway">
                CALL US{" "}
                <button className=" bg- underline underline-offset-4 hover:font-bold font-mukta ml-1 py-[-1px]">
                  <a href="tel:2133729844">(213)-372-9844 </a>
                </button>
              </p>
            </div>
          </div>
          {/* Contact Form */}
          <div className="">
            <h1 className="font-myFont text-5xl mt-11 mb-4">
              Schedule a Visit
            </h1>
            <div>
              <form action="https://formsubmit.co/cihit85959@galcake.com" method="POST">
              <input type="hidden" name="_subject" value="Customer Request"></input>
              <input type="hidden" name="_next" value="http://localhost:3000/Contact"></input>
              <input type="hidden" name="_captcha" value="false"></input>
              <h3> Name </h3>
              <input type="text" className="mb-3 w-[170px] md:w-[270px] lg:w-[470px]" name="Name"></input>

              <h3> Email </h3>
              <input type="text" className="mb-3 w-[170px] md:w-[270px] lg:w-[470px]" name="Email"></input>

              <h3> Address </h3>
              <input type="text" className="mb-3 w-[170px] md:w-[270px] lg:w-[470px]" name="Address"></input>

              <h3> Phone Number </h3>
              <input type="tel" className="mb-3 w-[170px] md:w-[270px] lg:w-[470px]" name="Phone Number"></input>

              <h3>Additional Comments </h3>
              <textarea className="mb-4 w-[270px]" name="Comments"></textarea>
              <div>
              <button className="px-4 rounded-full bg-slate-100 border border-slate-600 hover:text-white hover:bg-slate-700 active:bg-black active:ring-2 active:ring-slate-300">
                Submit
              </button>
            </div>
              </form>
            </div>
            {/* Submit Button */}
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
