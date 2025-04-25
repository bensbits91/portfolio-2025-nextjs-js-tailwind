import { CloudinaryImage } from '@/app/components/image';
import { ProjectGrid } from '@/app/components/projects';
import {
   HeadingOne,
   HeadingTwo,
   HeadingThree,
   Subheading
} from '@/app/components/typography';
import { Section } from '@/app/components/layout';
import { PrimaryCta, Button } from '@/app/components/common';

const Work = () => {
   return (
      <>
         <Section top='xl' width="lg">
            <HeadingOne>Work Samples</HeadingOne>
            <HeadingTwo>Recent Projects</HeadingTwo>
            <Subheading shrink left color="white">
               In 2025, I&apos;ve been doing contract work, contributing to projects
               and expanding my skills through passion projects.
            </Subheading>
         </Section>
         <ProjectGrid onOrAfter={[2025]} />
         <Section top="lg" bottom="lg" width="md" bg="teal">
            <div className="flex flex-col md:flex-row gap-8">
               <div className='max-w-[400px]'>
                  <HeadingTwo color='gray'>2021 to 2024</HeadingTwo>
                  <Subheading shrink left color="gray">
                     I spent almost four years at ZenBusiness working on the
                     public website, customer-facing apps, internal tools, APIs,
                     microservices, experiments and more.
                  </Subheading>
                  <Button inverted link="/experience">
                     Read more about my experience
                  </Button>
               </div>
               <div>
                  <CloudinaryImage
                     cloudinaryId="zenbusiness_luktjt"
                     alt="ZenBusiness website"
                     width={750}
                     height={750}
                  />
               </div>
            </div>
         </Section>
         <Section top="lg" bottom="sm" width="lg">
            <HeadingTwo>2021 &amp; Earlier</HeadingTwo>
            <Subheading shrink left color="white">
               From 2013 to 2021, I built hundreds of websites and apps for all
               kinds of clients. To facilitate speedy development, I created a
               library of reusable components.
            </Subheading>
         </Section>
         <Section top="sm" bottom="sm" width="lg">
            <HeadingThree>Clients</HeadingThree>
            <Subheading shrink left color="white">
               I&apos;ve worked with a variety of clients, from small businesses to
               large corporations. I built everything from simple websites to
               complex web applications.
            </Subheading>
         </Section>
         <ProjectGrid before={[2025]} type="client" />
         <Section top="sm" bottom="sm" width="lg">
            <HeadingThree>Apps, Widgets &amp; Components</HeadingThree>
            <Subheading shrink left color="white">
               I&apos;ve built countless of components and widgets, including UI libraries and design systems. 
            </Subheading>
         </Section>
         <ProjectGrid before={[2025]} type="app" />
         <PrimaryCta />
      </>
   );
};

export default Work;
