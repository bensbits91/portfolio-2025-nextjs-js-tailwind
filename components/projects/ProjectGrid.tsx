'use client';
import { useMemo } from 'react';
import ProjectGridCard from './ProjectGridCard';
import { GridProject } from '@/types/Project';

interface ProjectGridProps {
   projects: GridProject[];
   before?: number;
   onOrAfter?: number;
   type?: string;
   inverted?: boolean;
   handleItemClick?: (projectName: string) => void;
}

const ProjectGrid = ({
   projects,
   before,
   onOrAfter,
   type,
   inverted = false,
   handleItemClick
}: ProjectGridProps) => {
   let projectsToShow = useMemo(
      () =>
         projects.map(project => ({
            ...project,
            getFeaturedImage: () => ({
               name: project.images[0]?.name || 'default',
               frame: 'default-frame',
               hideFromGridCard: project.images[0]?.hideFromGridCard
                  ? project.images[0]?.hideFromGridCard
                  : false
            })
         })),
      [projects]
   );

   if (onOrAfter) {
      projectsToShow = projectsToShow.filter(project => {
         return Number(project.year) >= onOrAfter;
      });
   }

   if (before) {
      projectsToShow = projectsToShow.filter(project => {
         return Number(project.year) < before;
      });
   }

   if (type) {
      projectsToShow = projectsToShow.filter(project => {
         return project.type === type;
      });
   }

   return (
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
         {projectsToShow.map((project, index) => (
            <div
               key={index}
               onClick={() => handleItemClick && handleItemClick(project.name)}>
               <ProjectGridCard
                  project={project}
                  inverted={inverted}
                  handleClick={handleItemClick}
               />
            </div>
         ))}
      </div>
   );
};

export default ProjectGrid;
