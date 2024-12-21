import React from 'react';
import DescProduct from '../additionalContent/descriptionProduct';
import AdditionalInfo from '../additionalContent/additionalInfo';
import ReviewsProduct from '../additionalContent/reviewsProduct';

const MobileProductDescription = ({ reviews, setReviews }) => {
    return (
        <div className="w-full h-auto block lg:hidden px-[8%]">
            <div className='w-full h-auto block'>
                <div className='w-fit px-6 h-11 font-semibold text-xl text-center mx-auto border-b-2 border-stone-800'>Description</div>
                <div className='mt-10'>
                    <DescProduct />
                </div>
            </div>
            <div className='w-full h-auto block mt-16'>
                <div className='w-fit px-6 h-11 font-semibold text-xl text-center mx-auto border-b-2 border-stone-800'>Additional Information</div>
                <div className='mt-10'>
                    <AdditionalInfo />
                </div>
            </div>
            <div className='w-full h-auto block mt-16'>
                <div className='w-fit px-6 h-11 font-semibold text-xl text-center mx-auto border-b-2 border-stone-800'>Reviews ({reviews.length})</div>
                <div className='mt-10'>
                    <ReviewsProduct reviews={reviews} setReviews={setReviews} />
                </div>
            </div>
        </div>
    )
}

export default MobileProductDescription;