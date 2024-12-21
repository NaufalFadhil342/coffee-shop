import React from 'react';
import { motion } from 'framer-motion';

const MobileCart = ({ shopOpen, children, toggleState }) => {
    const handleClose = (e) => {
        if (e.target === e.currentTarget) {
            toggleState('cartIsOpen');
        }
    }

    return (
        <motion.div
            className='w-full h-full left-0 top-0 fixed z-[15] bg-stone-800/80 flex justify-center items-center sm:hidden py-8 px-[8%]'
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
            onClick={handleClose}
        >
            <div className="cartItem w-full h-auto bg-secondary drop-shadow-lg rounded p-6">
                {children}
            </div>
        </motion.div>
    )
}

export default MobileCart;