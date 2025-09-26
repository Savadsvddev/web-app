import React from "react";
import { IoChevronDown } from "react-icons/io5";
import sell from "../assets/images/sell.png";
import order from "../assets/images/order.png";
import usa from "../assets/images/usa.png";

const Division = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 py-5 pl-10">
      <div className="flex  items-center justify-center sm:justify-start ">
        <div className="flex items-center justify-center">
          <p className="text-xs">Demons</p>
          <IoChevronDown className="mt-1" />
        </div>
        <div className="ml-2 flex items-center justify-center">
          <p className="text-xs">Pages</p>
          <IoChevronDown className="mt-1" />
        </div>
        <div className="ml-2 flex items-center justify-center">
          <p className="text-xs">Products</p>
          <IoChevronDown className="mt-1" />
        </div>
        <div className="ml-2 flex items-center justify-center">
          <p className="text-xs">Contact</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex">
          <img className="w-5" src={sell} />
          <p className="text-xs ml-2">Sell on Swoo</p>
        </div>
        <div className="flex ml-5 justify-center items-center">
          <img className="w-5" src={order} />
          <p className="text-xs ml-2">Order Tracking</p>
        </div>
        <div className="ml-4 hidden sm:flex items-center justify-center">
          <p className="text-xs ml-2">Recently Viewed</p>
          <IoChevronDown className="mt-1" />
        </div>
        <div className="ml-7 hidden sm:flex items-center justify-center">
          <p className="text-xs ml-2">USD</p>
          <IoChevronDown className="mt-1" />
        </div>
        <div className="ml-2 mr-2">|</div>
        <div className="flex">
          <img src={usa} />
          <div className="ml-3 flex items-center justify-center">
            <p className="text-xs ml-2">Eng</p>
            <IoChevronDown className="mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Division;
