import React, { useState } from 'react';
import { IoIosStar } from 'react-icons/io';

const ReviewsForm = ({ addReview }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);

  const reviewSubmit = async (event) => {
    event.preventDefault();

    try {
      // update the function with your api here...
      // const fetchReview = await axios.post('http://yourapi.com', {})

      const date = new Date().toLocaleDateString().replace(/\//g, '-');
      const formData = new FormData();

      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);
      formData.append('rating', rating);
      formData.append('date', date);

      const reviewData = Object.fromEntries(formData);

      addReview(reviewData);

      setName('');
      setEmail('');
      setMessage('');
      setRating(0);
    } catch (error) {
      console.error(error);
    }
  };

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <form className="w-full h-auto flex flex-col gap-8" onSubmit={reviewSubmit}>
      <div className="w-auto flex gap-2 items-center">
        <p className="text-gray-500 mt-[2px]">Choose a rate *</p>
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <button type="button" key={index} value={rating} onClick={() => handleStarClick(index)} className="text-gray-500/50 text-base">
              {index < rating ? <IoIosStar className="text-accent" /> : <IoIosStar className="text-gray-500/50 hover:text-accent duration-200 transition-colors" />}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full flex gap-8">
        <input
          className="w-full h-12 pl-2 bg-secondary placeholder:text-gray-500 placeholder:italic text-gray-500 rounded outline-accent"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name *"
          required
        />
        <input
          className="w-full h-12 pl-2 bg-secondary placeholder:text-gray-500 placeholder:italic text-gray-500 rounded outline-accent"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email *"
          required
        />
      </div>
      <div className="w-full h-auto">
        <textarea className="w-full h-60 pl-2 pt-2 bg-secondary placeholder:text-gray-500 placeholder:italic text-gray-500 rounded outline-accent" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Reviews" />
      </div>
      <button className="button w-28 h-12 bg-accent text-white rounded hover:bg-accent/90 duration-200 transition-colors" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ReviewsForm;
