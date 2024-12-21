import React from 'react';
import GallerySection from '../../../layout/pageLayout/gallerySection';

const Gallery = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-14 mt-28">
      <div className="w-full h-auto px-[8%] flex flex-col items-center gap-4">
        <div className="text-accent font-medium">Coffee Mate</div>
        <h1 className="text-stone-800 text-5xl font-semibold uppercase">Our Gallery</h1>
        <div className="w-10 h-[2px] bg-accent" />
      </div>
      <div className="w-full h-auto">
        <GallerySection mainPage />
      </div>
    </div>
  );
};

export default Gallery;
