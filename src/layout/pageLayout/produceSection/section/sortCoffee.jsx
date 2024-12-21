import React from 'react';

const sortCoffeImg = 'https://images.unsplash.com/photo-1525088553748-01d6e210e00b?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const SortCoffee = ({ check }) => {
  return (
    <div className="w-full h-auto flex">
      <div className="w-full h-auto lg:flex-50">
        <div className="w-full h-full hidden lg:block bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${sortCoffeImg})` }} />
      </div>
      <div className="w-full h-full flex-100 flex flex-col gap-8 bg-accent/15 lg:bg-transparent lg:flex-50 py-28 px-[8%] lg:pr-[8%] lg:pl-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-stone-800 font-semibold text-5xl uppercase">Sorting Coffee Beans</h1>
          <div className="w-20 h-[2px] bg-accent" />
        </div>
        <div className="flex flex-col gap-4">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim odio, sapiente exercitationem incidunt obcaecati totam maiores inventore libero minima animi asperiores dicta cum dolore alias quos laboriosam repellat eius
            excepturi.
          </p>
          <ul className="w-full flex flex-col list-none">
            <li className="w-full flex items-center gap-2">
              <span className="text-accent text-lg">{check}</span> <span className="text-stone-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </li>
            <li className="w-full flex items-center gap-2">
              <span className="text-accent text-lg">{check}</span> <span className="text-stone-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </li>
            <li className="w-full flex items-center gap-2">
              <span className="text-accent text-lg">{check}</span> <span className="text-stone-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SortCoffee;
