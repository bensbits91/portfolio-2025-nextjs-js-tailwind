'use client';
import { useState } from 'react';
import Image from 'next/image';

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
         <div className='overflow-hidden relative h-[400px]'>
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
                  <Image
                     src={`https://res.cloudinary.com/ddfrx5278/image/upload/c_limit,w_400,q_auto/v1738447608/${image}`}
                     width={400}
                     height={400}
                     alt={`Image ${index + 1}`}
                     className='w-full h-auto'
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
