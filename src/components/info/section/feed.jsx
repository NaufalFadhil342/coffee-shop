import React from 'react';
import { motion } from 'framer-motion';
import { RiInstagramLine } from 'react-icons/ri';

const Feed = (props) => {
  const { item, openFeed, feedIsOpen, feedIsClosed, id } = props;

  const linkToInsta = () => {
    window.open('https://www.instagram.com/explore/search/keyword/?q=%23cafe', '_blank');
  };

  return (
    <div className="w-full h-20 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${item.feed})` }} onMouseEnter={() => feedIsOpen(id)} onMouseLeave={feedIsClosed}>
      <motion.div
        className="w-full h-full bg-stone-800/50 relative"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: openFeed === id ? 1 : 0,
        }}
        transition={{ duration: 0.25 }}
        onClick={linkToInsta}
      >
        <RiInstagramLine size={18} className="text-white hover:text-stone-200 duration-200 transition-colors hover:cursor-pointer absolute z-[2] top-1 right-1" />
      </motion.div>
    </div>
  );
};

export default Feed;
