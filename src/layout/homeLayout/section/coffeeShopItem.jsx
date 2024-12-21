import React, { useState } from 'react';
import { getRating } from '../../../utilities/getRating';
import Rating from '../../../components/rating';
import { MdOutlineShoppingCart, MdKeyboardArrowRight } from 'react-icons/md';
import { IoIosExpand } from 'react-icons/io';
import { motion } from 'framer-motion';
import { useCart } from '../../../context/cartContext';
import { useNotification } from '../../../context/notificationContext';
import { useNavigate } from 'react-router-dom';

const viewPath = '/shop/product-layout/singleProduct'

const CoffeeShopItem = ({ item }) => {
  const [onCart, setOnCart] = useState(false);
  const rating = getRating(item.like);
  const { addToCart } = useCart();
  const { addNotification } = useNotification();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(item);
    addNotification(`${item.name} has been added to your cart!`)
  };

  const handleView = () => {
    window.scrollTo(0, 0);
    navigate(viewPath)
  }

  return (
    <div className="w-full h-auto flex flex-col bg-white rounded-md overflow-hidden">
      <div className="w-full h-56 bg-stone-200 overflow-hidden flex items-center justify-center relative transition-all duration-200" onMouseEnter={() => setOnCart(true)} onMouseLeave={() => setOnCart(false)}>
        <img className="w-40 h-auto object-cover" src={item.image} alt={item.name} />
        <motion.div
          className="w-full h-full hidden lg:flex items-center justify-center absolute z-[2] bg-white/30 p-8"
          initial={{ opacity: 0 }}
          animate={{
            opacity: onCart ? 1 : 0,
          }}
          transition={{ duration: 0.25 }}
        >
          <button className="button w-full h-11 bg-accent uppercase text-white flex justify-between items-center gap-2 font-medium text-sm hover:bg-[#9D6842] transition-colors duration-200" onClick={handleAddToCart}>
            <MdOutlineShoppingCart size={18} /> <>Add to Cart</>
          </button>
        </motion.div>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-xl text-stone-800 font-medium">{item.name}</h3>
        <Rating maxStars={5} rating={rating} size={18} />
        <p className="text-accent">${item.price}</p>
        <div className='w-full flex justify-end items-center gap-2'>
          <button onClick={handleAddToCart} className='w-10 h-10 rounded-[100%] flex items-center justify-center lg:hidden border-2 border-accent bg-accent text-white hover:bg-[#9D6842] hover:cursor-pointer duration-200 transition-colors '><MdOutlineShoppingCart size={18} /></button>
          <button onClick={handleView} className='flex items-center justify-center lg:hidden w-10 h-10 rounded-[100%] border-2 border-accent text-accent bg-transparent hover:text-white hover:bg-accent hover:cursor-pointer duration-200 transition-colors'><IoIosExpand /></button>
          <button onClick={handleView} className='text-stone-800 hidden lg:flex items-center hover:text-accent duration-200 transition-colors hover:cursor-pointer'>View Detail <><MdKeyboardArrowRight size={20} /></></button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeShopItem;
