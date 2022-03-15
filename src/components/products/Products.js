import React from "react";
 import Header from "./components/layout/Header";
const Products = () => {
  return (
    <>
    <Header/>
      <div className=" ml-10  flex">
        <div className="">
          <img
            className="px-4 mt-5"
            src="data:image/jpeg;base64,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"
            alt="kettle"
          />
          <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-10 rounded ml-5">
            Add to cart
          </button>
          <button class="bg-orange-500 hover:bg-orange-600-700 text-white font-bold py-2 px-10 rounded ml-10">
            Buy now
          </button>
        </div>
        <div className=" ml-15 mt-10">
          <h1>ZunVolt 2L Electric Kettle (2 L, Silver, Black)</h1>
          <p className="">
            <span className="rating bg-green-500 rounded">3.8⭐</span>
            <span className="font-mono bg-gray-200">
              355 Ratings & 28 Reviews
            </span>
          </p>
          <h2 className="font-bold flex">
            ₹549 ₹1,499
            <span className="text-green-800 font-light">63% off</span>
            <img
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/info-basic_6c1a38.svg"
              alt=""
            />
          </h2>
        </div>
      </div>
    </>
  );
};

export default Products;
