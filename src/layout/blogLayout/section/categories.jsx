import React from 'react';
import { blogMainData } from '../../../data/dummyCoffee';
import { groupByCategory } from '../../../utilities/getGroupCategory';

const Categories = () => {
  const groupCategories = groupByCategory(blogMainData);

  return (
    <div className="w-full h-auto flex flex-col gap-4">
      <h3 className="text-stone-800 text-xl font-medium">Categories</h3>
      <ul className="w-full h-auto flex flex-col list-disc list-inside">
        {Object.entries(groupCategories).map(([category, count]) => (
          <li className="text-stone-600 cursor-pointer" key={category}>
            <span className="text-stone-600 hover:text-accent duration-200 transition-colors">{category}</span> <>({count})</>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
