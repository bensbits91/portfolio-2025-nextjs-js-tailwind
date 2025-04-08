'use client';
import { useState, useMemo } from 'react';
import { TwoColumnSection } from '@/app/components/layout';
import { ProjectGridCard, ProjectGridModal } from './index';
import { projectsForGallery } from '@/app/data';

const ProjectGrid = ({ before, onOrAfter }) => {
   let projects = useMemo(() => projectsForGallery, []);
   const [modalData, setModalData] = useState(null);

   if (before) {
      projects = projects.filter(project => {
         return project.year < before;
      });
   } else if (onOrAfter) {
      projects = projects.filter(project => {
         return project.year >= onOrAfter;
      });
   }

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
