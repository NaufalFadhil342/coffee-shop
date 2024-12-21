import React from 'react';
import { motion } from 'framer-motion';

const PCcart = ({ shopOpen, handleMouseEnter, handleMouseLeave, children }) => {
  return (
    <motion.div
      className="cartItem w-[20rem] hidden sm:block h-auto absolute top-20 z-[2] right-0 bg-secondary drop-shadow-lg rounded p-6"
      initial={{
        opacity: 0,
        visibility: 'hidden',
      }}
      animate={{
        opacity: shopOpen ? 1 : 0,
        visibility: shopOpen ? 'visible' : 'hidden',
        transition: {
          delay: shopOpen ? 0 : 0.25,
        },
      }}
      transition={{ duration: 0.5 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  )
}

export default PCcart;