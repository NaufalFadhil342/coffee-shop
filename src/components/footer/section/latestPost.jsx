import React from 'react';
import { blogMainData } from '../../../data/dummyCoffee';

const LatestPost = () => {
  const splitBlogData = blogMainData.slice(3, 7);

  return (
    <div className="w-full h-auto">
      <div className="text-white text-xl font-medium">Latest Post</div>
      <div className="w-full h-auto flex flex-col gap-2 mt-6">
        {splitBlogData.map((post) => (
          <div className="flex flex-col" key={post.id}>
            <h3 className="text-sm text-white font-medium">{post.title}</h3>
            <div className="text-xs text-accent">{post.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestPost;
