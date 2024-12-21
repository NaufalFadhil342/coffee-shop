import React, { useState, useEffect } from 'react';
import Booking from './section/booking';
import Service from './section/service';
import Parallax from './section/parallax';
import OurService from '../../layout/pageLayout/serviceSection/section/ourService';
import OurCoffee from '../../layout/pageLayout/serviceSection/section/ourCoffee';
import Menu from './section/menu';
import CoffeeShop from './section/coffeeShop';
import Gallery from './section/gallery';
import Producer from './section/producer';
import Blog from './section/blog';
import { IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-scroll';

const MainHome = () => {
  const [scrollToTop, setScrollToTop] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition > documentHeight * 0.1) {
      setScrollToTop(true);
    } else {
      setScrollToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full h-auto relative">
      <Booking />
      <Service />
      <Parallax />
      <OurService />
      <OurCoffee />
      <Menu />
      <CoffeeShop />
      <Gallery />
      <Blog />
      <Producer />
      {scrollToTop && (
        <Link to="top" smooth={true} duration={1000} className="fixed bottom-11 right-11 z-[5] w-10 h-10 flex items-center justify-center bg-accent text-white hover:bg-[#9D6842] hover:cursor-pointer transition-colors duration-200">
          <IoIosArrowUp size={30} />
        </Link>
      )}
    </div>
  );
};

export default MainHome;
