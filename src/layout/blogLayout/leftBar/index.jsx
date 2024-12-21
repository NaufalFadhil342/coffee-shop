import React from 'react';
import Bar from '../bar';
import { blogMainData } from '../../../data/dummyCoffee';
import BlogItem from '../section/blogItem';

const LeftBar = () => {
  return (
    <div className="w-full h-auto flex flex-col-reverse lg:flex-row gap-8 py-28 px-[8%]">
      <div className="w-full lg:w-[25rem] h-auto">
        <Bar />
      </div>
      <div className="w-full h-auto flex flex-col gap-10">
        <div className="w-full h-auto flex flex-col gap-10">
          {blogMainData.map((item) => (
            <BlogItem key={item.id} id={item.id} title={item.title} image={item.image} creator={item.creator} category={item.category} date={item.date} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
