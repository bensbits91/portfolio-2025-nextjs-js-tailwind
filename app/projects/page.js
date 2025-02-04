import ProjectGrid from '../components/project-grid/ProjectGrid';
import { HeadingOne } from '../components/typography';
import { HeroSection } from '../components/layout';

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
