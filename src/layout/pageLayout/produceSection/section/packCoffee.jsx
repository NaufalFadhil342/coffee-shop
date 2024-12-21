import React from 'react';

const packCoffeeImg = 'https://images.unsplash.com/photo-1542238060-3d3fc9856473?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const PackCoffee = ({ check }) => {
  return (
    <div className="w-full h-auto flex">
      <div className="w-full h-full flex-100 lg:flex-50 flex flex-col gap-8 py-28 px-[8%] lg:pl-[8%] lg:pr-10 bg-stone-400/15">
        <div className="flex flex-col gap-4">
          <h1 className="text-stone-800 text-5xl font-semibold uppercase">Packaging Coffee</h1>
          <div className="w-20 h-[2px] bg-accent" />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-stone-800">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium nulla est reiciendis totam sed, sequi natus itaque, quaerat earum aliquam quo perferendis vel vitae. Doloribus libero consectetur unde esse officia.
          </p>
          <ul className="list-none flex flex-col">
            <li className="flex items-center gap-2">
              <span className="text-lg text-accent">{check}</span>
              <span className="text-sm text-stone-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-lg text-accent">{check}</span>
              <span className="text-sm text-stone-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-lg text-accent">{check}</span>
              <span className="text-sm text-stone-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-auto lg:flex-50">
        <div className="w-full h-full hidden lg:block bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${packCoffeeImg})` }} />
      </div>
    </div>
  );
};

export default PackCoffee;
