import React from 'react';
import { blogMainData } from '../../../data/dummyCoffee';
import BlogItem from '../section/blogItem';

const FullWidth = ({ fullWidth }) => {
  return (
    <div className="w-full h-auto py-28 px-[8%]">
      <div className="w-full h-auto flex flex-col gap-10">
        <div className="w-full h-auto flex flex-col gap-10">
          {blogMainData.map((item) => (
            <BlogItem key={item.id} id={item.id} title={item.title} image={item.image} creator={item.creator} category={item.category} date={item.date} fullWidth={fullWidth} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullWidth;