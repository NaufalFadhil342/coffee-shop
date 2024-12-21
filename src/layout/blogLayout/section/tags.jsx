import React from 'react';

const tagData = ['Americano', 'Cappucino', 'Espresso', 'Latte', 'Macchiato'];

const Tags = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <h3 className="text-stone-800 font-medium text-xl">Tags</h3>
      <div className="w-full flex flex-wrap gap-2 ">
        {tagData.map((tag, index) => (
          <span key={index} className="w-auto h-9 px-2 flex items-center text-stone-800 bg-transparent hover:bg-stone-300/50 duration-200 transition-colors hover:cursor-pointer">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Tags;
