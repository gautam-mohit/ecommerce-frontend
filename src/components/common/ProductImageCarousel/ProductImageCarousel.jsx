import React from 'react'
import Button from '../Button';
export default function ProductImageCarousel(props) {
  const {images, onAddToCart, onBuyNow, onWhishList} = props;
  return (
    <div className="product-image">
      <div className="flex flex-col relative">
          <Button text={'whishlist'} onClick={onAddToCart} className="absolute right-5 top-5"/>
        <img src={images} alt="product-image" className="max-h-96"/>
        <div className="grid grid-cols-2 gap-4">
          <Button text={'Add to cart'} onClick={onAddToCart} type={'primary'}/>
          <Button text={'Buy Now'} onClick={onBuyNow} type={'secondary'}/>
        </div>
      </div>
    </div>
  )
}
