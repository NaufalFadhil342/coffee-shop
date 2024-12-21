import React from 'react';
import OurService from './section/ourService';
import OurOffer from './section/ourOffer';
import OurCoffee from './section/ourCoffee';
import Brands from '../element/brands';

const ServiceSection = () => {
  return (
    <div className="w-full h-auto flex flex-col">
      <OurService />
      <OurCoffee />
      <OurOffer />
      <Brands />
    </div>
  );
};

export default ServiceSection;
