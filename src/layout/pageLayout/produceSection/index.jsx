import React from 'react';
import { MdCheck } from 'react-icons/md';
import SortCoffee from './section/sortCoffee';
import RoasterMachine from './section/roasterMachine';
import RoasterCoffee from './section/roasterCoffee';
import PackCoffee from './section/packCoffee';

const ProduceSection = () => {
  return (
    <div className="w-full h-auto flex flex-col">
      <SortCoffee check={<MdCheck />} />
      <RoasterMachine check={<MdCheck />} />
      <RoasterCoffee check={<MdCheck />} />
      <PackCoffee check={<MdCheck />} />
    </div>
  );
};

export default ProduceSection;
