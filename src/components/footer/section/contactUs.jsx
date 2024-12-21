import React, { useState } from 'react';
import { IoMdArrowDropright } from 'react-icons/io';

const ContactUs = () => {
  const [email, setEmail] = useState('');

  const contactSubmit = async (e) => {
    e.preventDefault();

    // update the function with your api here...
    // const fetchEmail = await axios.post('http://yourapi.com', {})

    setEmail('');
  };

  return (
    <div className="w-full h-auto ">
      <div className="text-xl font-medium text-white">Contact Us</div>
      <div className="mt-6 w-full h-auto flex flex-col gap-2 text-sm">
        <span className="text-accent hover:text-[#9D6842] hover:cursor-pointer transition-colors duration-200">coffee@moderncoffee.com</span>
        <span className="text-beige">+62 812-3456-789</span>
        <span className="text-beige">Caringin, Bogor 16730, West Java</span>
      </div>
      <div className="mt-4 w-full h-auto flex flex-col gap-6">
        <div className="text-xl font-medium text-white">Subscribe</div>
        <div className="w-full h-auto flex gap-4">
          <input className="border border-white w-full p-2 outline-none text-sm placeholder:text-white bg-transparent text-white" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your E-mail" />
          <button className="button px-0 w-10 h-auto bg-accent flex items-center justify-center text-white text-2xl hover:bg-[#9D6842] hover:cursor-pointer duration-200 transition-colors" onClick={contactSubmit}>
            <IoMdArrowDropright className="translate-x-[1.5px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
