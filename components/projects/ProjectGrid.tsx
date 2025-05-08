'use client';
import useProjectGrid from '@/hooks/useProjectGrid';
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
   const projectsToShow = useProjectGrid({ projects, before, onOrAfter, type });

   return (
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
         {projectsToShow.map((project, index) => (
            <ProjectGridCard
               key={index}
               project={project}
               inverted={inverted}
               handleClick={handleItemClick}
            />
         ))}
      </div>
   );
};

export default ProjectGrid;
