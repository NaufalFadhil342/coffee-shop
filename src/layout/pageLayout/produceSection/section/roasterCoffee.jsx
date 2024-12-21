import React from 'react';

const roastedCoffeeImg = 'https://images.unsplash.com/photo-1537130508299-46ab547b4be3?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const RoasterCoffee = ({ check }) => {
  return (
    <div className="w-full h-auto flex">
      <div className="w-full h-auto lg:flex-50">
        <div className="w-full h-full hidden lg:block bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${roastedCoffeeImg})` }} />
      </div>
      <div className="w-full h-full flex flex-col flex-100 lg:flex-50 gap-8 bg-accent/15 lg:bg-transparent py-28 px-[8%] lg:pr-[8%] lg:pl-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-stone-800 font-semibold text-5xl uppercase">Roasting Coffee Beans</h1>
          <div className="w-20 h-[2px] bg-accent" />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-stone-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A quaerat nisi officia possimus assumenda, numquam, iusto illo perspiciatis expedita quam mollitia dolor suscipit error nemo. Reprehenderit consequatur ab quisquam fuga!
          </p>
          <ul className="list-none flex flex-col">
            <li className="w-full flex items-center gap-2">
              <span className="text-lg text-accent">{check}</span>
              <span className="text-sm text-stone-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
            </li>
            <li className="w-full flex items-center gap-2">
              <span className="text-lg text-accent">{check}</span>
              <span className="text-sm text-stone-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
            </li>
            <li className="w-full flex items-center gap-2">
              <span className="text-lg text-accent">{check}</span>
              <span className="text-sm text-stone-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RoasterCoffee;
