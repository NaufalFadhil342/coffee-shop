import React from 'react';
import { RiTiktokFill, RiFacebookFill, RiInstagramLine, RiTwitterXLine } from 'react-icons/ri';

const ProductShare = () => {
  return (
    <div className="w-auto h-auto flex items-center gap-4 text-gray-700">
      <div className="font-semibold">SHARE:</div>
      <ul className="list-none w-auto flex items-center gap-2 ml-2">
        <li className="text-accent text-xl hover:text-gray-700 duration-200 transition-colors">
          <RiInstagramLine />
        </li>
        <li className="text-accent text-xl hover:text-gray-700 duration-200 transition-colors">
          <RiFacebookFill />
        </li>
        <li className="text-accent text-xl hover:text-gray-700 duration-200 transition-colors">
          <RiTiktokFill />
        </li>
        <li className="text-accent text-xl hover:text-gray-700 duration-200 transition-colors">
          <RiTwitterXLine />
        </li>
      </ul>
    </div>
  );
};

export default ProductShare;
