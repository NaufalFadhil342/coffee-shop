import React from 'react';
import cafe1 from '../../../../assets/cafe1.jpg';
import cafe2 from '../../../../assets/cafe2.jpg';
import coffee1 from '../../../../assets/coffee1.jpg';
import coffee2 from '../../../../assets/coffee2.jpg';
import Cafe from '../../element/cafe';
import { GiCoffeeCup, GiCoffeeBeans, GiBread } from 'react-icons/gi';
import { TbCup } from 'react-icons/tb';
import { coffeeBeans, coffeePastry, coffeeSizes, coffeeTypes } from '../../../../data/dummyCoffee';

const cafeImage = {
  img1: cafe1,
  img2: coffee1,
  img3: cafe2,
  img4: coffee2,
};

const OurCoffee = () => {
  return (
    <div className="w-full h-full grid lg:grid-cols-2">
      <Cafe image={cafeImage.img1} title="Coffee Types" className="w-full h-auto bg-accent/15 flex flex-row" listData={coffeeTypes} icon={<GiCoffeeCup />} />
      <Cafe image={cafeImage.img2} title="Coffee Beans" className="w-full h-auto bg-accent/0 sm:bg-accent/15 flex flex-row-reverse lg:flex-row" listData={coffeeBeans} icon={<GiCoffeeBeans />} />
      <Cafe image={cafeImage.img3} title="Coffee & Pastry" className="w-full h-auto bg-accent/15 flex flex-row lg:flex-row-reverse" listData={coffeePastry} icon={<GiBread />} />
      <Cafe image={cafeImage.img4} title="Coffee Sizes" className="w-full h-auto bg-accent/0 sm:bg-accent/15 flex flex-row-reverse" listData={coffeeSizes} icon={<TbCup />} />
    </div>
  );
};

export default OurCoffee;
