import { CloudinaryImage, VideoPlayer } from '@/app/components/image';
import { HeadingThree } from '@/app/components/typography';

const ImageGallery = ({ images }) => {
   return (
      <div className="relative">
         {images.map((image, index) => {
            const { type, name, caption } = image;
            return (
               <div key={index} className="my-12">
                  {caption && (
                     <HeadingThree color="white">{caption}</HeadingThree>
                  )}
                  <div className="max-w-[800px] border-2 border-bb-gray-900">
                     {image.type === 'video' ? (
                        <VideoPlayer filename={image.name} />
                     ) : (
                        <CloudinaryImage
                           cloudinaryId={image.name}
                           alt={`Image ${index + 1}`}
                           width={800}
                           height={800}
                           full={true}
                        />
                     )}
                  </div>
               </div>
            );
         })}
      </div>
   );
};

export default ImageGallery;
