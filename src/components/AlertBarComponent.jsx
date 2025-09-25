import React from "react";

const AlertBarComponent = () => {
  return (
    <div>
      <div className="flex justify-center items-center p-0 w-full h-10 bg-[#4b3ec4]">
        <div className="bg-white h-5 w-12 rounded-lg  text-center">
          <p className="lighter text-xs">Special</p>
        </div>
        <div className="flex justify-center items-center">
            <p className="text-white text-xs ml-2">Get 10%</p>
            <p className="ml-1 text-white font-bold text-sm">DISCOUNT</p>
            <p className="text-white text-xs ml-1">for first order</p>
            <p className="text-white text-xs ml-1 underline italic">Register Now</p>
        </div>
      </div>
    </div>
  );
};

export default AlertBarComponent;
