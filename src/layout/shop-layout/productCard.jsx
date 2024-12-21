import React from 'react';
import ShopView from './shopView';
import ShopCard from './shopCard';

const ProductCard = ({ product, index }) => {
  return (
    <div className="w-full h-auto flex flex-col rounded-lg border-b-4 border-accent">
      <div className="w-full h-auto flex flex-col relative">
        <div className="w-full h-60 overflow-hidden flex items-center justify-center ">
          <img className="w-1/2 h-auto object-cover object-center" src={product.image} alt={product.name} />
        </div>
        <ShopView product={product} />
      </div>
      <ShopCard product={product} index={index} />
    </div>
  );
};

export default ProductCard;
