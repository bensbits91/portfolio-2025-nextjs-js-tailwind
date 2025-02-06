import { CloudinaryImage } from '@/app/components/image';

const ImageGallery = ({ images }) => {
   return (
      <div className="relative">
         {images.map((image, index) => (
            <div key={index} className="my-12">
               <div className="px-12">
                  <CloudinaryImage
                     cloudinaryId={image}
                     alt={`Image ${index + 1}`}
                     width={600}
                     height={600}
                     full={true}
                  />
               </div>
            </div>
         ))}
      </div>
   );
};

export default ImageGallery;
