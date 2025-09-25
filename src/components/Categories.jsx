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
    id: "7",
    img: image,
    name: "Gaming",
  },
  {
    id: "7",
    img: image,
    name: "Gaming",
  },
  
  {
    id: "9",
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
      <div className=" flex  ml-4 ">
        {images?.map((item) => (
          <div className=" flex-column ml-4 w-25 h-25 bg-gray-300 rounded-full">
            <img src={item?.img} />
            <p className="text-sm mt-3">{item?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Categories;
