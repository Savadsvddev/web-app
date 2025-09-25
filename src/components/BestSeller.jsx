import React from "react";
import ProductItem from "./ProductItem";
import ipad from "../assets/images/ipad.png";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import SellerItems from "./SellerItems";

const sellers = [
  {
    name: "camaras",
  },
  {
    name: "camaras",
  },
  {
    name: "camaras",
  },
  {
    name: "camaras",
  },
  {
    name: "camaras",
  },
];
const products = [
  {
    id: "101",
    slNo: 1,
    image: ipad,
    name: "Gaming Laptop",
    isFavourite: true,
    favorite: (
      <div className="bg-white rounded-xl text-black border border-gray-300 p-1">
        <MdFavorite />
      </div>
    ),
    favoriteBorder: (
      <div className="g-white rounded-xl text-black border border-gray-300 p-1">
        <MdFavoriteBorder />
      </div>
    ),
    offerPercentage: 15,
    starRating: 4.5,
    originalPrice: 1200,
    sellingPrice: 1020,
    numberOfItemsSold: 250,
  },
  {
    id: "101",
    slNo: 1,
    image: ipad,
    name: "Gaming Laptop",
    isFavourite: true,
    favorite: (
      <div className="g-white rounded-xl text-black border border-gray-300 p-1">
        <MdFavorite />
      </div>
    ),
    favoriteBorder: (
      <div className="bg-blue-600 rounded-xl text-white">
        <MdFavoriteBorder />
      </div>
    ),
    offerPercentage: 15,
    starRating: 4.5,
    originalPrice: 1200,
    sellingPrice: 1020,
    numberOfItemsSold: 250,
  },
   {
    id: "101",
    slNo: 1,
    image: ipad,
    name: "Gaming Laptop",
    isFavourite: true,
    favorite: (
      <div className="g-white rounded-xl text-black border border-gray-300 p-1">
        <MdFavorite />
      </div>
    ),
    favoriteBorder: (
      <div className="bg-blue-600 rounded-xl text-white">
        <MdFavoriteBorder />
      </div>
    ),
    offerPercentage: 15,
    starRating: 4.5,
    originalPrice: 1200,
    sellingPrice: 1020,
    numberOfItemsSold: 250,
  }, {
    id: "101",
    slNo: 1,
    image: ipad,
    name: "Gaming Laptop",
    isFavourite: true,
    favorite: (
      <div className="g-white rounded-xl text-black border border-gray-300 p-1">
        <MdFavorite />
      </div>
    ),
    favoriteBorder: (
      <div className="bg-blue-600 rounded-xl text-white">
        <MdFavoriteBorder />
      </div>
    ),
    // offerPercentage: 15,
    starRating: 4.5,
    originalPrice: 1200,
    sellingPrice: 1020,
    numberOfItemsSold: 250,
  },
];
const BestSeller = () => {
  return (
    <div className="p-5">
      <div className="flex justify-between p-5">
        <div className="font-bold">Best Seller</div>
        <div className="text-sm">View All</div>
      </div>
      <div className="flex">
        {sellers?.map((item) => (
          <div className="flex text-center items-center justify-center w-30 h-8 bg-white border border-gray-300 rounded-2xl ml-3 text-sm cursor-pointer hover:bg-[#4b3ec4] ">
            {item?.name}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-3 ">
        {products?.map((item) => (
          <SellerItems product={item} />
        ))}
      </div>
    </div>
  );
};
export default BestSeller;
