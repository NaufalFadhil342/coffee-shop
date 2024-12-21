import React from 'react';
import OpeningHours from './section/openingHours';
import LatestPost from './section/latestPost';
import ContactUs from './section/contactUs';
import OtherLocations from './section/otherLocation';
import { Link } from 'react-router-dom';

const footerImage = 'https://images.unsplash.com/photo-1508766917616-d22f3f1eea14?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const Footer = () => {
  return (
    <div className="w-full h-auto flex flex-col">
      <div className="w-full h-auto bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${footerImage})` }}>
        <div className="w-full h-full px-[8%] py-[5rem] bg-stone-900/85 grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          <OpeningHours />
          <LatestPost />
          <ContactUs />
          <OtherLocations />
        </div>
      </div>
      <div className="px-[3rem] py-6 w-full h-auto flex flex-col md:flex-row md:justify-between items-center gap-6 bg-stone-900">
        <div className="w-auto h-full text-white font-medium text-[15px]">
          @ 2024 <Link className="text-white hover:text-accent duration-200 transition-colors hover:cursor-pointer">naudhil.com</Link>, All rights reserved.
        </div>
        <div className="w-auto h-full">
          <h1 className="text-4xl font-bold text-white">Coffee</h1>
        </div>
        <div className="w-auto h-full flex items-center">
          <p className="text-white font-medium text-[15px]">Start your day with coffee</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
