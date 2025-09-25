import React from "react";
import sono from "../assets/images/sono.png";
import fan from "../assets/images/fan.png";
import ipad from "../assets/images/ipad.png";
import air from "../assets/images/airPurifire.png";
import Anatico from "../assets/images/anatico.png";
const Ads = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-3 mt-12 p-5">
        <div className="col-span-2  ">
          <img src={sono}/>
        </div>
        <div>
          <img src={fan} />
        </div>
        
      </div>

      <div className="grid grid-cols-4 gap-3 p-5">
          <div className="col-span-2 ">
            <img className="" src={ipad} />
          </div>
          <div className=""><img src={air}/></div>
          <div className=""><img src={air}/></div>
        </div>
    </div>
  );
};
export default Ads;
