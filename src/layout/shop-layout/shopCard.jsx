import React from 'react';
import Rating from '../../components/rating';
import { getRating } from '../../utilities/getRating';
import { IoMdCart, IoIosExpand, IoIosArrowForward } from 'react-icons/io';
import { useCart } from '../../context/cartContext';
import { useNotification } from '../../context/notificationContext';
import { useNavigate } from 'react-router-dom';

const ShopCard = ({ product }) => {
  const rating = getRating(product.like);
  const { addToCart } = useCart();
  const { addNotification } = useNotification();
  const navigate = useNavigate();
  const detailProductPath = '/shop/product-layout/singleProduct'

  const handleProductDetail = (to) => {
    window.scrollTo(0, 0);
    navigate(to)
  }

  const handleShopCard = () => {
    addNotification(`${product.name} has been added to your cart!`)
    addToCart(product);
  }

  return (
    <div className="w-full h-auto flex flex-col gap-1 py-4 px-4">
      <h3 className="text-xl text-[#3f3f3f] font-medium">{product.name}</h3>
      <Rating maxStars={5} rating={rating} size={20} />
      <p className="text-accent text-lg font-playfair">${product.price}</p>
      <div className='w-full h-auto flex justify-end gap-2'>
        <button onClick={handleShopCard} className='w-10 h-10 flex items-center justify-center rounded-[100%] bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white duration-200 transition-colors lg:hidden'><IoMdCart size={18} /></button>
        <button onClick={() => handleProductDetail(detailProductPath)} className='w-10 h-10 rounded-[100%] border-2 border-accent text-accent bg-transparent hover:bg-accent hover:text-white duration-200 transition-colors flex lg:hidden items-center justify-center'>
          <IoIosExpand size={18} />
        </button>
        <button onClick={() => handleProductDetail(detailProductPath)} className='group hidden lg:flex items-center text-stone-800 hover:text-accent duration-200 transition-colors'>
          <span>View Detail</span>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default ShopCard;
