import React, { useState } from 'react';
import ShopFilter from '../shopFilter';
import { MdFilterAlt } from 'react-icons/md';
import { useFilterSort } from '../../../context/filterContext';
import SortOption from '../../../components/sortOption';
import ProductCard from '../productCard';
import ShopGridFilter from '../grid/shopGridFilter'

const ShopSideBar = ({ leftSide }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterShopGrid, setFilterShopGrid] = useState(false);
  const { filteredSortedData, setSortOption, setPriceRange, setCategoryFilter, sortOption, shopData, setSearchQuery, searchQuery } = useFilterSort();

  const productsPerPage = 6;

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const currentPageHandler = (currIndex) => {
    window.scrollTo(0, 0);
    setCurrentPage(currIndex)
  }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredSortedData.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className={`w-full h-auto grid px-[8%] gap-10 ${leftSide ? 'lg:grid-cols-[1fr,2fr]' : 'lg:grid-cols-[2fr,1fr]'}`}>
      <div className='w-full h-auto block lg:hidden border border-stone-400'>
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
      <div className={`w-auto h-fit my-28 hidden lg:block ${leftSide ? 'order-first' : 'order-last'}`}>
        <ShopFilter setPriceRange={setPriceRange} setCategoryFilter={setCategoryFilter} shopData={shopData} sideBar={true} leftSide={leftSide} setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      </div>
      <div className="w-full h-auto my-28 flex flex-col gap-8">
        <div className="w-full h-auto flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div className="w-auto h-auto flex items-center justify-between sm:justify-start">
            <div className='w-auto h-auto flex lg:hidden' onClick={() => setFilterShopGrid(true)}>
              <MdFilterAlt className='text-stone-500 cursor-pointer' size={19} />
            </div>
            <div className="w-56 h-auto ml-6 border-b-2 border-stone-500">
              <SortOption sortOption={sortOption} handleSortChange={handleSortChange} />
            </div>
          </div>
          <div className="w-auto h-auto flex justify-end mt-4 sm:mt-0">
            <div className="text-stone-600">
              showing {currentProducts.length} of {shopData.length} results
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col gap-8">
          <div className="w-full h-full grid sm:grid-cols-2 gap-8">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="w-full h-auto flex justify-center items-center gap-2">
            {Array.from({ length: Math.ceil(filteredSortedData.length / productsPerPage) }).map((_, index) => (
              <button
                key={index}
                className={`px-4 py2 ${currentPage === index + 1 ? 'bg-accent text-white' : 'bg-gray-200 text-stone-600'}`}
                onClick={() => {
                  currentPageHandler(index + 1);
                }}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSideBar;
