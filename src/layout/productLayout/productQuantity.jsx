import React from 'react';
import { GrShop } from 'react-icons/gr';

const ProductQuantity = ({ addToCart }) => {


  return (
    <div className="w-full h-auto mt-4">
      <button className="button w-auto h-11 bg-accent text-white flex items-center gap-4 hover:bg-[#9D6842] hover:cursor-pointer" onClick={addToCart}>
        <GrShop size={20} />
        <>Add to Cart</>
      </button>
    </div>
  );
};

export default ProductQuantity;
