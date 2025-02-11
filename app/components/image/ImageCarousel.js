'use client';
import { useState } from 'react';
import { CloudinaryImage } from '@/app/components/image';

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
      <div className="relative mx-auto w-full max-w-lg">
         <div className="relative h-96 overflow-hidden">
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
                     cloudinaryId={image.name}
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
                  className="absolute left-0 top-1/2 w-24 -translate-x-14 -translate-y-1/2 transform cursor-pointer rounded-sm bg-bb-teal p-4 text-center font-roboto-sans text-sm tracking-wide text-bb-gray transition duration-500 hover:brightness-125">
                  Prev
               </button>
               <button
                  onClick={nextImage}
                  className="absolute right-0 top-1/2 w-24 -translate-y-1/2 translate-x-14 transform cursor-pointer rounded-sm bg-bb-teal p-4 text-center font-roboto-sans text-sm tracking-wide text-bb-gray transition duration-500 hover:brightness-125">
                  Next
               </button>
            </>
         )}
      </div>
   );
};

export default ImageCarousel;
