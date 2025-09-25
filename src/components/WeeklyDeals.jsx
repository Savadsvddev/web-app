import React from "react";
import ipad from "../assets/images/ipad.png";
import ProductItem from "./ProductItem";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

const products = [
  {
    id: "101",
    slNo: 1,
    image: ipad,
    name: "Gaming Laptop",
    isFavourite: false,
    favorite: (
      <div className="bg-blue-600 rounded-xl text-white">
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
    id: "102",
    slNo: 2,
    image: ipad,
    name: "Wireless Headphones",
    isFavourite: false,
    favorite: (
      <div className="bg-blue-600 rounded-xl text-white">
        <MdFavorite />
      </div>
    ),
    favoriteBorder: (
      <div className="bg-blue-600 rounded-xl text-white">
        <MdFavoriteBorder />
      </div>
    ),

    offerPercentage: 10,
    starRating: 4.2,
    originalPrice: 200,
    sellingPrice: 180,
    numberOfItemsSold: 150,
  },
  {
    id: "103",
    slNo: 3,
    image: ipad,
    name: "Smart Watch",
    isFavourite: true,
    favorite: (
      <div className="bg-blue-600 rounded-xl text-white">
        <MdFavorite />
      </div>
    ),
    favoriteBorder: (
      <div className="bg-blue-600 rounded-xl text-white">
        <MdFavoriteBorder />
      </div>
    ),

    offerPercentage: 20,
    starRating: 4.8,
    originalPrice: 300,
    sellingPrice: 240,
    numberOfItemsSold: 320,
  },
  {
    id: "103",
    slNo: 3,
    image: ipad,
    name: "Smart Watch",
    isFavourite: true,
    favorite: (
      <div className="bg-blue-600 rounded-xl text-white">
        <MdFavorite />
      </div>
    ),
    favoriteBorder: (
      <div className="bg-blue-600 rounded-xl text-white">
        <MdFavoriteBorder />
      </div>
    ),

    offerPercentage: 20,
    starRating: 4.8,
    originalPrice: 300,
    sellingPrice: 240,
    numberOfItemsSold: 320,
  },
  {
    id: "103",
    slNo: 3,
    image: ipad,
    name: "Smart Watch",
    isFavourite: true,
    favorite: (
      <div className="bg-blue-600 rounded-xl text-white">
        <MdFavorite />
      </div>
    ),
    favoriteBorder: (
      <div className="bg-blue-600 rounded-xl text-white">
        <MdFavoriteBorder />
      </div>
    ),

    offerPercentage: 20,
    starRating: 4.8,
    originalPrice: 300,
    sellingPrice: 240,
    numberOfItemsSold: 320,
  },
  {
    id: "103",
    slNo: 3,
    image: ipad,
    name: "Smart Watch",
    isFavourite: true,
    favorite: (
      <div className="bg-blue-600 rounded-xl text-white">
        <MdFavorite />
      </div>
    ),
    favoriteBorder: (
      <div className="bg-blue-600 rounded-xl text-white">
        <MdFavoriteBorder />
      </div>
    ),

    offerPercentage: 20,
    starRating: 4.8,
    originalPrice: 300,
    sellingPrice: 240,
    numberOfItemsSold: 320,
  },
  {
    id: "103",
    slNo: 3,
    image: ipad,
    name: "Smart Watch",
    isFavourite: true,
    favorite: (
      <div className="bg-blue-600 rounded-xl text-white">
        <MdFavorite />
      </div>
    ),
    favoriteBorder: (
      <div className="bg-blue-600 rounded-xl text-white">
        <MdFavoriteBorder />
      </div>
    ),

    offerPercentage: 20,
    starRating: 4.8,
    originalPrice: 300,
    sellingPrice: 240,
    numberOfItemsSold: 320,
  },
];

const WeeklyDeals = () => {
  return (
    <div className=" p-5 ">
      <div className="p-4 bg-gray-200 rounded  flex-column justify-center items-center text-center">
        <div className="flex">
          <p className="font-bold mb-3">Best Weekly Deals</p>
        </div>
        <div className="grid grid-cols-4 gap-3 ">
          {products?.map((item) => (
            <ProductItem product={item} />
          ))}
        </div>
        <div className=" mt-3 flex items-center justify-center h-8 w-full  ">
          <div className="bg-white w-50 rounded-xl text-sm ">
            see all products(667){" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeeklyDeals;
