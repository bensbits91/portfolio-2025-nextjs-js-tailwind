import { ProjectGrid } from '@/app/components/projects';
import {
   HeadingOne,
   HeadingThree,
   SubtleText
} from '@/app/components/typography';
import { HeroSection } from '@/app/components/layout';
import Button from '@/app/components/common/Button';

// todo: move FeaturedProjectCard to separate component; pass data; add image...
const FeaturedProjectCard = () => (
   <section className="container mx-auto mb-12 max-w-[1200px]">
      <div className="px-10 md:px-20">
         <div className="rounded-lg border-2 border-bb-gray-900 p-8 shadow-dark-card">
            <HeadingThree>Things App v2.0</HeadingThree>
            <p className="mb-4 text-sm text-gray-500">
               A personal tracker and rating system for all the things you do,
               watch, read, play, listen to. Kind of like Goodreads but for
               everything.
            </p>
            <p className="mb-4 text-sm text-gray-500">
               Node | Fastify | MongoDB | Mongoose | React | Next | CSS
               Modules...
            </p>
            <Button link="/things">View Project Details</Button>
         </div>
      </div>
   </section>
);

const Projects = () => {
   return (
      <>
         <HeroSection bigBottom={false}>
            <HeadingOne>Sample Projects</HeadingOne>
            <SubtleText textCenter>
               A couple of newer projects and a bunch of older work.
            </SubtleText>
         </HeroSection>
         <FeaturedProjectCard />
         <ProjectGrid />
      </>
   );
};

export default Projects;
