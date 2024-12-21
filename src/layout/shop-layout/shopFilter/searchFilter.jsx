import React from 'react';
import { IoMdSearch } from 'react-icons/io';

const SearchFilter = ({ setSearchQuery, searchQuery }) => {
  return (
    <div className="w-full h-12 flex border-b-2 border-accent">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search product"
        className="outline-transparent outline-0 border-none bg-transparent text-lg font-medium text-stone-600 rounded-md w-full h-full pl-3 placeholder:text-stone-600"
      />
      <span className="h-full w-12 bg-transparent flex items-center justify-center text-stone-600 text-xl">
        <IoMdSearch size={25} className="rotate-90" />
      </span>
    </div>
  );
};

export default SearchFilter;
