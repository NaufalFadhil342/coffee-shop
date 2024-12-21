import React from 'react';

const OfferItem = ({ icon, title }) => {
  return (
    <div className="w-auto h-auto flex flex-col items-center gap-2">
      <span className="text-accent text-8xl">{icon}</span>
      <h2 className="text-stone-800 text-2xl font-semibold">{title}</h2>
      <p className="text-center text-stone-600 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis dolorem fugiat id.</p>
    </div>
  );
};

export default OfferItem;
