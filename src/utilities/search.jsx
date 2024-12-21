import React from 'react';

const Search = ({ searchInputRef }) => {
  return (
    <div className="w-full h-12">
      <input
        ref={searchInputRef}
        type="text"
        placeholder="Search"
        className="outline-transparent outline-0 border-none bg-transparent text-lg font-medium text-gray-500 rounded-md w-full h-full pl-3 placeholder:text-gray-500"
      />
    </div>
  );
};

export default Search;