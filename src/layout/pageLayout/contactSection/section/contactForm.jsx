import React, { useState } from 'react';
import { RiInstagramFill, RiLinkedinBoxFill, RiTwitterFill, RiTiktokFill } from 'react-icons/ri';

const initialContactForm = {
  name: '',
  email: '',
  message: ''
}

const ContactForm = () => {
  const [contactForm, setContactForm] = useState(initialContactForm)

  const handleContact = (e) => {
    const { name, value } = e.target;

    setContactForm({
      ...contactForm,
      [name]: value
    })
  }

  const contactSubmit = async (e) => {
    e.preventDefault();

    try {
      // update the function with your api here...
      // const fetchContact = await axios.post('http://yourapi.com', {})

      const formData = new FormData();

      formData.append('name', contactForm.name);
      formData.append('email', contactForm.email);
      formData.append('message', contactForm.message);

      const contactData = Object.fromEntries(formData);

      console.log('contact:', contactData);
      setContactForm(initialContactForm);

    } catch (error) {
      console.log(error)
    }

  }


  return (
    <div className="w-full h-auto flex flex-col lg:flex-row gap-8 px-[8%] py-28">
      <div className="w-full h-auto flex flex-col gap-4">
        <div className="w-full h-auto flex flex-col items-center lg:items-start gap-2">
          <h1 className="text-stone-800 font-semibold uppercase text-5xl">Write Us</h1>
          <div className="w-10 lg:w-20 h-[2px] bg-accent" />
        </div>
        <p className="text-stone-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque aliquid sint sapiente non eum totam quia fuga nobis recusandae iste.</p>
        <ul className="flex flex-col text-stone-800 list-none">
          <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:-top-1 before:text-accent before:text-2xl">Lorem ipsum dolor sit amet.</li>
          <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:-top-1 before:text-accent before:text-2xl">Consectetur adipisicing elit.</li>
          <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:-top-1 before:text-accent before:text-2xl">Esse consectetur in fuga.</li>
          <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:-top-1 before:text-accent before:text-2xl">Repellendus numquam autem.</li>
        </ul>
        <div className="w-full flex items-center gap-2">
          <RiInstagramFill className="text-stone-400 text-2xl hover:text-accent duration-200 transition-colors" />
          <RiLinkedinBoxFill className="text-stone-400 text-2xl hover:text-accent duration-200 transition-colors" />
          <RiTwitterFill className="text-stone-400 text-2xl hover:text-accent duration-200 transition-colors" />
          <RiTiktokFill className="text-stone-400 text-2xl hover:text-accent duration-200 transition-colors" />
        </div>
      </div>
      <form className="w-full h-auto flex flex-col gap-8" onSubmit={contactSubmit}>
        <div className="w-full flex gap-4">
          <input className="w-full h-12 bg-accent/15 px-4 placeholder:text-stone-600 text-stone-600 outline-none" type="text" placeholder="Your name" name='name' value={contactForm.name} onChange={handleContact} />
          <input className="w-full h-12 bg-accent/15 px-4 placeholder:text-stone-600 text-stone-600 outline-none" type="email" placeholder="Your Email" name='email' value={contactForm.email} onChange={handleContact} />
        </div>
        <div className="w-full h-full">
          <textarea className="w-full h-48 p-4 placeholder:text-stone-600 bg-accent/15 text-stone-600 outline-none" placeholder="Your message" name='message' value={contactForm.message} onChange={handleContact} />
        </div>
        <button className="button w-fit h-auto py-2 rounded bg-accent text-lg text-white hover:bg-accent/90">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
