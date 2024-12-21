import React from 'react';
import writer from '../../../assets/writer.jpg';

const Writer = ({ creator }) => {
    return (
        <article className='w-full h-full block md:flex gap-8 py-8 border-y border-stone-300'>
            <div className='w-full md:w-[15rem] lg:w-[18rem] h-[15rem] md:h-auto overflow-hidden rounded-xl md:rounded-[100%]'>
                <img className='w-full h-full object-cover' src={writer} alt="writer" />
            </div>
            <div className='w-full h-full flex flex-col mt-4 md:mt-0 py-8 gap-4'>
                <h1 className='text-3xl text-stone-800 font-semibold uppercase'>{creator}</h1>
                <p className='text-stone-600 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi totam sapiente perspiciatis neque, nobis dolor explicabo omnis impedit enim eos.</p>
            </div>
        </article>
    )
}

export default Writer;