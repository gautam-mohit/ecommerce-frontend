import React from 'react'
import ProductImageCarousel from "../../common/ProductImageCarousel";

export default function ProductDescription() {
  return (
    <div className="product-description container py-10 px-20">
      <div className="grid grid-cols-3">
        <div className="product-image">
          <ProductImageCarousel images={"https://rukminim2.flixcart.com/image/880/1056/k4vmxzk0/shoe/j/j/x/k1000g-blue-6-paragon-blue-original-imafnznwgxj3wm96.jpeg?q=50"}/>
        </div>
        <div className="product-basic-details col-span-2">

        </div>
      </div>
    </div>
  )
}
