import { ProjectGrid } from '@/app/components/projects';
import { HeadingOne, Subheading } from '@/app/components/typography';
import { HeroSection } from '@/app/components/layout';

const Projects = () => {
   return (
      <>
         <HeroSection bigBottom={false}>
            <HeadingOne>Sample Projects</HeadingOne>
            <Subheading>
               Most of these are a few years old. I've spent the past few years
               earning some full-stack chops...
            </Subheading>
         </HeroSection>
         <ProjectGrid />
      </>
   );
};

export default Projects;
