import React from 'react';

const Notification = ({ message }) => {

    return (
        <div className='fixed w-[25rem] sm:w-3/4 h-auto top-28 right-10 bg-secondary px-4 py-2 rounded shadow-lg z-50 animate-slideIn'>
            <div className="flex flex-col items-start gap-4">
                <p className='text-stone-800 font-medium'>{message}</p>
            </div>
        </div>
    )
}

export default Notification;