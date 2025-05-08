import { CloudinaryImage, VideoPlayer } from '@/components/image';
import { Heading } from '@/components/typography';

interface ImageGalleryProps {
   images: {
      type?: string;
      name: string;
      caption?: string;
   }[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
   return (
      <div
         className="relative mb-4"
         role="region"
         aria-labelledby="image-gallery-title">
         <h2 id="image-gallery-title" className="sr-only">
            Image and Video Gallery
         </h2>
         {images.map((image, index) => {
            const { type, name, caption } = image;
            return (
               <div key={index} className="mt-8">
                  {caption && (
                     <Heading
                        level={3}
                        appearance={3}
                        color="white"
                        bottom="md">
                        {caption}
                     </Heading>
                  )}
                  <div className="max-w-[800px] overflow-hidden rounded-lg border-2 border-bb-gray-500">
                     {type === 'video' ? (
                        <VideoPlayer filename={name} />
                     ) : (
                        <CloudinaryImage
                           cloudinaryId={name}
                           alt={caption || `Image ${index + 1}`}
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
