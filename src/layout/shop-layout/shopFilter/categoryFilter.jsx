import React from 'react';

const CategoryFilter = ({ setCategoryFilter }) => {
  const categories = ['All', 'Arabica', 'Robusta', 'Excelsa', 'Liberica', 'Luwak'];

  const handleCategoryData = (category) => {
    if (category === 'All') {
      setCategoryFilter('');
    } else {
      setCategoryFilter(category);
    }
  };

  return (
    <ul className="flex flex-col gap-2 items-start list-none">
      {categories.map((category) => (
        <li key={category} className="text-stone-600 font-medium text-base hover:text-accent transition-colors duration-300 cursor-pointer" onClick={() => handleCategoryData(category || '')}>
          {category === 'All' ? 'Default Coffee' : `${category} Coffee`}
        </li>
      ))}
    </ul>
  );
};

export default CategoryFilter;
