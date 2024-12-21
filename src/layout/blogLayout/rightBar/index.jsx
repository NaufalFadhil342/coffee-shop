import React from 'react';
import Bar from '../bar';
import { blogMainData } from '../../../data/dummyCoffee';
import BlogItem from '../section/blogItem';
import { useSearch } from '../../../context/searchContext';

const RightBar = () => {
  const { searchTerm, setSearchTerm } = useSearch();

  const filteredBlog = blogMainData.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const clearingFunction = () => {
    setSearchTerm('')
  };

  return (
    <div className="w-full h-auto flex flex-col-reverse lg:flex-row-reverse py-28 px-[8%]">
      <div className="w-full lg:w-[25rem] h-auto">
        <Bar />
      </div>
      <div className="w-full h-auto flex flex-col gap-10">
        {searchTerm.length > 0 && (
          <div className='w-full flex justify-between items-center'>
            <p>Search result for: <span className='font-medium'>{searchTerm}</span></p>
            <button className='text-stone-600 text-lg font-medium hover:text-accent duration-200 transition-colors hover:cursor-pointer' onClick={clearingFunction}>x</button>
          </div>
        )}
        <div className="w-full h-auto flex flex-col gap-10">
          {filteredBlog.map((item) => (
            <BlogItem key={item.id} id={item.id} title={item.title} image={item.image} creator={item.creator} category={item.category} date={item.date} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightBar;
