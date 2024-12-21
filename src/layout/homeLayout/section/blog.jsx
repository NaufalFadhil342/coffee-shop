import React from 'react';
import BlogItem from './blogItem';
import { blogMainData } from '../../../data/dummyCoffee';

const Blog = () => {
  // update or change the code on your own
  const splitBlogData = blogMainData.slice(0, 3);

  return (
    <div className="w-full h-auto mt-28 px-[8%] flex flex-col gap-16">
      <div className="w-full h-auto flex flex-col items-center gap-4">
        <div className="text-accent font-medium">Coffee Mate</div>
        <h1 className="text-stone-800 text-5xl font-semibold uppercase text-center">Our Latest News</h1>
        <div className="w-10 h-[2px] bg-accent" />
      </div>
      <div className="w-full h-auto flex flex-col lg:flex-row gap-8">
        {splitBlogData.map((item) => (
          <BlogItem key={item.id} id={item.id} title={item.title} creator={item.creator} category={item.category} image={item.image} date={item.date} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
