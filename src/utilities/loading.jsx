import React, { useState, useEffect } from 'react';
import coffeeIcon from '../assets/cup-of-coffee.svg';

export const Loading = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="fixed top-0 left-0 z-20 w-full h-screen flex items-center justify-center">
            {isLoading && <img className=" w-auto h-16" src={coffeeIcon} alt='loading...' />}
        </div>
    );
}