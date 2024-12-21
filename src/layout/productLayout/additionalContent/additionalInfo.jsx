import React from 'react';
import { specsData } from '../../../data/dummyCoffee';

const AdditionalInfo = () => {
  return (
    <div className="w-full h-auto flex flex-col">
      {specsData.map((data, index) => (
        <div key={index} className="w-full h-14 flex odd:border-y border-gray-500/50">
          <div className="w-full h-full px-6 flex-50 flex items-center justify-start text-gray-700 font-medium">{data.name}</div>
          <div className="w-full h-full px-6 flex-50 flex items-center justify-start text-gray-500 font-medium">{data.content}</div>
        </div>
      ))}
    </div>
  );
};

export default AdditionalInfo;
