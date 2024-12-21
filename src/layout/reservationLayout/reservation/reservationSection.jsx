import React from 'react';
import ReservationForm from './section/reservationForm';

const ReservationSection = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center gap-8 px-[8%] py-28">
      <div className="w-3/4 h-auto flex flex-col items-center gap-4">
        <h1 className="text-5xl text-stone-800 font-semibold uppercase text-center">Make a Reservation</h1>
        <div className="w-10 h-[2px] bg-accent" />
        <p className="w-full text-stone-600 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium praesentium placeat, asperiores recusandae est fugit.</p>
      </div>
      <div className="w-full lg:w-4/5 h-auto">
        <ReservationForm />
      </div>
    </div>
  );
};

export default ReservationSection;