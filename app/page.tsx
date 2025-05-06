import { CloudinaryImage } from '@/components/image';
import { IconBar } from '@/components/common';
import { Section } from '@/components/layout';
import { Heading, Text } from '@/components/typography';
import Button from '@/components/common/Button';
import { ContactPopper } from '@/components/contact';
import { about } from '@/data/about';
import { skillIcons, homeSkills } from '@/data/skills';

const Home = () => {
   return (
      <>
         <Section fullheight width="sm" bg="transparent">
            <div className="flex items-start justify-between sm:justify-start sm:gap-12">
               <div>
                  <Heading>Ben Brooks</Heading>
                  <Text size="lg">{about.summary}</Text>
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
            <Heading level={2} appearance={2} bottom="md">
               Frontend + Fullstack
            </Heading>
            <div className="mb-8 max-w-[560px]">
               <IconBar
                  wrap
                  pop
                  icons={skillIcons(homeSkills).filter(
                     (
                        icon
                     ): icon is {
                        src: string;
                        altText: string;
                        iconName: string;
                     } => icon.src !== undefined
                  )}
               />
               <Button link="/skills">
                  <div className="md:min-w-[400px]">View all skills</div>
               </Button>
            </div>
         </Section>
         <Section fullheight top="lg" bottom="lg" width="sm" bg="teal">
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
            <Button inverted link="/experience">
               <div className="md:min-w-[400px]">View experience</div>
            </Button>
         </Section>
         <Section fullheight top="lg" bottom="lg" width="sm">
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
            <Button link="/projects">
               <div className="md:min-w-[400px]">View work samples</div>
            </Button>
         </Section>
         <Section fullheight top="lg" bottom="lg" width="sm" bg="teal">
            <div className="mb-8 text-bb-gray">
               <Heading level={2} appearance={2} color="gray">
                  Open to Work
               </Heading>
               <Text size="lg">
                  Looking for a rock-solid software engineer?
               </Text>
            </div>
            <ContactPopper dark>
               <button className="hover-delay hover-brightness min-w-full md:min-w-[400px] max-w-max rounded-md bg-bb-gray p-4 text-bb-teal">
                  Let&apos;s connect
               </button>
            </ContactPopper>
         </Section>
      </>
   );
};

export default Home;
