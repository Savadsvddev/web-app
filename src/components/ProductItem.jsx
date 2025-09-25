import React from "react";

const ProductItem = ({ product }) => {
  console.log("product", product);
  return (
    <div className="col-span-1 w-full bg-white p-3">
      <div className="flex justify-between">
        <div className=" flex border border-red-500 rounded-3xl text-xs text-[#FF0000] p-2">
          {product?.offerPercentage}%
          <p className="text-[#FF0000] ml-1"> installment</p>
        </div>
        <div className="p-2">
          {product?.isFavourite === true
            ? product?.favorite
            : product?.favoriteBorder}
        </div>
      </div>
      <div className="mt-4">
        <img src={product?.image} />
      </div>
      <div className="flex text-sm">{product?.name}</div>
      <div className="flex text-xs">
        <div className="text-[#FF0000]">${product?.sellingPrice}</div>
        <div className="ml-3 line-through text-[#99999999]">
          ${product?.originalPrice}
        </div>
      </div>
    </div>
  );
};
export default ProductItem;
