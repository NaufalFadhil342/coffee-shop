import React from 'react';
import BillingDetails from './billingDetails';

const Billing = ({ payment, paymentHandler }) => {
  return (
    <div className="w-full h-auto block lg:flex lg:gap-8">
      <div className="w-full h-auto">
        <h1 className="text-3xl text-stone-800 font-semibold mb-8 uppercase">Billing Details</h1>
        <BillingDetails payment={payment} paymentHandler={paymentHandler} />
      </div>
      <div className="w-full h-auto mt-8 lg:mt-0">
        <h1 className="text-3xl text-stone-800 font-semibold mb-8 uppercase">Additional Information</h1>
        <div className="w-full h-auto">
          <label className="text-stone-700" htmlFor="addInformation">
            Special Delivery (Optional)
          </label>
          <input
            className="w-full h-14 flex items-center border border-stone-500 px-4 mt-2 text-stone-500 placeholder:text-stone-500"
            type="text"
            placeholder="Note about your order, e.g. special notes for delivery"
            name="addInformation"
            value={payment.addInformation}
            onChange={paymentHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Billing;
