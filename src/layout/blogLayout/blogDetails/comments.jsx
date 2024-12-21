import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Comment = ({ comments }) => {

    return (
        <article className='w-full h-full flex flex-col gap-8'>
            <div className='w-full h-auto'>
                <h1 className='text-3xl font-semibold uppercase'>Comments</h1>
            </div>
            <div className='w-full h-auto flex flex-col gap-8'>
                {comments.map((comment, index) => (
                    <div key={index} className="w-full h-auto p-5 flex gap-3 rounded-md">
                        <div className="w-auto h-auto">
                            <FaUserCircle className="text-[5.5rem] text-gray-300" />
                        </div>
                        <div className="w-full h-auto flex flex-col gap-4">
                            <div className="flex flex-col items-start">
                                <h2 className="text-2xl text-gray-800 font-semibold">{comment.name}</h2>
                                <div className="text-[15px] text-accent italic">{comment.date}</div>
                            </div>
                            <p className="text-gray-600 font-medium">{comment.message}</p>
                        </div>
                    </div>
                ))}
            </div>
        </article>
    )
}

export default Comment;