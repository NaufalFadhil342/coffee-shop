import React from 'react';
import { IoPricetagOutline, IoChatbubbleOutline, IoHeartOutline } from "react-icons/io5";
import { RiTiktokFill, RiFacebookFill, RiInstagramLine, RiTwitterXLine } from 'react-icons/ri';

const Features = () => {
    return (
        <section className='w-full h-auto block md:flex items-center justify-between gap-8 overflow-x-hidden'>
            <div className='w-auto flex items-center gap-4 font-medium'>
                <span className='flex gap-1 items-center text-stone-600 hover:text-accent duration-150 transition-colors cursor-default'><IoChatbubbleOutline size={18} /> <>1</></span>
                <span className='flex gap-1 items-center text-stone-600 hover:text-accent duration-150 transition-colors cursor-default'> <IoHeartOutline size={18} /><>20</></span>
                <span className='flex gap-1 items-center text-stone-600'>
                    <IoPricetagOutline size={18} />
                    <p className='flex gap-2'>
                        <i className='text-stone-600 hover:text-accent duration-150 transition-colors cursor-default'>Americano,</i>
                        <i className='text-stone-600 hover:text-accent duration-150 transition-colors cursor-default'>Cappucino,</i>
                        <i className='text-stone-600 hover:text-accent duration-150 transition-colors cursor-default'>Espresso</i>
                    </p>
                </span>
            </div>
            <div className='flex items-center gap-4 mt-4 md:mt-0'>
                <div className='text-accent font-medium'>Share:</div>
                <span className='flex items-center gap-4'>
                    <RiInstagramLine className='text-stone-600 hover:text-accent duration-150 transition-colors cursor-default' size={18} />
                    <RiFacebookFill className='text-stone-600 hover:text-accent duration-150 transition-colors cursor-default' size={18} />
                    <RiTiktokFill className='text-stone-600 hover:text-accent duration-150 transition-colors cursor-default' size={18} />
                    <RiTwitterXLine className='text-stone-600 hover:text-accent duration-150 transition-colors cursor-default' size={18} />
                </span>
            </div>
        </section>
    )
}

export default Features;