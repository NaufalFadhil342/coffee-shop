import React from 'react';
import SearchFilter from './searchFilter';
import PriceFilter from './priceFilter';
import CategoryFilter from './categoryFilter';
import { RiInstagramLine, RiTwitterXLine, RiTiktokFill } from 'react-icons/ri';
import FlowFilter from './flowFilter';
import BestProductFilter from './bestProductFilter';

const ShopFilter = ({ shopGrid, setPriceRange, setCategoryFilter, shopData, sideBar, setSearchQuery, searchQuery }) => {
  return (
    <div className={`w-full h-full bg-white flex flex-col items-start gap-6 relative overflow-auto scrollbar-thin ${sideBar && 'overflow-visible'} ${shopGrid ? 'px-8 py-12' : ''}`}>
      <div className="w-full flex flex-col items-start gap-2">
        <h1 className="text-3xl text-stone-800 font-semibold">Search</h1>
        <div className="w-full h-[1px] bg-stone-500/35 -mt-1" />
        <SearchFilter setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      </div>
      <div className="w-full flex flex-col items-start gap-4">
        <h1 className="text-3xl text-stone-800 font-semibold">Price</h1>
        <div className="w-full h-[1px] bg-stone-500/35 -mt-3" />
        <PriceFilter setPriceRange={setPriceRange} />
      </div>
      <div className="w-full h-auto flex flex-col items-start gap-4">
        <h1 className="text-3xl text-stone-800 font-semibold">Categories</h1>
        <div className="w-full h-[1px] bg-stone-500/35 -mt-2" />
        <CategoryFilter setCategoryFilter={setCategoryFilter} />
      </div>
      <div className="w-full h-auto flex flex-col items-start gap-4">
        <h1 className="text-3xl text-stone-800 font-semibold">Best Products</h1>
        <div className="w-full h-[1px] bg-stone-500/35 -mt-3" />
        <BestProductFilter shopData={shopData} />
      </div>
      <div className="w-full h-auto flex flex-col items-start gap-4 mt-2">
        <h1 className="text-3xl text-stone-800 font-semibold">Follow Us</h1>
        <div className="w-full h-[1px] bg-stone-500/35 -mt-3" />
        <FlowFilter instagram={<RiInstagramLine />} twitter={<RiTwitterXLine />} tiktok={<RiTiktokFill />} />
      </div>
    </div>
  );
};

export default ShopFilter;
