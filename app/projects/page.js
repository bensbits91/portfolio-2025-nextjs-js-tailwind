import { FeaturedProjectCard, ProjectGrid } from '@/app/components/projects';
import { HeadingOne, SubtleText, P } from '@/app/components/typography';
import { Section } from '@/app/components/layout';
import { PrimaryCta } from '@/app/components/common';

const Projects = () => {
   return (
      <>
         <Section top='xl'>
            <HeadingOne>Sample Projects</HeadingOne>
            <SubtleText>
               A couple of newer projects and a bunch of older work.
            </SubtleText>
         </Section>
         <FeaturedProjectCard skills={['NodeJS', 'React.js', 'Next.js', 'MongoDB', 'Fastify', 'CSS Modules', 'Responsive Design', 'Turbopack']}>
            <P>
               A personal tracker and rating system for all the things you do,
               watch, read, play, listen to... Kind of like Goodreads but for
               everything. A fun full-stack passion project.
            </P>
         </FeaturedProjectCard>
         <ProjectGrid />
         <PrimaryCta />
      </>
   );
};

export default Projects;
