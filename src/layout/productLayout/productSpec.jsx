import React from 'react';

const ProductSpec = ({ products }) => {
  return (
    <div className="w-full h-auto flex flex-col mt-4">
      <div className="w-auto flex items-center gap-2 text-gray-700">
        <span className="font-semibold">SKU:</span>
        <div>15</div>
      </div>
      <div className="w-auto flex items-center gap-2 text-gray-700">
        <span className="font-semibold">CATEGORY:</span>
        <div>{products.type}</div>
      </div>
      <span className="w-auto flex items-center gap-2 text-gray-700">
        <span className="font-semibold">TAG:</span>
        <div>{products.tag}</div>
      </span>
    </div>
  );
};

export default ProductSpec;
