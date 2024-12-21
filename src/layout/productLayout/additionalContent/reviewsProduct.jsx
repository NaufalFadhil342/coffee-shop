import React from 'react';
import ReviewsForm from '../../../utilities/reviewsForm';
import { IoIosStar } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';

const ReviewsProduct = ({ reviews, setReviews }) => {
  const addReviews = (newReview) => {
    setReviews((prevReviews) => [...prevReviews, newReview]);
  };

  return (
    <div className="w-full h-auto flex flex-col gap-12">
      <div className="w-full h-auto flex flex-col gap-7">
        {reviews.map((review, index) => (
          <div key={index} className="w-full h-auto p-5 flex gap-3 custom-shadow rounded-md">
            <div className="w-auto h-auto">
              <FaUserCircle className="text-[5.5rem] text-gray-300" />
            </div>
            <div className="w-full h-auto flex flex-col gap-3">
              <div className="w-full flex justify-between items-center gap-6">
                <div className="flex flex-col items-start">
                  <h2 className="text-2xl text-gray-700 font-semibold">{review.name}</h2>
                  <div className="text-sm text-accent italic">{review.date}</div>
                </div>
                <div className="w-auto flex text-[15px]">
                  {[...Array(5)].map((_, i) => (
                    <IoIosStar key={i} className={i < review.rating ? 'text-accent' : 'text-gray-500/50'} />
                  ))}
                </div>
              </div>
              <p className="text-gray-500">{review.message}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-auto flex flex-col gap-6">
        <div className="w-full">
          <p className="text-gray-500">Add a review</p>
          <p className="text-gray-500">Your email address will not be published. Required field are marked *</p>
        </div>
        <div>
          <ReviewsForm addReview={addReviews} />
        </div>
      </div>
    </div>
  );
};

export default ReviewsProduct;
