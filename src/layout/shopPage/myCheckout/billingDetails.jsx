import React, { useState } from 'react';
import { getProvinces } from '../../../data/dummyProvinces';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const BillingDetails = ({ payment, paymentHandler }) => {
  const [showProvinces, setShowProvinces] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [searchProvinces, setSearchProvinces] = useState('');

  const selectedProvinceHandler = (province) => {
    setSelectedProvince(province);
    setShowProvinces(false);
    setSearchProvinces('');

    paymentHandler({ target: { name: 'province', value: province.name } });
  };

  const handleBlur = () => {
    const matchingProvince = getProvinces.find((province) => province.name.toLowerCase() === searchProvinces.toLowerCase());
    if (matchingProvince) {
      selectedProvinceHandler(matchingProvince);
    }
  };

  const filterProvinces = getProvinces.filter((province) => province.name.toLowerCase().includes(searchProvinces.toLowerCase()));

  return (
    <form className="w-full h-auto flex flex-col gap-4">
      <div>
        <label className="text-stone-700" htmlFor="name">
          Name *
        </label>
        <input className="w-full h-14 flex items-center border border-stone-500 px-4 mt-2 text-stone-500" type="text" id="name" name="name" value={payment.name} onChange={paymentHandler} required />
      </div>
      <div>
        <label className="text-stone-700" htmlFor="companyName">
          Company Name (Optional)
        </label>
        <input className="w-full h-14 flex items-center border border-stone-500 px-4 mt-2 text-stone-500" type="text" id="companyName" name="companyName" value={payment.companyName} onChange={paymentHandler} />
      </div>
      <div>
        <label className="text-stone-700" htmlFor="address">
          Address *
        </label>
        <input
          className="w-full h-14 flex items-center border border-stone-500 px-4 mt-2 text-stone-500 placeholder:text-stone-500"
          type="text"
          id="address"
          name="address"
          placeholder="Street name"
          value={payment.address}
          onChange={paymentHandler}
          required
        />
      </div>
      <div>
        <label className="text-stone-700" htmlFor="city">
          Town / City *
        </label>
        <input className="w-full h-14 flex items-center border border-stone-500 px-4 mt-2 text-stone-500" type="text" id="city" name="city" value={payment.city} onChange={paymentHandler} required />
      </div>
      <div className="w-full h-auto">
        <label className="text-stone-700" htmlFor="province">
          Province *
        </label>
        <div className="w-full h-auto py-4 border border-stone-500 mt-2">
          <div className="w-full h-auto px-4 flex justify-between items-center" onClick={() => setShowProvinces(!showProvinces)}>
            <span className="text-stone-500 hover:text-accent hover:cursor-pointer duration-200 transition-colors text-sm">{selectedProvince ? <>{selectedProvince.name}</> : 'Select provinces'}</span>
            {showProvinces ? <MdKeyboardArrowUp className="text-stone-500" /> : <MdKeyboardArrowDown className="text-stone-500" />}
          </div>
          <div className="w-full h-auto relative">
            {showProvinces && (
              <div className="w-full h-72 mt-4 bg-white overflow-auto absolute z-[3] border-x border-b border-stone-500">
                <div className="w-full h-auto px-4">
                  <input
                    className="w-full h-auto py-1 px-3 border border-stone-500 text-sm text-stone-500 placeholder:text-stone-500"
                    type="text"
                    placeholder="Choose province"
                    name="province"
                    value={searchProvinces}
                    onChange={(e) => setSearchProvinces(e.target.value)}
                    onBlur={handleBlur}
                  />
                </div>
                <ul className="w-full h-auto mt-6">
                  {filterProvinces.map((province) => (
                    <li
                      key={province.id}
                      className="w-full h-10 px-4 text-sm flex items-center text-stone-500 bg-transparent cursor-default hover:bg-accent/20 duration-200 transition-colors"
                      onClick={() => selectedProvinceHandler(province)}
                    >
                      {province.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <label className="text-stone-700" htmlFor="postCode">
          Postcode / ZIP *
        </label>
        <input className="w-full h-14 flex items-center border border-stone-500 px-4 mt-2 text-stone-500" type="text" id="postCode" name="postCode" value={payment.postCode} onChange={paymentHandler} required />
      </div>
      <div>
        <label className="text-stone-700" htmlFor="phone">
          Phone *
        </label>
        <input className="w-full h-14 flex items-center border border-stone-500 px-4 mt-2 text-stone-500" type="text" id="phone" name="phone" value={payment.phone} onChange={paymentHandler} required />
      </div>
      <div>
        <label className="text-stone-700" htmlFor="email">
          Email *
        </label>
        <input className="w-full h-14 flex items-center border border-stone-500 px-4 mt-2 text-stone-500" type="text" id="email" name="email" value={payment.email} onChange={paymentHandler} required />
      </div>
    </form>
  );
};

export default BillingDetails;
