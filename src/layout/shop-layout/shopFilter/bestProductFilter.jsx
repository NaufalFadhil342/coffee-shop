import React from 'react';
import Rating from '../../../components/rating';
import { getRating } from '../../../utilities/getRating';

const BestProductFilter = ({ shopData }) => {
  const maxLikes = Math.max(...shopData.map((data) => data.like));

  const filteredProducts = shopData.filter((data) => data.like === maxLikes);

  return (
    <div className="flex flex-col items-start gap-4">
      {filteredProducts.map((product) => {
        const rating = getRating(product.like);

        return (
          <div key={product.id} className="w-full h-auto flex gap-2  items-center shadow-bottom rounded-md p-2">
            <div className="w-28 h-full object-cover flex items-center justify-center object-center">
              <img className="w-full h-auto" src={product.image} alt={product.name} />
            </div>
            <div className="w-full h-auto flex flex-col items-start gap-1">
              <h2 className="text-lg font-medium text-stone-600 hover:text-accent hover:cursor-pointer transition-colors duration-200">{product.name}</h2>
              <Rating maxStars={5} rating={rating} />
              <p className="text-base text-accent">${product.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BestProductFilter;
