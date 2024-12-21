import React from 'react';
import { menuData } from '../../../data/dummyCoffee';
import Menu from './section/menu';

const OurMenuSection = () => {
  return (
    <div className="w-full h-auto flex flex-col">
      <div className="w-full h-auto flex flex-col gap-10 py-28">
        <div className="w-full flex flex-col items-center gap-4">
          <h1 className="text-stone-800 text-5xl text-center font-semibold uppercase">Hot Beverages</h1>
          <div className="w-10 h-[2px] bg-accent" />
        </div>
        <div className="w-full h-auto flex flex-col lg:flex-row gap-8 justify-between px-[8%]">
          <Menu menuData={menuData} />
          <Menu menuData={menuData} />
        </div>
      </div>
      <div className="w-full h-auto flex flex-col gap-10 py-28 bg-accent/10">
        <div className="w-full flex flex-col items-center gap-4">
          <h1 className="text-stone-800 text-5xl text-center font-semibold uppercase">Iced Beverages</h1>
          <div className="w-10 h-[2px] bg-accent" />
        </div>
        <div className="w-full h-auto flex flex-col lg:flex-row gap-8 justify-between px-[8%]">
          <Menu menuData={menuData} />
          <Menu menuData={menuData} />
        </div>
      </div>
    </div>
  );
};

export default OurMenuSection;
