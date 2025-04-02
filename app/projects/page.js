import { FeaturedProjectCard, ProjectGrid } from '@/app/components/projects';
import { HeadingOne, SubtleText, P } from '@/app/components/typography';
import { HeroSection } from '@/app/components/layout';
import { Cta } from '@/app/components/common';

const Projects = () => {
   return (
      <>
         <HeroSection bigBottom={false}>
            <HeadingOne>Sample Projects</HeadingOne>
            <SubtleText>
               A couple of newer projects and a bunch of older work.
            </SubtleText>
         </HeroSection>
         <FeaturedProjectCard skills={['NodeJS', 'React.js', 'Next.js', 'MongoDB', 'Fastify', 'CSS Modules', 'Responsive Design', 'Turbopack']}>
            <P>
               A personal tracker and rating system for all the things you do,
               watch, read, play, listen to... Kind of like Goodreads but for
               everything. A fun full-stack passion project.
            </P>
         </FeaturedProjectCard>
         <ProjectGrid />
         <Cta
            data={{
               heading: 'Need help with a project?',
               layout: 'Cta',
               content: ["Let's chat and see if I can help."],
               link: {
                  href: '/contact',
                  text: "Let's connect!"
               }
            }}
            bg="teal"
         />
      </>
   );
};

export default Projects;
