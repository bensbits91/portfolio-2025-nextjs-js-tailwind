import { ProjectGrid } from '@/app/components/projects';
import { HeadingOne, Subheading } from '@/app/components/typography';
import { HeroSection } from '@/app/components/layout';

const Projects = () => {
   return (
      <>
         <HeroSection bigBottom={false}>
            <HeadingOne>Sample Projects</HeadingOne>
            <Subheading>
               A couple newer projects and a bunch of older work.
            </Subheading>
         </HeroSection>
         <ProjectGrid />
      </>
   );
};

export default Projects;
