import { ImageGallery, CloudinaryImage } from '@/app/components/image';
import {
   HeadingTwo,
   HeadingThree,
   SubtleText
} from '@/app/components/typography';
import { CodeLink, IconBar } from '@/app/components/common';
import { skillIcons } from '@/app/data';

// todo: typography and layout components; better classes/style

const ProjectGridModal = ({ modalData, closeModal }) => {
   const {
      name,
      description,
      tech,
      liveLink,
      codeLink,
      moreInfoLink,
      year,
      motivation,
      outcome
   } = modalData || {};
   const images = modalData?.getMadalImages();

   const CloseButton = () => (
      <button
         className="hover-delay hover-brightness hover-scale"
         onClick={closeModal}>
         <CloudinaryImage
            cloudinaryId="close_wd9td4"
            alt="Close"
            width="24"
            height="24"
         />
      </button>
   );

   // todo: modal as HOC
   const TempChildren = () => {
      return (
         <>
            <p className="sm:hidden">{year}</p>
            {tech && tech.length > 0 && (
               <div className="mb-8">
                  <IconBar icons={skillIcons(tech)} />
               </div>
            )}
            <div className="flex flex-col gap-4">
               {liveLink && (
                  <a
                     className="hover-delay hover-brightness inline text-sm text-bb-teal"
                     href={liveLink}
                     target="_blank"
                     rel="noopener noreferrer">
                     View this project live at: {liveLink}
                  </a>
               )}
               {description && <SubtleText>What: {description}</SubtleText>}
               {motivation && <SubtleText>Why: {motivation}</SubtleText>}
               {outcome && <SubtleText>Outcome: {outcome}</SubtleText>}
               {moreInfoLink && (
                  <a
                     href={moreInfoLink}
                     className="hover-delay hover-brightness inline text-sm text-bb-teal">
                     Read more about this project
                  </a>
               )}
               {codeLink && (
                  <CodeLink codeLink={{ href: codeLink, text: 'View Code' }} />
               )}
               {images && images.length > 0 && <ImageGallery images={images} />}
            </div>
         </>
      );
   };

   return (
      <>
         {modalData && (
            <div
               onClick={closeModal}
               className="fixed inset-0 z-40 bg-black bg-opacity-50"
            />
         )}
         <div
            className={`fixed bottom-[5vh] left-[7.5vw] z-50 h-[85vh] w-[85vw] rounded-lg bg-bb-gray-900 p-4 md:left-[5vw] md:w-[90vw] ${
               modalData ? 'translate-y-0' : 'translate-y-[100vh]'
            } transform transition-transform duration-500 ease-in-out`}>
            <div className="relative h-full text-bb-gray-200 md:p-4">
               <div className="flex h-16 w-full items-start justify-between">
                  <div className="hidden items-baseline gap-4 sm:flex">
                     <HeadingTwo>{name}</HeadingTwo>
                     <p>{year}</p>
                  </div>
                  <div className="flex items-baseline gap-4 sm:hidden">
                     <HeadingThree>{name}</HeadingThree>
                  </div>
                  <CloseButton />
               </div>
               <div className="h-[calc(100%-60px)] overflow-y-auto px-5">
                  <TempChildren data={modalData} />
               </div>
            </div>
         </div>
      </>
   );
};

export default ProjectGridModal;
