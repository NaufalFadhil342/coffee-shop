import React from 'react';

const TheStory = () => {
  return (
    <div className="w-full h-auto flex items-center flex-col gap-8 mt-8 px-[8%]">
      <div className="w-full h-auto flex flex-col items-center gap-4">
        <div className="text-accent font-medium">Our Story</div>
        <h1 className="w-3/4 lg:w-1/2 text-stone-800 font-semibold text-4xl uppercase text-center">Somethings bigger start from small things</h1>
        <div className="w-10 h-[2px] bg-accent" />
      </div>
      <div className="w-full lg:w-2/3 h-auto">
        <p className="text-stone-600 text-center text-[15px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In nesciunt, voluptas, facilis excepturi voluptatem dolores suscipit magni vitae pariatur ipsum autem est. Eos sed error expedita, voluptatibus ipsa ea! Impedit. Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. In nesciunt, voluptas, facilis excepturi voluptatem dolores suscipit magni vitae pariatur ipsum autem est. Eos sed error expedita, voluptatibus ipsa ea! Impedit.
        </p>
      </div>
    </div>
  );
};

export default TheStory;
