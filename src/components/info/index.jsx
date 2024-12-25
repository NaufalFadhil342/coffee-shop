import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import cafeLogo from '../../assets/cup-of-coffee.svg';
import { RiTiktokFill, RiFacebookFill, RiInstagramLine, RiTwitterXLine } from 'react-icons/ri';
import Feed from './section/feed';
import { feeds } from '../../data/dummyCoffee';

const Info = ({ setInfo, infoOpen }) => {
  const [openFeed, setOpenFeed] = useState(null);

  const feedIsOpen = (id) => setOpenFeed(id);
  const feedIsClosed = () => setOpenFeed(null);

  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      setInfo(false);
    }
  }

  return (
    <AnimatePresence>
      {infoOpen && (
        <div className="w-full h-screen absolute z-[5] top-0 right-0 overflow-hidden p-8" onClick={handleClose}>
          <motion.div
            className="absolute top-0 right-0 w-[22rem] h-full overflow-y-auto bg-secondary flex flex-col gap-8 p-8 z-[5] "
            initial={{
              right: '-22rem',
            }}
            animate={{
              right: '0',
            }}
            exit={{
              right: '-22rem',
            }}
            transition={{ type: 'keyframes', duration: 0.5, delay: 0.25 }}
          >
            <button className="w-fit h-fit text-stone-800 text-3xl font-bold hover:text-accent duration-200 transition-colors cursor-pointer absolute top-5 right-6" onClick={() => setInfo(false)}>
              x
            </button>
            <div className="flex flex-col gap-2 items-center">
              <img className="w-[7rem] h-auto text-accent" src={cafeLogo} alt="Cafe Logo" />
              <h1 className="text-stone-800 font-playfair uppercase text-3xl">Coffee</h1>
            </div>
            <div className="w-full h-auto">
              <p className="text-stone-600 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ad alias quo. Amet et consequatur inventore nihil, nam expedita eos.</p>
            </div>
            <div className="w-full h-auto grid grid-cols-3 gap-4">
              {feeds.map((item, index) => (
                <Feed key={index} id={index} item={item} openFeed={openFeed} feedIsOpen={feedIsOpen} feedIsClosed={feedIsClosed} />
              ))}
            </div>
            <div className="w-full h-auto flex justify-center gap-4">
              <RiInstagramLine size={20} className="text-accent hover:text-stone-800 duration-200 transition-colors hover:cursor-pointer" />
              <RiFacebookFill size={20} className="text-accent hover:text-stone-800 duration-200 transition-colors hover:cursor-pointer" />
              <RiTwitterXLine size={20} className="text-accent hover:text-stone-800 duration-200 transition-colors hover:cursor-pointer" />
              <RiTiktokFill size={20} className="text-accent hover:text-stone-800 duration-200 transition-colors hover:cursor-pointer" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Info;
