import React from 'react';
import { RiInstagramFill, RiFacebookBoxFill, RiTwitterFill, RiTiktokFill } from 'react-icons/ri';

const SocialMedia = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-4">
      <h3 className="text-stone-800 font-medium text-xl">Social Media</h3>
      <div className="w-full flex gap-2">
        <RiInstagramFill className=" text-stone-400 hover:text-accent duration-200 transition-colors cursor-pointer" size={35} />
        <RiFacebookBoxFill className=" text-stone-400 hover:text-accent duration-200 transition-colors cursor-pointer" size={35} />
        <RiTwitterFill className=" text-stone-400 hover:text-accent duration-200 transition-colors cursor-pointer" size={35} />
        <RiTiktokFill className=" text-stone-400 hover:text-accent duration-200 transition-colors cursor-pointer" size={35} />
      </div>
    </div>
  );
};

export default SocialMedia;
