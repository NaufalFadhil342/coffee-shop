import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GrShop } from 'react-icons/gr';
import { useCart } from '../../context/cartContext';
import PCcart from './pcCart';
import MobileCart from './mobileCart';

const Cart = (props) => {
  const { setShopOpen, shopOpen, handleMouseEnter, handleMouseLeave, isScrolled, toggleState } = props;
  const { cartData, setCartData } = useCart();

  const navigate = useNavigate();
  const shopLink = 'shop/shop-layout/right-side-shop';
  const viewCart = '/shop/shop-page/cart';

  const goToShopHandler = (path) => {
    window.scrollTo(0, 0)
    navigate(path);
    setShopOpen(false);
  };

  const goToViewCart = (path) => {
    window.scrollTo(0, 0)
    navigate(path);
    setShopOpen(false);
  };

  const deletedItems = (id) => {
    setCartData(cartData.filter((cart) => cart.id !== id));
  };

  const CartItems = () => {
    if (cartData.length === 0) {
      return (
        <div className="w-full h-auto flex flex-col items-center justify-center gap-3 text-accent">
          <h1 className="text-2xl text-center">No Products Added</h1>
          <button className="button h-9 bg-accent hover:bg-[#9D6842] text-white" onClick={() => goToShopHandler(shopLink)}>
            Go to Shop
          </button>
        </div>
      );
    } else {
      return (
        <div className="w-full h-auto flex flex-col gap-4">
          <div className="w-full h-auto flex flex-col gap-3">
            {cartData.map((cart) => (
              <div key={cart.id} className="w-full h-full flex items-center gap-2 relative">
                <div className="w-[7rem] h-[5rem] overflow-hidden flex items-center justify-center">
                  <img className="w-full h-auto" src={cart.image} alt={cart.label} />
                </div>
                <div className="w-full h-auto flex flex-col">
                  <h3 className="text-lg text-stone-800 font-medium">{cart.label}</h3>
                  <p className="text-sm text-stone-600">Quantity: {cart.quantity}</p>
                  <div className="text-accent font-medium">${cart.price}</div>
                </div>
                <button className="text-stone-600 font-medium text-lg hover:text-accent hover:cursor-pointer duration-200 transition-colors absolute z-[5] top-1 right-1" onClick={() => deletedItems(cart.id)}>
                  x
                </button>
              </div>
            ))}
          </div>
          <div className="w-full flex items-center gap-4 justify-between text-accent">
            <p>Total:</p>
            <p>${cartData.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
          </div>
          <div className="w-full h-auto">
            <button className="button w-full h-10 flex justify-center items-center bg-accent text-white hover:bg-[#9D6842]" onClick={() => goToViewCart(viewCart)}>
              View Cart
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="w-auto h-full relative flex items-center py-3">
      <div className="w-full h-full flex items-center relative">
        <GrShop className={`cartIcon text-3xl hidden sm:block cursor-pointer hover:text-accent transition-colors duration-300 ${isScrolled ? 'text-stone-800' : 'text-white'}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <GrShop className={`cartIcon text-3xl block sm:hidden cursor-pointer hover:text-accent transition-colors duration-300 ${isScrolled ? 'text-stone-800' : 'text-white'}`} onClick={() => toggleState('cartIsOpen')} />
        <span className="flex absolute z-[2] top-4 -right-1 w-5 h-5 text-sm rounded-full items-center justify-center bg-accent text-white font-medium">{cartData.length}</span>
      </div>
      <PCcart shopOpen={shopOpen} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}>
        <CartItems />
      </PCcart>
      <MobileCart shopOpen={shopOpen} toggleState={toggleState}>
        <CartItems />
      </MobileCart>
    </div>
  );
};

export default Cart;
