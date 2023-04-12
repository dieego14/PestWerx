import React from "react";

const Faq = () => {
  return (
    <div className="max-w-[1920px]">
      <div className="max-h-[720px]">
        <div className="p-4">
          <h1 className="font-myFont text-center text-4xl">
            FREQUENTLY ASKED QUESTIONS (FAQ)
          </h1>
          <hr className="my-3"></hr>
        </div>
        {/* FAQ sections */}
        <div>
          {/* First Question */}
          <div className="bg-slate-300">
            <h2 className="text-xl p-3 font-bold">Can you fix my marriage?</h2>
          </div>
          <div className="bg-white">
            <h2 className="text-xl p-3">No, thats one bug we cant keep out</h2>
          </div>
          <hr className="my-3"></hr>
          {/* Second Question */}
          <div className="bg-slate-300">
            <h2 className="text-xl p-3 font-bold">
              Why are you guys always late?
            </h2>
          </div>
          <div className="bg-white">
            <h2 className="text-xl p-3">Because we can</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
