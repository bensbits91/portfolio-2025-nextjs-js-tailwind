'use client';
import { useState, useMemo } from 'react';
import { ThreeColumnSection } from '@/components/layout';
import { ProjectGridCard, ProjectGridModal } from './index';
import { projectsForGallery } from '@/app/data';

interface ProjectGridProps {
   before?: number;
   onOrAfter?: number;
   type?: string;
}

const ProjectGrid = ({ before, onOrAfter, type }: ProjectGridProps) => {
   let projects = useMemo(
      () =>
         projectsForGallery.map(project => ({
            ...project,
            year: Number(project.year),
            getFeaturedImage: () => ({
               name: project.images[0]?.name || 'default',
               frame: 'default-frame'
            })
         })),
      []
   );
   const [modalData, setModalData] = useState<
      (typeof projectsForGallery)[0] | null
   >(null);

   if (before) {
      projects = projects.filter(project => {
         return Number(project.year) < before;
      });
   } else if (onOrAfter) {
      projects = projects.filter(project => {
         return Number(project.year) >= onOrAfter;
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
                     handleClick={() =>
                        setModalData({
                           ...project,
                           year: project.year.toString() // Convert year to string to match the expected type
                        })
                     }
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
