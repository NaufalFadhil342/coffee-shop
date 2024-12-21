import React from 'react';

const Order = ({ orderData }) => {
  if (!orderData || !orderData?.items) {
    console.log('No order data available')
  }

  const subtotal = orderData?.subtotal || 0;
  const shipping = orderData?.shipping ? parseFloat(orderData?.shipping) : 0;
  const total = subtotal + shipping;

  return (
    <div className="w-full h-auto">
      <div className="w-full h-auto py-4 grid items-center grid-cols-1 sm:grid-cols-[1fr,2fr] border-b border-stone-400">
        <label className="text-[15px] font-semibold text-stone-800">Product</label>
        <div className="text-[15px] text-stone-600 flex flex-col gap-2">{orderData?.items.length > 0 ? orderData?.items.map(item => <span key={item.id}>{item.name}</span>) : 'No Product Added'}</div>
      </div>
      <div className="w-full h-auto py-4 grid items-center grid-cols-[1fr,2fr] border-b border-stone-400">
        <label className="text-[15px] font-semibold text-stone-800">Subtotal</label>
        <div className="text-[15px] text-stone-600 flex items-center gap-1">${orderData?.items.length > 0 ? subtotal.toFixed(2) : <span className='ml-1'>-</span>}</div>
      </div>
      <div className="w-full h-auto py-4 grid items-center grid-cols-1 sm:grid-cols-[1fr,2fr] border-b border-stone-400">
        <label className="text-[15px] font-semibold text-stone-800">Shipping</label>
        <div className="text-[15px] text-stone-600 flex items-center gap-1">{orderData?.items.length > 0 ? `$${orderData?.shipping}` : 'Free Shipping'}</div>
      </div>
      <div className="w-full h-auto py-4 grid items-center grid-cols-[1fr,2fr] border-b border-stone-400">
        <label className="text-[15px] font-semibold text-stone-800">Total</label>
        <div className="text-[15px] text-stone-600 flex items-center gap-1">${orderData?.items.length > 0 ? total.toFixed(2) : <span className='ml-1'>-</span>}</div>
      </div>
    </div>
  );
};

export default Order;
