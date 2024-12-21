import React from 'react';
import SocialMedia from './section/socialMedia';
import Tags from './section/tags';
import Categories from './section/categories';
import PopularPost from './section/popularPost';

const Bar = () => {
  return (
    <div className="w-full h-full flex flex-col gap-10">
      <div className="w-full">
        <PopularPost />
      </div>
      <div className="w-full">
        <Categories />
      </div>
      <div className="w-full">
        <Tags />
      </div>
      <div className="w-full">
        <SocialMedia />
      </div>
    </div>
  );
};

export default Bar;
