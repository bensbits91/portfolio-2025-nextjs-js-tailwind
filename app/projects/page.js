import { FeaturedProjectCard, ProjectGrid } from '@/app/components/projects';
import { HeadingOne, SubtleText, P } from '@/app/components/typography';
import { HeroSection } from '@/app/components/layout';

const Projects = () => {
   return (
      <>
         <HeroSection bigBottom={false}>
            <HeadingOne>Sample Projects</HeadingOne>
            <SubtleText textCenter>
               A couple of newer projects and a bunch of older work.
            </SubtleText>
         </HeroSection>
         <FeaturedProjectCard>
            <P>
               A personal tracker and rating system for all the things you do,
               watch, read, play, listen to... Kind of like Goodreads but for
               everything. A fun full-stack passion project.
            </P>
            <P>
               Node | Fastify | MongoDB | Mongoose | React | Next | CSS
               Modules...
            </P>
         </FeaturedProjectCard>
         <ProjectGrid />
      </>
   );
};

export default Projects;
