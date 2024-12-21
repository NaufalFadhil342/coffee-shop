import React from 'react';
import coffeeMaker from '../../../../assets/coffee-machine.svg';
import coffeeGrinder from '../../../../assets/coffee-grinder.svg';
import brewingCoffee from '../../../../assets/brewing-methods.svg';
import frenchPress from '../../../../assets/french-press.svg';

const OurService = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-16 px-[8%] py-28">
      <div className="w-full h-auto flex flex-col gap-4 items-center">
        <h1 className="text-stone-800 text-5xl font-semibold uppercase">Our Service</h1>
        <div className="w-10 h-[2px] bg-accent" />
      </div>
      <div className="w-full h-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="w-full h-auto flex flex-col gap-4">
          <div className="w-full h-auto flex justify-center">
            <img className="w-28 h-auto" src={coffeeMaker} alt="coffee maker" />
          </div>
          <div className="text-xl text-stone-800 uppercase font-medium text-center">CoffeeMaker</div>
          <div className="text-stone-600 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, at.</div>
        </div>
        <div className="w-full h-auto flex flex-col gap-4">
          <div className="w-full h-auto flex justify-center -mt-3">
            <img className="w-32 h-auto" src={coffeeGrinder} alt="coffee grinder" />
          </div>
          <div className="text-xl text-stone-800 uppercase font-medium text-center -mt-1">Coffee Grinder</div>
          <div className="text-stone-600 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, at.</div>
        </div>
        <div className="w-full h-auto flex flex-col gap-4">
          <div className="w-full h-auto flex justify-center -mt-3">
            <img className="w-36 h-auto" src={brewingCoffee} alt="brewing coffee" />
          </div>
          <div className="text-xl text-stone-800 uppercase font-medium text-center -mt-5">Brewing Coffee</div>
          <div className="text-stone-600 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, at.</div>
        </div>
        <div className="w-full h-auto flex flex-col gap-4">
          <div className="w-full h-auto flex justify-center">
            <img className="w-28 h-auto" src={frenchPress} alt="french press" />
          </div>
          <div className="w-auto h-8 overflow-y-hidden text-xl text-stone-800 uppercase font-medium text-center">Espresso Machine</div>
          <div className="text-stone-600 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, at.</div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
