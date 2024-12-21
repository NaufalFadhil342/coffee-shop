import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Billing from './billing';
import Order from './order';
import { useCart } from '../../../context/cartContext';
import { useOrder } from '../../../context/orderContext';
import { useNotification } from '../../../context/notificationContext';

const initialPayment = {
  name: '',
  companyName: '',
  address: '',
  city: '',
  province: '',
  postCode: '',
  phone: '',
  email: '',
  addInformation: '',
};

const MyCheckout = () => {
  const [payment, setPayment] = useState(initialPayment);
  const { cartData } = useCart();
  const [showBilling, setShowBilling] = useState(false);
  const { orderData } = useOrder();
  const { addNotification } = useNotification();

  const navigate = useNavigate();
  const shopLink = '/shop/shop-layout/right-side-shop';

  useEffect(() => {
    setShowBilling(cartData.length > 0);
  }, [cartData])

  const paymentSubmitted = async (e) => {
    e.preventDefault();

    try {
      // update the function with your api here...
      // const fetchPayment = await axios.post('http://yourapi.com', {})

      addNotification(`${cartData[0].name} is ready to checkout. Please wait 'til your order come to yours`)

      const formData = new FormData();

      formData.append('name', payment.name);
      formData.append('companyName', payment.companyName);
      formData.append('address', payment.address);
      formData.append('city', payment.city);
      formData.append('province', payment.province);
      formData.append('postCode', payment.postCode);
      formData.append('phone', payment.phone);
      formData.append('email', payment.email);
      formData.append('addInformation', payment.addInformation);

      const paymentData = Object.fromEntries(formData)

      console.log('payment:', paymentData);

      setPayment(initialPayment);
    } catch (error) {
      console.error(error);
    }
  };

  const paymentHandler = (e) => {
    const { name, value } = e.target;

    setPayment({
      ...payment,
      [name]: value,
    });
  };

  return (
    <div className="w-full h-auto px-[8%] py-28 flex flex-col gap-12">
      {showBilling ? <div className="w-full h-auto">
        <Billing payment={payment} paymentHandler={paymentHandler} />
      </div> : <div className='w-full h-auto flex flex-col gap-4 items-center'>
        <h1 className='text-3xl text-stone-800 font-semibold uppercase'>No Product Added</h1>
        <button className='button h-12 w-auto bg-accent hover:bg-[#9D6842] text-white' onClick={() => {
          navigate(shopLink)
        }}>Back to Shop</button>
      </div>}
      <div className="w-full h-auto">
        <Order orderData={orderData} />
      </div>
      <div className="w-auto h-auto">
        <button className="button w-fit h-12 bg-accent text-white hover:bg-[#9D6842]" type="submit" onClick={paymentSubmitted}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export { MyCheckout };