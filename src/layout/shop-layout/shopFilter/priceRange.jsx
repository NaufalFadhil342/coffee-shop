import React from 'react';

const PriceRange = ({ handlePriceClick, minPrice, maxPrice }) => {
  return (
    <div className="group w-fit p-2 h-9 border border-stone-500 rounded-lg hover:border-accent transition-colors duration-300 flex items-center gap-2 hover:cursor-pointer" onClick={() => handlePriceClick(minPrice, maxPrice)}>
      <span className="text-base text-stone-600 group-hover:text-accent">
        ${minPrice} - ${maxPrice}
      </span>
    </div>
  );
};

export default PriceRange;
