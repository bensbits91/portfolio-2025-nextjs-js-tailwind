import { useState, useCallback, useMemo } from 'react';
import { projectsForGallery } from '@/data/projects';

const useProjects = () => {
   const [selectedView, setSelectedView] = useState<'table' | 'grid'>('grid');
   const handleViewClick = useCallback((newView: 'table' | 'grid') => {
      setSelectedView(newView);
   }, []);

   const [selectedProject, setSelectedProject] = useState<string | null>(null);

   const projectsToPass = useMemo(
      () =>
         projectsForGallery.map(project => ({
            ...project,
            getFeaturedImage: () => ({
               name: project.images[0]?.name || 'default',
               frame: 'default-frame'
            })
         })),
      []
   );

   const handleItemClick = useCallback((projectName: string) => {
      setSelectedProject(projectName);
   }, []);

   return {
      selectedView,
      handleViewClick,
      selectedProject,
      setSelectedProject,
      projectsToPass,
      handleItemClick
   };
};

export default useProjects;
