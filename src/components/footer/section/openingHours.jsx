import React from 'react';

const OpeningHours = () => {
  return (
    <div className="w-full h-auto">
      <div className="text-xl font-medium text-white">Opening Hours</div>
      <div className="w-full h-fit flex flex-col gap-2 mt-6">
        <div className="w-full h-fit flex justify-between gap-2 text-sm">
          <p className="w-auto text-white ">Monday :</p>
          <span className="text-accent ">Closed</span>
        </div>
        <div className="w-full h-fit flex justify-between gap-2 text-sm">
          <p className="w-auto text-white">Tuesday :</p>
          <span className="w-auto flex items-center gap-1 text-beige">9.00 - 22.00</span>
        </div>
        <div className="w-full h-fit flex justify-between gap-2 text-sm">
          <p className="w-auto text-white ">Wednesday :</p>
          <span className="w-auto flex items-center gap-1 text-beige">9.00 - 22.00</span>
        </div>
        <div className="w-full h-fit flex justify-between gap-2 text-sm">
          <p className="w-auto text-white ">Thursday :</p>
          <span className="w-auto flex items-center gap-1 text-beige">9.00 - 22.00</span>
        </div>
        <div className="w-full h-fit flex justify-between gap-2 text-sm">
          <p className="w-auto text-white ">Friday :</p>
          <span className="w-auto flex items-center gap-1 text-beige">11.00 - 00.00</span>
        </div>
        <div className="w-full h-fit flex justify-between gap-2 text-sm">
          <p className="w-auto text-white ">Saturday :</p>
          <span className="w-auto flex items-center gap-1 text-beige">11.00 - 00.00</span>
        </div>
        <div className="w-full h-fit flex justify-between gap-2 text-sm">
          <p className="w-auto text-white">Sunday :</p>
          <span className="w-auto flex items-center gap-1 text-beige">9.00 - 22.00</span>
        </div>
      </div>
    </div>
  );
};

export default OpeningHours;
