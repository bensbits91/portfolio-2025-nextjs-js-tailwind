import { useMemo } from 'react';
import { GridProject } from '@/types/Project';

interface UseProjectGridParams {
   projects: GridProject[];
   before?: number;
   onOrAfter?: number;
   type?: string;
}

export default function useProjectGrid({
   projects,
   before,
   onOrAfter,
   type
}: UseProjectGridParams) {
   const projectsToShow = useMemo(() => {
      let filteredProjects = projects.map(project => ({
         ...project,
         getFeaturedImage: () => ({
            name: project.images[0]?.name || 'default',
            frame: 'default-frame',
            hideFromGridCard: project.images[0]?.hideFromGridCard || false
         })
      }));

      if (onOrAfter) {
         filteredProjects = filteredProjects.filter(project => {
            return Number(project.year) >= onOrAfter;
         });
      }

      if (before) {
         filteredProjects = filteredProjects.filter(project => {
            return Number(project.year) < before;
         });
      }

      if (type) {
         filteredProjects = filteredProjects.filter(project => {
            return project.type === type;
         });
      }

      return filteredProjects;
   }, [projects, before, onOrAfter, type]);

   return projectsToShow;
}