import { CloudinaryImage, VideoPlayer } from '@/components/image';
import { Heading } from '@/components/typography';

interface ImageGalleryProps {
   images: {
      type: 'image' | 'video';
      name: string;
      caption?: string;
   }[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
   return (
      <div className="relative">
         {images.map((image, index) => {
            const { type, name, caption } = image;
            return (
               <div key={index} className="my-12">
                  {caption && (
                     <Heading level={3} appearance={3} color="white">{caption}</Heading>
                  )}
                  <div className="max-w-[800px] border-2 border-bb-gray-900">
                     {type === 'video' ? (
                        <VideoPlayer filename={name} />
                     ) : (
                        <CloudinaryImage
                           cloudinaryId={name}
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
