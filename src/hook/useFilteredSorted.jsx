import { useMemo } from 'react';

export const useFilteredSorted = (shopData, sortOption, priceRange, categoryFilter, searchQuery) => {
  return useMemo(() => {
    let filteredData = shopData.filter((product) => parseFloat(product.price) >= priceRange[0] && parseFloat(product.price) <= priceRange[1]);

    if (categoryFilter) {
      filteredData = filteredData.filter((product) => product.type.toLowerCase() === categoryFilter.toLowerCase());
    }

    if (searchQuery) {
      filteredData = filteredData.filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    switch (sortOption) {
      case 'sort by latest':
        filteredData = filteredData.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'sort by popularity':
        filteredData = filteredData.sort((a, b) => b.like - a.like);
        break;
      case 'sort by low to high':
        filteredData = filteredData.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case 'sort by high to low':
        filteredData = filteredData.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      default:
        break;
    }
    return filteredData;
  }, [categoryFilter, priceRange, shopData, sortOption, searchQuery]);
};
