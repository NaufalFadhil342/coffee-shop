import React from 'react';

const MenuItem = ({ menu }) => {
  return (
    <div className="w-full h-auto flex items-center gap-6 md:gap-2 lg:gap-6">
      <div className="min-w-fit h-auto overflow-hidden rounded-full">
        <img className="w-[4.25rem] h-16 object-cover" src={menu.image} alt={menu.title} />
      </div>
      <div className="w-full h-auto">
        <div className="w-full h-auto flex items-end xm:gap-6 md:gap-2 lg:gap-6">
          <h3 className="min-w-fit text-xl text-stone-800 font-medium">{menu.title}</h3>
          <div className="w-full h-[2px] hidden xm:block bg-beige -translate-y-1" />
        </div>
        <p className="h-6 text-sm text-accent overflow-y-hidden">Fresh brewed coffee and steamed milk</p>
      </div>
      <div className="w-auto h-auto -mt-4">
        <div className="text-stone-600 text-xl">${menu.price}</div>
      </div>
    </div>
  );
};

export default MenuItem;
