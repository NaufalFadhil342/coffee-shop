import React from 'react';

const roasterMachineImg = 'https://images.unsplash.com/photo-1561480337-8fdbbdd76aa3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const RoasterMachine = ({ check }) => {
  return (
    <div className="w-full h-auto flex">
      <div className="w-full h-full flex-100 lg:flex-50 flex flex-col gap-8 py-28 px-[8%] lg:pl-[8%] lg:pr-10 bg-stone-400/15">
        <div className="flex flex-col gap-4">
          <h1 className="text-stone-800 font-semibold text-5xl uppercase">Coffee Roasting Machine</h1>
          <div className="w-20 h-[2px] bg-accent" />
        </div>
        <div className="w-full flex flex-col gap-4">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ducimus cupiditate voluptatibus ratione, id commodi atque saepe aliquam culpa, error accusamus ipsa in porro iusto, voluptate doloribus quas sed mollitia.</p>
          <ul className="w-full flex flex-col list-none">
            <li className="flex items-center gap-2">
              <span className="text-accent text-lg">{check}</span>
              <span className="text-stone-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-accent text-lg">{check}</span>
              <span className="text-stone-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-accent text-lg">{check}</span>
              <span className="text-stone-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-auto lg:flex-50">
        <div className="w-full h-full hidden lg:block bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${roasterMachineImg})` }} />
      </div>
    </div>
  );
};

export default RoasterMachine;
