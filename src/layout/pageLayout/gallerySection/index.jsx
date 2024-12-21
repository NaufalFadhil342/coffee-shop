import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { galleryData } from '../../../data/dummyCoffee';
import { motion } from 'framer-motion';

const GallerySection = ({ mainPage }) => {
  // you can change or update the code with your api

  const [galleryOpen, setGalleryOpen] = useState(null);
  const navigate = useNavigate();

  const handleGalleryLink = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  }

  const openGallery = (id) => setGalleryOpen(id);
  const closeGallery = () => setGalleryOpen(null);

  return (
    <div className={`w-full h-auto grid sm:grid-cols-2 lg:grid-cols-4 ${mainPage ? '' : 'my-28'}`} onClick={() => handleGalleryLink('/pages/gallery')}>
      {galleryData.map((data) => (
        <div
          key={data.id}
          className="w-full h-72 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${data.image})`,
          }}
          onMouseEnter={() => openGallery(data.id)}
          onMouseLeave={closeGallery}
        >
          <motion.div
            className="w-full h-full bg-stone-800/85 flex flex-col items-center justify-center"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: galleryOpen === data.id ? 1 : 0,
            }}
            transition={{
              duration: 0.15,
            }}
          >
            <h3 className="text-xl text-white font-medium">{data.label}</h3>
            <p className="text-accent font-medium font-playfair">Coffee</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default GallerySection;
