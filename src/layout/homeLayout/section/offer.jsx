import React from 'react';
import { GiCoffeeCup, GiCoffeeBeans, GiBread } from 'react-icons/gi';
import { TbCup } from 'react-icons/tb';
import OfferItem from './offerItem';

const Offer = () => {
  return (
    <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
      <OfferItem icon={<GiCoffeeCup />} title="Type of Coffee" />
      <OfferItem icon={<GiCoffeeBeans />} title="Bean Varieties" />
      <OfferItem icon={<GiBread />} title="Coffee Pastry" />
      <OfferItem icon={<TbCup />} title="Take Away" />
    </div>
  );
};

export default Offer;
