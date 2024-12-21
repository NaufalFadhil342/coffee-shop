import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { tableGroupData, shippingData } from '../../../data/dummyCoffee';
import { useCart } from '../../../context/cartContext';
import { useOrder } from '../../../context/orderContext';
import TableCart from './tableCart';
import Shipping from './shipping';

const MyCart = () => {
  const { cartData, setCartData } = useCart();
  const { setOrderData } = useOrder();
  const [quantities, setQuantities] = useState(cartData.map((item) => ({ id: item.id, quantity: item.quantity })));
  const [subtotal, setSubtotal] = useState(0);
  const [isShippingOpen, setIsShippingOpen] = useState(false);
  const [selectedShipping, setSelectedShipping] = useState(null);

  const navigate = useNavigate();

  const handleCart = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  }

  const increaseQuantity = (id) => {
    setQuantities(quantities.map((q) => (q.id === id ? { ...q, quantity: q.quantity + 1 } : q)));
  };

  const decreaseQuantity = (id) => {
    setQuantities(quantities.map((q) => (q.id === id ? { ...q, quantity: q.quantity - 1 } : q)));
  };

  const getSubtotal = (price, quantity) => price * quantity;

  useEffect(() => {
    const total = quantities.reduce((acc, item) => {
      const cartItem = cartData.find((data) => data.id === item.id);
      return acc + (cartItem ? getSubtotal(cartItem.price, item.quantity) : 0);
    }, 0);
    setSubtotal(total);
  }, [quantities, cartData]);

  const proceedToCheckout = () => {
    setOrderData({ items: cartData, subtotal, shipping: selectedShipping.price, total: subtotal + (selectedShipping.price || 0) });
    handleCart('/shop/shop-page/checkout');
  }

  const HandleCart = () => {
    if (cartData.length === 0) {
      return (
        <div className="w-full h-auto flex flex-col items-center gap-12">
          <h1 className="text-5xl text-stone-800 text-center font-semibold">Your cart is currently empty!</h1>
          <button className="button w-auto h-12 text-lg font-medium bg-accent text-white hover:bg-[#9D6842] hover:cursor-pointer" onClick={() => handleCart('/shop/shop-layout/right-side-shop')}>
            Go to Shop
          </button>
        </div>
      );
    } else {
      return (
        <div className="w-full h-auto flex flex-col gap-12">
          <div className="w-full h-auto">
            <TableCart cartData={cartData} setCartData={setCartData} tableGroupData={tableGroupData} quantities={quantities} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} getSubtotal={getSubtotal} subtotal={subtotal} />
          </div>
          <div className="w-full h-auto flex flex-col md:flex-row gap-8">
            <div className='md:flex-40 lg:flex-50 w-full h-auto'>
              <input type="text" placeholder="Coupon code" className="w-full h-12 px-1 flex items-center placeholder:text-accent text-stone-600 outline-none rounded-md" />
            </div>
            <div className='md:flex-60 lg:flex-50 w-full h-auto flex flex-col md:flex-row gap-8'>
              <button className="button w-full h-12 flex justify-center items-center text-white font-medium bg-accent hover:bg-[#9D6842] hover:cursor-pointer">Apply Coupon</button>
              <button className="button w-full h-12 flex justify-center items-center text-white font-medium bg-accent hover:bg-[#9D6842] hover:cursor-pointer" onClick={() => handleCart('/shop/shop-layout/right-side-shop')}>
                Return to Shop
              </button>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="w-full h-auto my-28 px-[8%]">
      <div>
        <HandleCart />
      </div>
      {cartData.length !== 0 && (
        <div className="w-full h-auto flex flex-col gap-8 mt-10">
          <h1 className="w-full h-auto text-5xl font-semibold text-center sm:text-left text-stone-800">Cart Totals</h1>
          <div className="w-full h-auto">
            <div className="w-full py-4 grid grid-cols-2 sm:grid-cols-[0.75fr,2.75fr] border-b border-stone-300">
              <div className="w-full text-stone-800">Subtotal</div>
              <div className="w-full text-accent">${subtotal.toFixed(2)}</div>
            </div>
            <div className="w-full h-auto py-4 grid grid-cols-1 gap-2 sm:grid-cols-[0.75fr,2.75fr] border-b border-stone-300 overflow-hidden">
              <div className="w-full h-auto text-stone-800">Shipping</div>
              <div className="w-full h-auto flex flex-col gap-4">
                {selectedShipping && (
                  <div className="w-full h-auto flex flex-col gap-2">
                    <div className="w-full h-auto flex items-center justify-between gap-8">
                      <h3 className="text-stone-800 text-xl font-medium">{selectedShipping.package}</h3>
                      <div className="text-stone-800 text-xl font-medium">${selectedShipping.price}</div>
                    </div>
                    <span className="text-accent">Arrived guaranteed: {selectedShipping.delivery}</span>
                  </div>
                )}
                <span className="text-stone-600 hover:text-accent hover:cursor-pointer duration-200 transition-colors" onClick={() => setIsShippingOpen(!isShippingOpen)}>
                  {selectedShipping ? 'Edit' : 'Select'} shipping package
                </span>
                <Shipping shippingData={shippingData} setSelectedShipping={setSelectedShipping} isShippingOpen={isShippingOpen} setIsShippingOpen={setIsShippingOpen} />
                {selectedShipping && (
                  <div className="w-full">
                    <button className="button w-fit h-12 bg-transparent text-stone-600 border border-stone-300 hover:bg-stone-200" onClick={() => setSelectedShipping(null)}>
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="w-full py-4 grid grid-cols-2 sm:grid-cols-[0.75fr,2.75fr] border-b border-stone-300">
              <div className="w-full text-stone-800">Total</div>
              <div className="w-full text-stone-800 font-medium">${(subtotal + (selectedShipping ? parseFloat(selectedShipping.price) : 0)).toFixed(2)}</div>
            </div>
          </div>
          <div className="w-full h-auto">
            <button className="button w-full sm:w-fit h-14 bg-accent text-white font-medium hover:bg-[#9D6842]" onClick={proceedToCheckout}>
              Proceed to checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export { MyCart };
