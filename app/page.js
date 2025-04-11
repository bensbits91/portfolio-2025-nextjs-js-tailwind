import { CloudinaryImage } from '@/app/components/image';
import { IconBar } from '@/app/components/common';
import { skillIcons } from '@/app/data';
import { Section } from './components/layout';
import { HeadingOne, HeadingTwo, Subheading } from './components/typography';
import Button from '@/app/components/common/Button';
import { about, expertise, experience, homeSkills, homeProjects } from './data';

const Home = () => {
   return (
      <>
         <Section fullheight width="sm" bg="transparent">
            <div className="flex items-start justify-between sm:justify-start sm:gap-12">
               <div>
                  <HeadingOne>Ben Brooks</HeadingOne>
                  <Subheading left color="white">
                     {about.summary}
                  </Subheading>
               </div>
               <div className="w-[80px] md:w-[150px]">
                  <CloudinaryImage
                     cloudinaryId="ben-2024-a-circle_ra873b"
                     alt="Photo of Ben Brooks"
                     width={150}
                     height={150}
                  />
               </div>
            </div>
            {/* </Section>
         <Section height width="sm"> */}
            <HeadingTwo color="white">Frontend + Fullstack</HeadingTwo>
            <div className="mb-8 max-w-[560px]">
               <IconBar wrap icons={skillIcons(homeSkills)} />
               <Button link="/skills">
                  <div className="md:min-w-[400px]">View all skills</div>
               </Button>
            </div>
         </Section>
         <Section top="lg" bottom="lg" width="sm" bg="yellow">
            <div className="mb-8 flex gap-12 text-bb-gray md:gap-20">
               <div>
                  <div className="text-4xl md:text-5xl">23+</div> years in
                  <div className="text-xl md:text-2xl">Tech</div>
               </div>
               <div>
                  <div className="text-4xl md:text-5xl">12+</div> years in
                  <div className="text-xl md:text-2xl">Frontend</div>
               </div>
               <div>
                  <div className="text-4xl md:text-5xl">9+</div> years in
                  <div className="text-xl md:text-2xl">Fullstack</div>
               </div>
            </div>
            <Button inverted yellow link="/experience">
               <div className="md:min-w-[400px]">View experience</div>
            </Button>
         </Section>
         <Section top="lg" bottom="lg" width="sm">
            <div className="mb-8 flex flex-col gap-12 md:flex-row md:gap-20">
               <div>
                  <div className="text-4xl md:text-5xl">100s</div>
                  <div>of custom</div>
                  <div className="text-2xl">Apps & Websites</div>
               </div>
               <div>
                  <div className="text-4xl md:text-5xl">Dozens</div>
                  <div>of Design Systems &</div>
                  <div className="text-2xl">Component Libraries</div>
               </div>
            </div>
            <Button link="/work">
               <div className="md:min-w-[400px]">View work samples</div>
            </Button>
         </Section>
         {/* <Section fullheight width="sm" bg="teal">
            <div className="mb-8 text-bb-gray">
               <div className="text-4xl md:text-5xl">Uniquely Valuable</div>
               <div>
                  Math/music/language --&gt; technical documentation --&gt;
                  process engineering --&gt; team building --&gt; software
                  customization --&gt; frontend development --&gt; fullstack
                  software engineering
               </div>
            </div>
            <Button inverted link="/story">
               <div className="md:min-w-[400px]">Ready my story</div>
            </Button>
         </Section> */}
         <Section top="lg" bottom="lg" width="sm" bg="teal">
            <div className="mb-8 text-bb-gray">
               <div className="text-4xl md:text-5xl">Open to Work</div>
               <div>Looking for a rock-solid software engineer?</div>
            </div>
            <Button inverted link="/contact">
               <div className="md:min-w-[400px]">Contact me now</div>
            </Button>
         </Section>
      </>
   );
};

export default Home;
