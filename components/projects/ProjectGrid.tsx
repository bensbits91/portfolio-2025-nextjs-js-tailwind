'use client';
import { useMemo } from 'react';
import { ThreeColumnSection } from '@/components/layout';
import ProjectGridCard from './ProjectGridCard';
import { GridProject } from '@/types/Project';

interface ProjectGridProps {
   projects: GridProject[];
   before?: number;
   onOrAfter?: number;
   type?: string;
   handleItemClick?: (projectName: string) => void;
}

const ProjectGrid = ({projects, before, onOrAfter, type, handleItemClick }: ProjectGridProps) => {
   let projectsToShow = useMemo(
      () =>
         projects.map(project => ({
            ...project,
            getFeaturedImage: () => ({
               name: project.images[0]?.name || 'default',
               frame: 'default-frame'
            })
         })),
      [projects]
   );

   if (before) {
      projectsToShow = projects.filter(project => {
         return Number(project.year) < before;
      });
   } else if (onOrAfter) {
      projectsToShow = projects.filter(project => {
         return Number(project.year) >= onOrAfter;
      });
   }

   if (type) {
      projectsToShow = projects.filter(project => {
         return project.type === type;
      });
   }

   return (
      <>
         <ThreeColumnSection
            columns={projectsToShow.map(project => ({
               content: (
                  <ProjectGridCard
                     project={project}
                     handleClick={handleItemClick}
                     // handleClick={() =>
                     //    setModalData({
                     //       ...project,
                     //       year: project.year
                     //    })
                     // }
                  />
               )
            }))}
         />
      </>
   );
};

export default ProjectGrid;
