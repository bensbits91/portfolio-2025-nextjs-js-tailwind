import { ImageGallery, CloudinaryImage } from '@/app/components/image';
import {
   HeadingTwo,
   Subheading,
   SubtleText
} from '@/app/components/typography';

// todo: typography and layout components; better classes/style

const ProjectGridModal = ({ modalData, closeModal }) => {
   const { name, description, tech, codeLink, year, motivation, outcome } =
      modalData || {};
   const images = modalData?.getMadalImages();

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

   // todo: modal as HOC
   const TempChildren = () => {
      return (
         <>
            {tech && tech.length > 0 && (
               <Subheading left shrink color="jade-800">
                  {tech.join(', ')}
               </Subheading>
            )}
            <div className="flex flex-col gap-4">
               {codeLink && (
                  <a
                     href={codeLink}
                     target="_blank"
                     rel="noreferrer"
                     className="block w-36 cursor-pointer rounded-sm border-2 border-[--bb-dark-gray-500] p-4 text-center font-roboto-sans text-sm tracking-wide text-[--bb-dark-gray] transition duration-700 hover:brightness-125">
                     <div className="flex items-center gap-2">
                        <CloudinaryImage
                           cloudinaryId="github1_o1ok5i"
                           alt="GitHub"
                           width={30}
                           height={30}
                        />
                        <SubtleText>View Code</SubtleText>
                     </div>
                  </a>
               )}
               {description && <SubtleText>What: {description}</SubtleText>}
               {motivation && <SubtleText>Why: {motivation}</SubtleText>}
               {outcome && <SubtleText>Outcome: {outcome}</SubtleText>}
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
            className={`fixed bottom-[5vh] left-[7.5vw] z-50 h-[85vh] w-[85vw] rounded-lg bg-[--bb-dark-gray-900] p-4 md:left-[5vw] md:w-[90vw] ${
               modalData ? 'translate-y-0' : 'translate-y-[100vh]'
            } transform transition-transform duration-500 ease-in-out`}>
            <div className="relative h-full p-4 text-[--bb-dark-gray-200]">
               <div className="flex h-16 w-full justify-between">
                  <div className='flex items-baseline gap-4'>
                     <HeadingTwo>{name}</HeadingTwo>
                     <p>{year}</p>
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
