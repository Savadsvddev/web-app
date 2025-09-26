import React from "react";
import image from "../assets/images/image.png";

const images = [
  {
    id: "1",
    img: image,
    name: "Gaming",
  },
  {
    id: "2",
    img: image,
    name: "Gaming",
  },
  {
    id: "3",
    img: image,
    name: "Gaming",
  },
  {
    id: "4",
    img: image,
    name: "Gaming",
  },
  {
    id: "5",
    img: image,
    name: "Gaming",
  },
  {
    id: "6",
    img: image,
    name: "Gaming",
  },
 
  {
    id: "10",
    img: image,
    name: "Gaming",
  },
];
const Categories = () => {
  return (
    <div>
      <div className="flex justify-between p-8">
        <p className="font-bold">Popular Categories</p>
        <p className="text-xs">View All</p>
      </div>
      <div className=" grid grid-cols-3 sm:grid-cols-10">
        {images?.map((item) => (
          <div className="flex-column mb-6 items-center justify-center ml-4 w-25 h-25 bg-gray-300 rounded-full">
            <img src={item?.img} />
            <p className="text-sm mt-1 text-center">{item?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Categories;
