import React, { createContext, useState, useContext } from 'react';
import { useFilteredSorted } from '../hook/useFilteredSorted';

const FilterSortContext = createContext();

const FilterSortProvider = ({ children, shopData }) => {
  const [sortOption, setSortOption] = useState('default sorting');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSortedData = useFilteredSorted(shopData, sortOption, priceRange, categoryFilter, searchQuery);

  return <FilterSortContext.Provider value={{ filteredSortedData, setSortOption, setPriceRange, setCategoryFilter, sortOption, shopData, setSearchQuery, searchQuery }}>{children}</FilterSortContext.Provider>;
};

const useFilterSort = () => {
  return useContext(FilterSortContext);
};

export { FilterSortProvider, useFilterSort };
