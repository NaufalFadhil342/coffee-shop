import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { brandLogo } from '../../../data/dummyCoffee';

const Brands = () => {
  const [emblaRef] = useEmblaCarousel({
    containScroll: 'trimSnaps',
    loop: true,
    align: 'start'
  }, [Autoplay()]);

  return (
    <div className="mb-28 w-full h-auto flex flex-col gap-10">
      <div className="w-full h-auto flex flex-col gap-4 items-center">
        <h1 className="text-stone-800 text-5xl font-semibold uppercase text-center">Our Brands</h1>
        <div className="w-10 h-[2px] bg-accent" />
      </div>
      <div className="w-full overflow-hidden" ref={emblaRef}>
        <div className="min-w-full flex">
          {brandLogo.map((brand, index) => (
            <div key={index} className="flex-100 sm:flex-50 md:flex-35 lg:flex-25 xl:flex-20 flex items-center justify-center">
              <img className="w-auto h-32 grayscale hover:grayscale-0 duration-200 transition-colors" src={brand.img} alt="brand" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
