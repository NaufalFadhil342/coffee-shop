import React from 'react';
import bookTablePng from '../../../assets/bookTable.png';
import BookTableForm from './section/bookTableForm';

const BookTable = ({ mainPage }) => {
  return (
    <div className={`w-full h-auto flex flex-col gap-10 ${mainPage ? 'bg-transparent' : 'bg-accent/15 px-[8%] py-28'}`}>
      <div className="w-full h-full flex gap-8">
        <div className="w-full h-auto flex flex-col gap-8">
          <div className={`flex flex-col gap-4 ${mainPage ? 'items-center' : ''}`}>
            {mainPage && <div className="text-accent font-medium">Coffee Mate</div>}
            <h1 className="text-stone-800 font-semibold text-5xl -ml-1 uppercase text-center lg:text-left">Reserve Your Table</h1>
            <div className={`h-[2px] bg-accent mx-auto lg:mx-0 ${mainPage ? 'w-10' : 'w-20'}`} />
          </div>
          <p className={`text-stone-600 mt-8 text-center lg:text-left ${mainPage ? 'text-center' : ''}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias aliquid quibusdam libero deleniti odio asperiores possimus consectetur doloribus eveniet minus nisi voluptates minima, impedit non nesciunt dolor reprehenderit
            dolorum corporis.
          </p>
          <div className={`w-full h-auto ${mainPage ? 'mt-8' : ''}`}>
            <BookTableForm mainPage={mainPage} />
          </div>
        </div>
        {!mainPage && (
          <div className="w-full h-full hidden lg:block">
            <img className="object-cover w-full h-auto" src={bookTablePng} alt="book table" />
          </div>
        )}
      </div>
    </div>
  );
};

export default BookTable;
