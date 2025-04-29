import { CloudinaryImage } from '@/components/image';
import { ProjectGrid } from '@/components/projects';
import { Heading, Text } from '@/components/typography';
import { Section } from '@/components/layout';
import { PrimaryCta, Button } from '@/components/common';

const Work = () => {
   return (
      <>
         <Section top="xl" width="lg">
            <Heading bottom="lg">Sample Projects</Heading>
            <Heading level={2} appearance={2} color="jade">
               Recent Projects
            </Heading>
         </Section>
         <ProjectGrid onOrAfter={2025} />
         <Section top="lg" bottom="lg" width="md" bg="teal">
            <div className="flex flex-col gap-8 md:flex-row">
               <div className="max-w-[400px]">
                  <Heading level={2} appearance={2} color="gray">
                     2021 to 2024
                  </Heading>
                  <Text color="gray" size="lg">
                     I spent almost four years at ZenBusiness working on the
                     public website, customer-facing apps, internal tools, APIs,
                     microservices, experiments and more.
                  </Text>
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
            <Heading level={2} appearance={2} color="jade">
               2021 &amp; Earlier
            </Heading>
            <Text color="white" size="lg">
               From 2013 to 2021, I built hundreds of websites and apps for all
               kinds of clients. To facilitate speedy development, I created a
               library of reusable components.
            </Text>
         </Section>
         <Section top="sm" bottom="sm" width="lg">
            <Heading level={3} appearance={3}>
               Clients
            </Heading>
            <Text color="white" size="lg">
               I&apos;ve worked with a variety of clients, from small businesses
               to large corporations. I built everything from simple websites to
               complex web applications.
            </Text>
         </Section>
         <ProjectGrid before={2025} type="client" />
         <Section top="sm" bottom="sm" width="lg">
            <Heading level={3} appearance={3}>
               Apps, Widgets &amp; Components
            </Heading>
            <Text color="white" size="lg">
               I&apos;ve built countless of components and widgets, including UI
               libraries and design systems.
            </Text>
         </Section>
         <ProjectGrid before={2025} type="app" />
         <PrimaryCta />
      </>
   );
};

export default Work;
