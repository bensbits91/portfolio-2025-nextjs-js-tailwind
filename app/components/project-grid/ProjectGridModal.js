import ImageCarousel from '../ImageCarousel';

const ProjectGridModal = ({ modalData, closeModal }) => ( // todo: typography and layout components; better classes/style
   <div
      className={`fixed bottom-[5vh] left-[5vh] right-[5vh] h-[90vh] w-[90vw] transform bg-gray-500 p-4 text-white transition-transform duration-500 ease-in-out ${
         modalData ? 'translate-y-0' : 'translate-y-[100vh]'
      }`}>
      <div className="relative max-h-[80vh] overflow-y-auto bg-gray-800 p-4 text-white">
         <button className="absolute right-0 top-0" onClick={closeModal}>
            x
         </button>
         <h2>{modalData?.name}</h2>
         {modalData?.images.length > 0 && (
            <ImageCarousel images={modalData?.images} />
         )}
         <p>{modalData?.description}</p>
         {modalData?.tech.length > 0 && (
            <p className="text-sm text-gray-400">
               {(modalData?.tech).join(' | ')}
            </p>
         )}
      </div>
   </div>
);

export default ProjectGridModal;
