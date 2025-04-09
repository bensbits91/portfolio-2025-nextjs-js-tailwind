import { CloudinaryImage } from '@/app/components/image';
import { IconBar } from '@/app/components/common';
import { skillIcons } from '@/app/data';
import { HeroSection, OneColumnSection } from './components/layout';
import { HeadingOne, HeadingTwo, Subheading } from './components/typography';
import Button from '@/app/components/common/Button';
import { Cta } from '@/app/components/common';
import { about, expertise, experience, homeSkills, homeProjects } from './data';

const Home = () => {
   return (
      <>
         <HeroSection>
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
         </HeroSection>
         <OneColumnSection bigBottom>
            <HeadingTwo color="white">Frontend + Fullstack</HeadingTwo>
            <div className="mb-8 max-w-[640px]">
               <IconBar wrap icons={skillIcons(homeSkills)} />
               <Button link="/skills">
                  <div className="md:min-w-[400px]">View all skills</div>
               </Button>
            </div>
         </OneColumnSection>
         <OneColumnSection bigBottom>
            <div className="mb-8 flex gap-12 md:gap-20">
               <div>
                  <div className="text-4xl md:text-5xl">23+</div> years in
                  <div className="text-2xl">Tech</div>
               </div>
               <div>
                  <div className="text-4xl md:text-5xl">12+</div> years in
                  <div className="text-2xl">Frontend</div>
               </div>
               <div>
                  <div className="text-4xl md:text-5xl">9+</div> years in
                  <div className="text-2xl">Fullstack</div>
               </div>
            </div>
            <Button link="/experience">
               <div className="md:min-w-[400px]">View experience</div>
            </Button>
         </OneColumnSection>
         <OneColumnSection bigBottom>
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
         </OneColumnSection>
         <Cta
            data={{
               heading: 'Open to work',
               layout: 'Cta',
               content: [
                  'Looking for a rock-solid software engineer?'
               ],
               link: {
                  href: '/contact',
                  text: 'Contact me now'
               }
            }}
            bg="teal"
         />
      </>
   );
};

export default Home;
