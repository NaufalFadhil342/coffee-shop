import React from 'react';

const SortOption = ({ sortOption, handleSortChange }) => {
  return (
    <select name="sortOption" className="w-full h-8 px-1 outline-none font-medium" value={sortOption} onChange={handleSortChange}>
      <option value="default sorting">Default sorting</option>
      <option value="sort by latest">Sort by latest</option>
      <option value="sort by popularity">Sort by popularity</option>
      <option value="sort by low to high">Sort by price: low to high</option>
      <option value="sort by high to low">Sort by price: high to low</option>
    </select>
  );
};

export default SortOption;
