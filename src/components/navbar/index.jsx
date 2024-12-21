import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiGridFill, RiMenuFill } from 'react-icons/ri';
import { IoMdSearch } from 'react-icons/io';
import Cart from '../cart';
import NavSearch from './navSearch';
import Info from '../info';
import { MainLink } from './mainLink';
import { MobileNavlink } from './mobileLink/mobileNavlink';

const Navbar = ({ isScrolled }) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    searchIsOpen: false,
    cartIsOpen: false,
    infoIsOpen: false,
  });
  const [showMobileLink, setShowMobileLink] = useState(false);

  const toggleState = (key) => {
    setState((prevState) => ({
      ...prevState,
      searchIsOpen: false,
      cartIsOpen: false,
      infoIsOpen: false,
      [key]: !prevState[key],
    }));
  };

  const openMobileLink = () => setShowMobileLink(!showMobileLink);

  const { searchIsOpen, cartIsOpen, infoIsOpen } = state;

  const handleMouseEnter = () => setState((prevState) => ({ ...prevState, cartIsOpen: true }));
  const handleMouseLeave = () => setState((prevState) => ({ ...prevState, cartIsOpen: false }));

  return (
    <div className={`px-[8%] h-24 flex justify-between items-center gap-8 bg-transparent top-0 left-0 ${isScrolled ? 'w-screen fixed left-0 top z-10 bg-white' : 'w-full absolute'}`}>
      <div className='block hover:cursor-pointer lg:hidden' onClick={openMobileLink}>
        <RiMenuFill className={isScrolled ? 'text-stone-800' : 'text-white'} size={25} />
      </div>
      <div className="w-0 lg:w-full h-full">
        <MobileNavlink showMobileLink={showMobileLink} setShowMobileLink={setShowMobileLink} />
        <MainLink isScrolled={isScrolled} />
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <h1 className={`text-4xl font-bold hover:text-accent cursor-pointer transition-colors duration-300 ${isScrolled ? 'text-stone-800' : 'text-white'}`} onClick={() => navigate('/')}>
          Coffee
        </h1>
      </div>
      <div className="w-auto h-full flex justify-end gap-4">
        <Cart
          isScrolled={isScrolled}
          shopOpen={cartIsOpen}
          setShopOpen={(isOpen) =>
            setState((prevState) => ({
              ...prevState,
              cartIsOpen: isOpen,
            }))
          }
          toggleState={toggleState}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
        <div className="w-auto h-full py-3 flex items-center">
          <div className="w-full h-full flex items-center relative">
            <IoMdSearch className={`text-3xl cursor-pointer hover:text-accent transition-colors duration-300 ${isScrolled ? 'text-stone-800' : 'text-white'}`} onClick={() => toggleState('searchIsOpen')} />
          </div>
          <NavSearch
            searchIsOpen={searchIsOpen}
            setSearchIsOpen={(isOpen) =>
              setState((prevState) => ({
                ...prevState,
                searchIsOpen: isOpen,
              }))
            }
            isScrolled={isScrolled}
          />
        </div>
        <div className="w-auto h-full hidden sm:flex items-center py-3">
          <RiGridFill className={`text-3xl cursor-pointer hover:text-accent transition-colors duration-300 ${isScrolled ? 'text-stone-800' : 'text-white'}`} onClick={() => toggleState('infoIsOpen')} />
          <Info
            infoOpen={infoIsOpen}
            setInfo={(isOpen) =>
              setState((prevState) => ({
                ...prevState,
                infoIsOpen: isOpen,
              }))
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
