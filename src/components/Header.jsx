import React from "react";
import logo from "../assets/images/logo.png";
import { IoSearch } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import hotline from "../assets/images/hotline.png";
import favorite from "../assets/images/favorite.png";
import { CiHeart } from "react-icons/ci";

const Header = () => {
  return (
    <div className="grid grid-cols-5 gap-3 p-5 border-b-1 border-gray-300">
      <div className="flex items-center justify-center">
        <img className="w-20 h-6" src={logo} />
      </div>
      <div className="flex col-span-2 w-full h-10  flex items-center justify-between border border-1-solid border-[#99999999] rounded-3xl overflow-hidden">
        <div className="bg-[#99999999] h-10 flex items-center px-4">
          <p className="text-xs"> All categories</p>
          <IoChevronDown className="mt-1 mx-1" />
        </div>
        <div>
          <input
            type="text"
            className="text-sm focus-visible:outline-none"
            placeholder="Search anything..."
          ></input>
        </div>
        <div className="bg-[#4B3EC4] h-10 text-white rounded-3xl flex items-center justify-center">
          <IoSearch className="w-13 h-5 " />
        </div>
      </div>
      <div className="flex justify-center items-center ml-15">
        <div className="w-7 h-7 rounded-3xl bg-gray-200"></div>
        <div className="flex-column text-xs ml-2">
          <p className="">Hotline 24/7</p>
          <p className="font-bold text-blue-600 ">(025)36862516</p>
        </div>
      </div>
      <div className="flex items-center justify-end ">
        <div className="mx-2 ">
          <CiHeart className="w-8 h-7" />
        </div>
        <span className="absolute top-17 right-7 inline-flex items-center justify-center px-1 py-1 text-xs font-bold leading-none text-white bg-blue-700 rounded-full" />
      </div>
    </div>
  );
};
export default Header;
