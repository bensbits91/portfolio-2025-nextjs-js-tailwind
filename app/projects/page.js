'use client';
import { useState } from 'react';
import { projects } from '../data';
import ImageCarousel from '../components/ImageCarousel';
import CloudinaryImage from '../components/CloudinaryImage';

const Projects = () => {
   const [modalData, setModalData] = useState(null);

   return (
      <>
         <h1>Projects</h1>
         <div className='grid grid-cols-3 gap-4 cursor-pointer'>
            {projects.map((project, index) => (
               <div key={index} onClick={() => setModalData(project)}>
                  <h2>{project.name}</h2>
                  {project.images.length > 0 && (
                     <CloudinaryImage
                        cloudinaryId={project.images[0]}
                        alt={project.name}
                        width={200}
                        height={200}
                     />
                  )}
                  <p>{project.description}</p>
                  {project.tech.length > 0 && (
                     <p className='text-sm text-gray-500'>
                        {(project?.tech).join(' | ')}
                     </p>
                  )}
               </div>
            ))}
         </div>
         <div
            className={`bg-gray-500 text-white p-4 h-[90vh] w-[90vw] fixed bottom-[5vh] left-[5vh] right-[5vh] transform transition-transform duration-500 ease-in-out ${
               modalData ? 'translate-y-0' : 'translate-y-[100vh]'
            }`}>
            <div className='bg-gray-800 text-white p-4 max-h-[80vh] overflow-y-auto'>
               <button onClick={() => setModalData(null)}>hide modal</button>
               <h2>{modalData?.name}</h2>
               {modalData?.images.length > 0 && (
                  <ImageCarousel images={modalData?.images} />
               )}
               <p>{modalData?.description}</p>
               {modalData?.tech.length > 0 && (
                  <p className='text-sm text-gray-400'>
                     {(modalData?.tech).join(' | ')}
                  </p>
               )}
            </div>
         </div>
      </>
   );
};

export default Projects;
