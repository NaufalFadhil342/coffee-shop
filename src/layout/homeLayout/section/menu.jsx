import React from 'react';
import { useNavigate } from 'react-router-dom';
import SimpleMenu from '../../../layout/menuLayout/simpleMenu';

const Menu = () => {
  const navigate = useNavigate();

  const handleMenuLink = (path) => {
    window.scrollTo(0, 0);
    navigate(path)
  }

  return (
    <div className="w-full h-auto flex flex-col gap-14 py-28">
      <div className="w-full h-auto flex flex-col items-center gap-4">
        <div className="text-accent font-medium">Coffee Mate</div>
        <h1 className="text-stone-800 text-5xl text-center uppercase font-semibold">Our Favorite Coffee</h1>
        <div className="w-10 h-[2px] bg-accent" />
      </div>
      <div className="w-full h-auto">
        <SimpleMenu mainPage />
      </div>
      <div className="w-full h-auto flex justify-center">
        <button className="button w-auto h-11 bg-accent text-white font-medium flex items-center hover:bg-[#9D6842] transition-colors duration-200" onClick={() => handleMenuLink('/menu/our-menu')}>
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Menu;
