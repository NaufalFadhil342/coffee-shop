import React, { useState, useEffect } from 'react';
import { shopData as products, reviewsData } from '../../data/dummyCoffee';
import { useCart } from '../../context/cartContext';
import { useNotification } from '../../context/notificationContext';
import { useThumbnail } from '../../hook/useThumbnail';
import ProductName from './productName';
import ProductQuantity from './productQuantity';
import ProductSpec from './productSpec';
import ProductShare from './productShare';
import DescProduct from './additionalContent/descriptionProduct';
import AdditionalInfo from './additionalContent/additionalInfo';
import ReviewsProduct from './additionalContent/reviewsProduct';
import DesktopProductDescription from './description/desktopProductDescription';
import MobileProductDescription from './description/mobileProductDescription';

const SingleProduct = () => {
  const [activeTab, setActiveTab] = useState('description');
  const [reviews, setReviews] = useState(reviewsData);
  const { emblaRef, emblaThumbRef, emblaApi, thumbClickHandler, selectedProduct, quantity, onSelect } = useThumbnail(products);
  const { addToCart } = useCart();
  const { addNotification } = useNotification();

  const calculatePrice = () => {
    return selectedProduct.price * quantity;
  }

  const addToCartHandler = () => {
    addToCart({ ...selectedProduct, quantity });
    addNotification(`${selectedProduct.name}  has been added to your cart!`);
  }

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('select', onSelect).on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect).off('reInit', onSelect);
    };
  }, [emblaApi, onSelect])

  return (
    <div className="w-full h-auto flex flex-col gap-10 my-20">
      <div className="w-full h-auto block lg:flex gap-8 px-[8%]">
        <div className="flex-50 w-full h-full flex-col gap-10 relative">
          <div className="w-full h-auto overflow-hidden py-8 custom-shadow rounded border-stone-400" ref={emblaRef}>
            <div className='flex'>
              {products.map((product) => (
                <div key={product.id} className='flex-100 w-full h-full flex items-center justify-center' id={product.id}>
                  <img className='w-[20rem] lg:w-[25rem] h-full' src={product.image} alt={product.name} />
                </div>
              ))}
            </div>
          </div>
          <div className="px-2 w-16 h-8 bg-accent text-white font-semibold absolute top-3 left-3 flex items-center justify-center z-[2]">Sale</div>
          <div className="w-full h-auto mt-8 overflow-hidden" ref={emblaThumbRef}>
            <div className='w-full h-auto flex'>
              {products.map((product, index) => (
                <div
                  className='flex-25 w-full h-auto flex justify-center items-center p-4 border border-stone-200 hover:cursor-pointer'
                  key={product.id}
                  onClick={() => thumbClickHandler(index)}>
                  <img className='w-[5rem] h-full' src={product.image} alt={product.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-50 w-full h-auto flex flex-col items-start justify-center py-8 gap-8">
          <ProductName products={selectedProduct} reviewsAmount={reviews.length} price={calculatePrice()} />
          <ProductQuantity addToCart={addToCartHandler} />
          <ProductSpec products={selectedProduct} />
          <ProductShare />
        </div>
      </div>
      <DesktopProductDescription activeTab={activeTab} setActiveTab={setActiveTab} reviews={reviews} />
      <MobileProductDescription reviews={reviews} setReviews={setReviews} />
      <div className="w-full h-auto hidden lg:flex mt-8 px-[8%]">
        {activeTab === 'description' && <DescProduct />}
        {activeTab === 'additionalInfo' && <AdditionalInfo />}
        {activeTab === 'reviews' && <ReviewsProduct reviews={reviews} setReviews={setReviews} />}
      </div>
    </div>
  );
};

export { SingleProduct };
