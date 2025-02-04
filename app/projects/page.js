import ProjectGrid from '@/app/components/project-grid/ProjectGrid';
import { HeadingOne } from '@/app/components/typography';
import { HeroSection } from '@/app/components/layout';

const Projects = () => {
   return (
      <>
         <HeroSection>
            <HeadingOne>Projects</HeadingOne>
         </HeroSection>
         <ProjectGrid />
      </>
   );
};

export default Projects;
