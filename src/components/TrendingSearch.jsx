import React from "react";
const searchs = [
  {
    name: "vaccum robot",
  },
  {
    name: "vaccum robot",
  },
  
  {
    name: "vaccum robot",
  },
  {
    name: "vaccum robot",
  },
  {
    name: "vaccum robot",
  },
  {
    name: "vaccum robot",
  },
];
const TrendingSearch = () => {
  return (
    <div>
      <div className="p-5 font-bold">Trending Search</div>
      <div className="flex p-5">
        {searchs?.map((item) => (
          <div className="flex text-center items-center justify-center w-full h-8 bg-gray-200 rounded-2xl ml-3 text-sm">{item?.name}</div>
        ))}
      </div>
    </div>
  );
};
export default TrendingSearch;
