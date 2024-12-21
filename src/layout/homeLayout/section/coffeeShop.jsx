import React from 'react';
import { shopData } from '../../../data/dummyCoffee';
import CoffeeShopItem from './coffeeShopItem';
import coffeeShopBg from '../../../assets/coffee-farm.webp';

const CoffeeShop = () => {
  // change or update the code with your api
  const fitlerShopData = shopData.slice(0, 4)

  return (
    <div className="w-full h-auto bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: `url(${coffeeShopBg})` }}>
      <div className="w-full h-full px-[8%] py-28 bg-stone-800/75 flex flex-col gap-14">
        <div className="w-full h-auto flex flex-col items-center gap-4">
          <div className="text-white font-medium">Coffee Mate</div>
          <h1 className="text-center text-5xl text-white font-semibold uppercase">Online Coffee Shop</h1>
          <div className="w-10 h-[2px] bg-white" />
        </div>
        <div className="w-full h-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {fitlerShopData.map((item) => (
            <CoffeeShopItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoffeeShop;
