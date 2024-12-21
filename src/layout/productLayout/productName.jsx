import React from 'react';
import Rating from '../../components/rating';
import { getRating } from '../../utilities/getRating';

const ProductName = ({ products, reviewsAmount, price }) => {
  const rating = getRating(products.like);

  return (
    <div className="w-full h-auto flex flex-col gap-2">
      <h2 className="text-3xl text-gray-700 font-bold">{products.name}</h2>
      <div className="w-auto flex items-center gap-3">
        <Rating maxStars={5} rating={rating} /> <div className="text-gray-500">({reviewsAmount} Reviews)</div>
      </div>
      <div className="text-5xl text-accent font-bold">${price.toFixed(2)}</div>
      <p className="w-full h-[7rem] overflow-y-auto text-gray-500 text-sm leading-6 mt-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis amet molestiae voluptate doloremque ullam, sint eaque magnam, soluta cumque quia quasi harum voluptatibus odio aperiam laborum sed odit alias rerum voluptatem
        molestias. Sed fuga doloremque eum, laudantium et aliquid repudiandae.
      </p>
    </div>
  );
};

export default ProductName;
