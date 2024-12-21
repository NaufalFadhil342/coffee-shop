import React from 'react';

const ServiceItem = ({ item }) => {
  return (
    <div className="w-full h-auto flex flex-col" key={item.id}>
      <div className="w-full h-60">
        <div className="w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${item.image})` }} />
      </div>
      <div className="w-full h-auto py-4 flex flex-col gap-4">
        <h3 className="text-stone-800 font-medium text-xl">{item.title}</h3>
        <p className="text-stone-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus vero ipsa quia, quos saepe sed dolorum ad fuga eligendi dolores.</p>
      </div>
    </div>
  );
};

export default ServiceItem;