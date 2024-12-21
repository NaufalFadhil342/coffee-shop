import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const Favorit = (props) => {
  const navigate = useNavigate();

  const shopLink = 'shop/shop-layout/right-side-shop';

  const goToShopHandler = () => {
    navigate(shopLink);
    props.setFavoritOpen(false);
  };

  const WishListItems = () => {
    if (props.wishlistItems === 0) {
      return (
        <div className="w-full h-auto flex flex-col items-center justify-center py-7 gap-3 text-accent ">
          <span className="text-3xl">{props.cartIcon}</span>
          <h1 className="text-3xl text-center -mt-5">No Wishlist Added</h1>
          <button className="button h-9 bg-accent hover:bg-[#9D6842] text-white" onClick={goToShopHandler}>
            Go to Shop
          </button>
        </div>
      );
    }
  };

  return (
    <AnimatePresence>
      {props.favoritOpen && (
        <div className="w-[25rem] h-screen absolute z-[5] top-0 right-0 overflow-hidden">
          <motion.div
            className="absolute top-0 right-0 py-8 w-full h-full bg-secondary flex flex-col gap-10 p-8 z-[5]"
            initial={{
              right: '-25rem',
              visibility: 'hidden',
            }}
            animate={{
              right: '0rem',
              visibility: 'visible',
              transition: { delay: 0.25 },
            }}
            exit={{
              right: '-25rem',
              visibility: 'hidden',
              transition: { delay: 0.5 },
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full flex justify-end">
              <button className="text-3xl font-semibold text-accent hover:text-gray-800 transition-colors duration-300" onClick={() => props.setFavoritOpen()}>
                X
              </button>
            </div>
            <WishListItems />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Favorit;
