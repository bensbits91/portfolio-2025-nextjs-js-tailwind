import { IconBar } from '@/app/components/common';
import { skillIcons } from '@/app/data';
import { HeroSection, OneColumnSection } from './components/layout';
import { HeadingOne, HeadingTwo, Subheading } from './components/typography';
import Button from '@/app/components/common/Button';
import { about, expertise, experience, homeSkills, homeProjects } from './data';

const Home = () => {
   return (
      <>
         <HeroSection>
            <HeadingOne>Ben Brooks</HeadingOne>
            <Subheading left color="white">
               {about.summary}
            </Subheading>
         </HeroSection>
         <OneColumnSection bigBottom>
            <HeadingTwo color="white">Frontend + Fullstack</HeadingTwo>
            <div className="mb-8 max-w-[640px]">
               <IconBar wrap icons={skillIcons(homeSkills)} />
               <Button link="/skills">View all skills</Button>
            </div>
         </OneColumnSection>
         <OneColumnSection bigBottom>
            <div className="mb-8 flex gap-12 md:gap-20">
               <div>
                  <div className="text-4xl md:text-5xl">23+</div> years in{' '}
                  <div className="text-2xl">Tech</div>
               </div>
               <div>
                  <div className="text-4xl md:text-5xl">12+</div> years in{' '}
                  <div className="text-2xl">Frontend</div>
               </div>
               <div>
                  <div className="text-4xl md:text-5xl">9+</div> years in{' '}
                  <div className="text-2xl">Fullstack</div>
               </div>
            </div>
            <Button link="/experience">View experience</Button>
         </OneColumnSection>
         {/* <ThreeColumnSection
            heading="Sample projects"
            columns={[
               ...homeProjects.map(project => ({
                  content: <ProjectGridCard project={project} />
               })),
               { content: <Button link="/projects">View more projects</Button> }
            ]}
         /> */}
      </>
   );
};

export default Home;
