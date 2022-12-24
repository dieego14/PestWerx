import React from "react";

const Footer = ()=>{



    return (
        <div className="max-w-[1920px] mx-auto bg-black/80">
            <div className="max-h-[500px]">
               <div className="text-white text-center font-sans flex flex-col gap-4 py-4">
                    {/* Footer Info */}
                    <h3 className="font-bold">
                        PESTWERX
                    </h3>
                    <p className="">
                        18565 SOLEDAD CANYON ROAD #352 CANYON COUNTRY, CA. 91351
                    </p>
                    <p>
                        (800)-283-8290
                    </p>
                    <p className=" text-xs">
                        COPYRIGHT © 2022 PESTWERX - ALL RIGHTS RESERVED.
                    </p>
               </div>
            </div>
        </div>
    )
}

export default Footer