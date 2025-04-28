import { FeaturedProjectCard, ProjectGrid } from '@/components/projects';
import { Heading, Text } from '@/components/typography';
import { Section } from '@/components/layout';
import { PrimaryCta } from '@/components/common';

const Projects = () => {
   return (
      <>
         <Section top="xl">
            <Heading>Sample Projects</Heading>
            <Text>A couple of newer projects and a bunch of older work.</Text>
         </Section>
         <FeaturedProjectCard
            skills={[
               'Node.js',
               'React.js',
               'Next.js',
               'MongoDB',
               'Fastify',
               'CSS Modules',
               'Responsive Design',
               'Turbopack'
            ]}>
            <Text>
               A personal tracker and rating system for all the things you do,
               watch, read, play, listen to... Kind of like Goodreads but for
               everything. A fun full-stack passion project.
            </Text>
         </FeaturedProjectCard>
         <ProjectGrid />
         <PrimaryCta />
      </>
   );
};

export default Projects;
