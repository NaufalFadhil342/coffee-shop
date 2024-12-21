import React from 'react';
import coffeeShop from '../../assets/coffee-shop.webp';
import { useNavigate } from 'react-router-dom';

const Hero = (props) => {
  const navigate = useNavigate();

  return (
    <div className={`w-full bg-repeat bg-cover bg-center ${props.homepage ? 'h-screen' : 'h-[75vh]'}`} style={{ backgroundImage: `url(${coffeeShop})` }} id="top">
      <div className="bg-black/60 w-full h-full py-12 px-[8%] flex flex-col justify-center items-center gap-6 text-white">
        <div className="w-full h-auto mt-10 flex flex-col gap-2 items-center text-center font-playfair font-bold">
          {props.homepage && <p className="text-xl">{props.text}</p>}
          <h1 className="text-5xl">{props.heading}</h1>
        </div>
        <div className="w-full h-auto flex flex-col xm:flex-row justify-center gap-4">
          {props.homepage && (
            <button className="button w-full xm:w-40 h-12 bg-accent hover:bg-[#9D6842]" onClick={() => navigate('/shop/shop-layout/grid-shop')}>
              Shop Now
            </button>
          )}
          {props.homepage && (
            <button className="button w-full xm:w-40 h-12 border border-secondary text-secondary hover:bg-secondary hover:text-gray-800" onClick={() => navigate('/menu/our-menu')}>
              View Menu
            </button>
          )}
          {!props.homepage && (
            <button className="button w-auto h-12 border-b border-secondary text-secondary hover:bg-secondary hover:text-gray-800" onClick={() => navigate('/')}>
              Back to Home Page
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
