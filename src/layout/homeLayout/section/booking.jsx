import React from 'react';
import BookTable from '../../../layout/reservationLayout/bookTable';
import Offer from './offer';

const Booking = () => {
  return (
    <div className="w-full h-auto px-[8%] py-28 flex flex-col">
      <BookTable mainPage />
      <Offer />
    </div>
  );
};

export default Booking;
