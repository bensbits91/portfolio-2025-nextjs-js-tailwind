'use client';
import { useState } from 'react';
import CloudinaryImage from './CloudinaryImage';

const ImageCarousel = ({ images }) => {
   const isMulti = images.length > 1;
   const [currentIndex, setCurrentIndex] = useState(0);

   const nextImage = () => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
   };

   const prevImage = () => {
      setCurrentIndex(
         prevIndex => (prevIndex - 1 + images.length) % images.length
      );
   };

   return (
      <div className='relative w-full max-w-lg mx-auto'>
         <div className='overflow-hidden relative h-96'>
            {images.map((image, index) => (
               <div
                  key={index}
                  className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                     index === currentIndex
                        ? 'translate-x-0'
                        : 'translate-x-full'
                  }`}
                  style={{
                     transform: `translateX(${(index - currentIndex) * 100}%)`
                  }}>
                  <CloudinaryImage
                     cloudinaryId={image}
                     alt={`Image ${index + 1}`}
                     width={384}
                     height={384}
                     full
                  />
               </div>
            ))}
         </div>
         {isMulti && (
            <>
               <button
                  onClick={prevImage}
                  className='absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2'>
                  Prev
               </button>
               <button
                  onClick={nextImage}
                  className='absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2'>
                  Next
               </button>
            </>
         )}
      </div>
   );
};

export default ImageCarousel;
