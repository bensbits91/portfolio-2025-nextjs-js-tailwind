import { CloudinaryImage, VideoPlayer } from '@/app/components/image';

const ImageGallery = ({ images }) => {
   return (
      <div className="relative">
         {images.map((image, index) => (
            <div key={index} className="my-12">
               <div className="mx-auto">
                  {image.type === 'video' ? (
                     <VideoPlayer filename={image.name} />
                  ) : (
                     <CloudinaryImage
                        cloudinaryId={image.name}
                        alt={`Image ${index + 1}`}
                        width={600}
                        height={600}
                        full={true}
                     />
                  )}
               </div>
            </div>
         ))}
      </div>
   );
};

export default ImageGallery;
