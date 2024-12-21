import React from 'react';

const Cafe = ({ image, title, className, listData, icon }) => {
  return (
    <div className={className}>
      <div className="sm:flex-50 w-full h-full flex flex-col items-center justify-center gap-4 p-8">
        <span className="text-5xl text-stone-800">{icon}</span>
        <h2 className="text-3xl text-stone-800 text-center font-semibold">{title}</h2>
        <ul className="w-full h-auto flex flex-col items-center list-none">
          {listData.map((item, index) => (
            <li key={index} className="text-stone-600 font-medium">
              {item.list}
            </li>
          ))}
        </ul>
      </div>
      <div className="sm:flex-50 w-full h-auto hidden sm:flex">
        <div className="w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${image})` }} />
      </div>
    </div>
  );
};

export default Cafe;
