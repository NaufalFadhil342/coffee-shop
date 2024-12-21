import React from 'react';
import parallaxImg from '../../../assets/coffee-beans.webp';
import cafeLogo from '../../../assets/cup of coffee white.png';

const Parallax = () => {
  return (
    <div className="w-full h-auto bg-cover bg-no-repeat bg-center bg-fixed flex flex-col gap-4 items-center justify-center" style={{ backgroundImage: `url(${parallaxImg})` }}>
      <div className="w-full h-full px-[8%] py-28 bg-stone-800/80 flex flex-col items-center justify-center gap-4 relative">
        <div className="flex flex-col items-center absolute top-6 right-6 z-[5]">
          <img className="w-8 h-auto" src={cafeLogo} alt="Cafe Logo" />
          <p className="text-white font-playfair uppercase text-sm">Coffee</p>
        </div>
        <div className="w-4/5 h-auto flex flex-col items-center justify-center gap-4">
          <h1 className="w-5/6 text-white text-5xl uppercase text-center font-semibold">Try The Best Coffee In The City</h1>
          <p className="text-white text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic facere quod doloribus? Fugiat quasi corrupti, placeat dolorem unde voluptates officiis blanditiis. Rerum iure incidunt, dolores sint alias reprehenderit adipisci
            iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, omnis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
