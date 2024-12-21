import React from 'react';
import { motion } from 'framer-motion';

const Shipping = ({ shippingData, setSelectedShipping, isShippingOpen, setIsShippingOpen }) => {
  const shippingClickHandler = (data) => {
    setSelectedShipping(data);
    setIsShippingOpen(false);
  };

  return (
    <motion.div
      className="w-full h-auto overflow-hidden hidden"
      initial={{
        height: 0,
        display: 'none',
      }}
      animate={{
        height: isShippingOpen ? '100%' : 0,
        display: isShippingOpen ? 'block' : 'none',
      }}
      transition={{ duration: 0.3 }}
    >
      {shippingData.map((data) => (
        <div className="w-full h-auto py-4 flex flex-col gap-2 bg-transparent hover:bg-accent/15 duration-200 transition-colors cursor-default" key={data.id} onClick={() => shippingClickHandler(data)}>
          <div className="w-full flex justify-between items-center gap-8">
            <h3 className="text-stone-800 text-xl font-medium">{data.package}</h3>
            <div className="text-stone-800 text-xl font-medium">${data.price}</div>
          </div>
          <span className="text-stone-600">Arrived guaranteed: {data.delivery}</span>
        </div>
      ))}
    </motion.div>
  );
};

export default Shipping;
