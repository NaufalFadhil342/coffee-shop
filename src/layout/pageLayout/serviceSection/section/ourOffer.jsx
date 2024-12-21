import React from 'react';
import { offeringData } from '../../../../data/dummyCoffee';

const OurOffer = () => {
  return (
    <div className="w-full h-auto px-[8%] py-28 flex flex-col gap-10">
      <div className="w-full h-auto flex flex-col gap-4 items-center">
        <h1 className="text-center text-5xl font-semibold uppercase text-stone-800">What We Offer?</h1>
        <div className="w-10 h-[2px] bg-accent" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {offeringData.map((offer) => (
          <div className="w-full h-auto p-6 bg-accent/10 border-2 border-accent rounded-lg flex flex-col gap-2 text-stone-800" key={offer.id}>
            <div className="w-auto h-auto mx-auto">
              <span className="text-5xl">{offer.icons}</span>
            </div>
            <h3 className="text-xl font-medium text-center">{offer.title}</h3>
            <p className="text-stone-600 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, aspernatur.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurOffer;
