import React from 'react';
import { productData } from '../../../data/dummyCoffee';

const DescProduct = () => (
  <div className="w-full h-auto flex flex-col gap-6">
    <p className="text-gray-500 text-center">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quibusdam assumenda nulla expedita, dolor a suscipit neque hic aliquam doloremque non numquam odit voluptates provident molestiae accusamus magni nam quasi. Lorem ipsum
      dolor sit amet consectetur, adipisicing elit. Rem, corporis.
    </p>
    <div className="w-full lg:w-2/3 h-auto mx-auto">
      {productData.map((data) => (
        <div key={data.id} id={data.id} className="w-full h-14 flex odd:border-y border-gray-500/50">
          <div className="w-full h-full flex-50 flex items-center font-medium px-6 text-gray-700">{data.name}</div>
          <div className="w-full h-full flex-50 flex items-center font-medium px-6 text-gray-500">{data.text}</div>
        </div>
      ))}
    </div>
  </div>
);

export default DescProduct;
