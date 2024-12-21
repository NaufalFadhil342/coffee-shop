import React from 'react';
import { RiInstagramFill, RiLinkedinBoxFill, RiTwitterFill, RiTiktokFill } from 'react-icons/ri';

const OurTeam = ({ team }) => {
  return (
    <div key={team.id} className="w-full h-auto border-b-4 border-stone-400">
      <div className="w-full h-64 overflow-hidden rounded-t-xl">
        <img className="w-full h-auto" src={team.profile} alt={team.name} />
      </div>
      <div className="w-full h-auto p-4 flex flex-col items-center gap-4">
        <div className="w-full flex flex-col items-center">
          <h3 className="text-stone-800 text-2xl font-semibold">{team.name}</h3>
          <p className="text-accent text-lg font-medium">{team.job}</p>
          <p className="text-stone-600 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni iste, sapiente pariatur sed a itaque.</p>
        </div>
        <div className="w-full flex justify-center items-center gap-4">
          <RiInstagramFill className="text-stone-400 text-2xl hover:text-accent duration-200 transition-colors" />
          <RiLinkedinBoxFill className="text-stone-400 text-2xl hover:text-accent duration-200 transition-colors" />
          <RiTwitterFill className="text-stone-400 text-2xl hover:text-accent duration-200 transition-colors" />
          <RiTiktokFill className="text-stone-400 text-2xl hover:text-accent duration-200 transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
