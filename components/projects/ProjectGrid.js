'use client';
import { useState, useMemo } from 'react';
import { TwoColumnSection, ThreeColumnSection } from '@/components/layout';
import { ProjectGridCard, ProjectGridModal } from './index';
import { projectsForGallery } from '@/app/data';

const ProjectGrid = ({ before, onOrAfter, type }) => {
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

   if (type) {
      projects = projects.filter(project => {
         return project.type === type;
      });
   }

   return (
      <>
         <ThreeColumnSection
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
