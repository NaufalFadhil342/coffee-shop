import React from 'react';
import { serviceData } from '../../../data/dummyCoffee';
import ServiceItem from './serviceItem';

const Service = () => {
  return (
    <div className="w-full h-auto px-[8%] py-28 flex flex-col gap-16 bg-accent/15">
      <div className="w-full h-auto flex flex-col items-center gap-4">
        <div className="text-accent font-medium">Coffee Mate</div>
        <h1 className="text-5xl text-center font-semibold text-stone-800 uppercase">Coffee Herald</h1>
        <div className="w-10 h-[2px] bg-accent" />
      </div>
      <div className="w-full h-auto flex flex-col lg:flex-row gap-8">
        {serviceData.map((item) => (
          <ServiceItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Service;