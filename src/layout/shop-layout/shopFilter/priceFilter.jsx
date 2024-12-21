import React, { Fragment, useState, useCallback } from 'react';
import PriceRange from './priceRange';

const PriceFilter = ({ setPriceRange }) => {
  const [minPrice, setMinPrice] = useState('');

  const handleApplyPriceFilter = useCallback(() => {
    const min = parseFloat(minPrice) || 0;

    setPriceRange([min, Infinity]);
  }, [minPrice, setPriceRange]);

  const handlePriceClick = useCallback(
    (min, max) => {
      setPriceRange([min, max]);
    },
    [setPriceRange]
  );

  const handleReset = () => {
    setMinPrice('');
    setPriceRange([0, Infinity]);
  };

  return (
    <Fragment>
      <div className="w-full flex flex-col gap-4">
        <div className="button h-8 px-0 flex items-center gap-3 rounded-lg overflow-hidden bg-beige/25 text-base font-medium text-stone-600">
          <p className="w-8 h-full bg-beige/50 flex items-center justify-center text-stone-600">$</p>
          <input
            type="number"
            placeholder="Select price"
            aria-label="Select Price"
            className="w-full h-full bg-transparent outline-none text-stone-600 placeholder:text-stone-600"
            value={minPrice}
            onChange={(e) => {
              setMinPrice(e.target.value);
            }}
          />
        </div>
        <div className="w-full flex justify-start items-center gap-4">
          <button className="button w-fit text-base py-2 bg-accent text-white rounded-lg hover:bg-accent/75 transition-colors duration-300" onClick={handleApplyPriceFilter}>
            Apply
          </button>
          <button className="button w-fit text-base py-2 bg-transparent text-gray-500 border border-beige rounded-lg hover:bg-beige hover:text-stone-600 transition-colors duration-300" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
      <div className="w-full flex flex-wrap gap-4 mt-2">
        <PriceRange minPrice={15} maxPrice={25} handlePriceClick={handlePriceClick} />
        <PriceRange minPrice={25} maxPrice={35} handlePriceClick={handlePriceClick} />
        <PriceRange minPrice={35} maxPrice={45} handlePriceClick={handlePriceClick} />
        <PriceRange minPrice={45} maxPrice={55} handlePriceClick={handlePriceClick} />
      </div>
    </Fragment>
  );
};

export default PriceFilter;
