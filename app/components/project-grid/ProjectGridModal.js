import ImageGallery from '@/app/components/common/ImageGallery';
import CloudinaryImage from '../common/CloudinaryImage';
import { HeadingTwo, Subheading, SubtleText } from '../typography';

const ProjectGridModal = ({ modalData, closeModal }) => {
   const { name, images, description, tech } = modalData || {};

   const CloseButton = () => (
      <button
         className="transition-all duration-300 ease-in-out hover:scale-125"
         onClick={closeModal}>
         <CloudinaryImage
            cloudinaryId="close_wd9td4"
            alt="Close"
            width="24"
            height="24"
         />
      </button>
   );

   // todo: typography and layout components; better classes/style
   // todo: move animation to global styles or tailwind config
   return (
      <>
         {modalData && (
            <div
               onClick={closeModal}
               className="fixed inset-0 z-40 bg-black bg-opacity-50"
            />
         )}
         <div
            className={`rounded-lg fixed bottom-[5vh] left-[7.5vh] z-50 h-[85vh] w-[90vw] transform bg-[--bb-dark-gray-900] p-4 transition-transform duration-500 ease-in-out ${
               modalData ? 'translate-y-0' : 'translate-y-[100vh]'
            }`}>
            <div className="relative h-full p-4 text-[--bb-dark-gray-200]">
               <div className="flex h-16 w-full justify-between">
                  <HeadingTwo color='red'>{name}</HeadingTwo>
                  <CloseButton />
               </div>
               <div className="h-[calc(100%-60px)] overflow-y-auto">
                  {description && (
                     <Subheading left shrink>
                        {description}
                     </Subheading>
                  )}
                  {tech && tech.length > 0 && (
                     <SubtleText>Built using: {tech.join(' | ')}</SubtleText>
                  )}
                  {images && images.length > 0 && (
                     <ImageGallery images={images} />
                  )}
               </div>
            </div>
         </div>
      </>
   );
};

export default ProjectGridModal;
