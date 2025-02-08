'use client';
import { useState, useMemo } from 'react';
import { TwoColumnSection } from '@/app/components/layout';
import { ProjectGridCard, ProjectGridModal } from './index';
import { projectsForGallery } from '@/app/data';

const ProjectGrid = () => {
   const projects = useMemo(() => projectsForGallery, []);
   const [modalData, setModalData] = useState(null);

   return (
      <>
         <TwoColumnSection
            columns={projects.map(project => ({
               content: (
                  <ProjectGridCard
                     project={project}
                     handleClick={() => setModalData(project)}
                  />
               )
            }))}
         />
         <ProjectGridModal
            modalData={modalData}
            closeModal={() => setModalData(null)}
         />
      </>
   );
};

export default ProjectGrid;
