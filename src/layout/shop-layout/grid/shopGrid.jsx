import React, { useState } from 'react';
import ProductCard from '../productCard';
import { MdFilterAlt } from 'react-icons/md';
import { useFilterSort } from '../../../context/filterContext';
import SortOption from '../../../components/sortOption';
import ShopGridFilter from './shopGridFilter';

const ShopGrid = () => {
  const [view, setView] = useState(false);
  const [filterShopGrid, setFilterShopGrid] = useState(false);
  const { filteredSortedData, setSortOption, setPriceRange, setCategoryFilter, shopData, sortOption, setSearchQuery, searchQuery } = useFilterSort();

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <div className="w-full h-auto flex flex-col gap-16 my-28 px-[8%]">
      <div className="text-stone-600 w-full h-auto flex flex-col gap-4 sm:flex-row items-center">
        <div className="w-full h-auto flex justify-between sm:justify-start gap-4">
          <div className="flex items-center gap-1 text-lg text-stone-600">
            <MdFilterAlt className="absolute z-[2]" onClick={() => setFilterShopGrid(true)} />
            <span className="hidden sm:flex ml-6 hover:text-accent transition-colors duration-200 cursor-pointer font-medium" onClick={() => setFilterShopGrid(true)}>
              Filter
            </span>
            <ShopGridFilter
              setFilterShopGrid={setFilterShopGrid}
              filterShopGrid={filterShopGrid}
              setPriceRange={setPriceRange}
              setCategoryFilter={setCategoryFilter}
              shopData={shopData}
              setSearchQuery={setSearchQuery}
              searchQuery={searchQuery}
            />
          </div>
          <div className="w-56 h-auto border-b-2 border-stone-500">
            <SortOption sortOption={sortOption} handleSortChange={handleSortChange} />
          </div>
        </div>
        <div className="w-full flex justify-end">
          <div className="text-stone-600">
            showing {filteredSortedData.length} of {shopData.length} results
          </div>
        </div>
      </div>
      <div className="w-full h-full grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredSortedData.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} view={view} setView={setView} />
        ))}
      </div>
    </div>
  );
};

export default ShopGrid;
