import React from "react";
import form from "../assets/images/form.png";

const Footer = () => {
  return (
    <div className=" hidden sm:flex justify-evenly items-center w-full h-25 bg-[#4B3EC4]">
      <div className="pl-20 flex items-center text-center">
        <p className="font-bold text-white">Subscribe</p>
        <p className="text-sm ml-1 text-white">&</p>
        <p className="font-thin ml-1 text-white">Get</p>
        <p className="font-thin ml-1 text-blue-500 ">10 % off</p>
        <p className="font-thin ml-1 text-white">for first order</p>
      </div>
      <img className=" flex w-80 h-10" src={form} />
    </div>
  );
};
export default Footer;
