import { ImageGallery, CloudinaryImage } from '@/components/image';
import { Heading, Text } from '@/components/typography';
import { CodeLink, IconBar } from '@/components/common';
import { skillIcons } from '@/app/data';
import { ModalProject } from '@/types/Project';

interface ProjectGridModalProps {
   modalData: ModalProject | null;
   closeModal: () => void;
}

const ProjectGridModal = ({ modalData, closeModal }: ProjectGridModalProps) => {
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
   const images = modalData?.getModalImages
      ? modalData.getModalImages().map(image => ({
           type: image.type || ('image' as const),
           name: image.name || '',
           caption: image.caption || ''
        }))
      : [];

   const CloseButton = () => (
      <button
         className="hover-delay hover-brightness hover-scale"
         onClick={closeModal}>
         <CloudinaryImage
            cloudinaryId="close_wd9td4"
            alt="Close"
            width={24}
            height={24}
         />
      </button>
   );

   // todo: modal as HOC
   const TempChildren = () => {
      return (
         <>
            <p className="mb-4 sm:hidden">{year}</p>
            {tech && tech.length > 0 && (
               <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row">
                  <IconBar icons={skillIcons(tech)} />
                  {codeLink && (
                     <CodeLink
                        codeLink={{ href: codeLink, text: 'View Code' }}
                     />
                  )}
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
               {description && (
                  <Text size="md" bottom="no">
                     {description}
                  </Text>
               )}
               {motivation && <Text bottom="no">Motivation: {motivation}</Text>}
               {outcome && <Text bottom="no">Outcome: {outcome}</Text>}
               {moreInfoLink && (
                  <a
                     href={moreInfoLink}
                     className="hover-delay hover-brightness inline text-sm text-bb-teal">
                     Read more about this project
                  </a>
               )}
               {images.length > 0 && <ImageGallery images={images} />}
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
            className={`fixed bottom-[5vh] left-[3vw] z-50 h-[85vh] w-[94vw] rounded-lg bg-bb-gray-900 p-4 md:left-[5vw] md:w-[90vw] ${
               modalData ? 'translate-y-0' : 'translate-y-[100vh]'
            } transform transition-transform duration-500 ease-in-out`}>
            <div className="relative h-full text-bb-gray-200 md:p-4">
               <div className="flex h-16 w-full items-start justify-between">
                  <div className="hidden items-baseline gap-4 sm:flex">
                     <Heading level={2} appearance={2} color="jade">
                        {name}
                     </Heading>
                     <p>{year}</p>
                  </div>
                  <div className="flex items-baseline gap-4 sm:hidden">
                     <Heading level={2} appearance={3} color="jade">
                        {name}
                     </Heading>
                  </div>
                  <CloseButton />
               </div>
               <div className="h-[calc(100%-60px)] overflow-y-auto md:px-5">
                  <TempChildren />
               </div>
            </div>
         </div>
      </>
   );
};

export default ProjectGridModal;
