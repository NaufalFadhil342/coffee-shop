import React from 'react';

const OtherLocations = () => {
  return (
    <div className="w-full h-auto">
      <div className="text-xl font-medium text-white">Other Locations</div>
      <div className="w-full mt-6">
        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-medium text-white">Naudhil Coffee Shop</h3>
          <p className="text-xs text-beige -mt-1">Pancawati, Caringin 16730, Bogor</p>
        </div>
        <div className="flex flex-col gap-1 mt-4">
          <h3 className="text-sm font-medium text-white">Naudhil Coffee</h3>
          <p className="text-xs text-beige -mt-1">Cipanas, Cianjur 16630, Bogor</p>
        </div>
      </div>
    </div>
  );
};

export default OtherLocations;
