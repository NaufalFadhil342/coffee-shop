import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { brandLogo } from '../../../data/dummyCoffee';

const OurProducer = () => {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    containScroll: 'trimSnaps',
    align: 'start'
  });

  return (
    <div className="w-full h-auto py-28 flex flex-col gap-16">
      <div className="w-full h-auto px-[8&] flex flex-col items-center gap-4">
        <div className="text-accent font-medium">Coffee Mate</div>
        <h1 className="text-stone-800 text-5xl text-center font-semibold uppercase">Our Producer Coffee</h1>
        <div className="w-10 h-[2px] bg-accent" />
      </div>
      <div className="w-full overflow-hidden" ref={emblaRef}>
        <div className="min-w-full flex">
          {brandLogo.map((brand, index) => (
            <div key={index} className="flex-100 sm:flex-50 md:flex-35 lg:flex-20 flex items-center justify-center">
              <img className="w-auto h-32 grayscale" src={brand.img} alt="brand" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProducer;
