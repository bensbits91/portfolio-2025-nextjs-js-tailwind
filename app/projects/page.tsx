'use client';
import useProjects from '@/hooks/useProjects';
import { Section } from '@/components/layout';
import { Heading, Text } from '@/components/typography';
import { CloudinaryImage } from '@/components/image';
import {
   ProjectGrid,
   ProjectsTable,
   ProjectsToolbar,
   ProjectModal
} from '@/components/projects';
import { PrimaryCta, Button } from '@/components/common';

const Projects = () => {
   const {
      selectedView,
      handleViewClick,
      selectedProject,
      setSelectedProject,
      projectsToPass,
      handleItemClick
   } = useProjects();

   return (
      <>
         <Section top="xl" width="lg">
            <Heading bottom="lg">Sample Projects</Heading>
            <ProjectsToolbar
               handleViewClick={handleViewClick}
               selectedView={selectedView}
            />
         </Section>
         {selectedView === 'grid' && (
            <>
               <Section top="md" bottom="md" width="lg">
                  <Heading level={2} appearance={2} color="secondary">
                     Recent Projects
                  </Heading>
               </Section>
               <Section top="md" bottom="lg" width="lg">
                  <ProjectGrid
                     onOrAfter={2025}
                     projects={projectsToPass}
                     handleItemClick={handleItemClick}
                  />
               </Section>
               <Section top="lg" bottom="lg" width="lg" bg="teal">
                  <div className="mx-auto mb-20 flex max-w-[960px] flex-col gap-8 md:flex-row">
                     <div className="max-w-[400px]">
                        <Heading level={2} appearance={2} color="dark">
                           ZenBusiness
                        </Heading>
                        <Heading level={3} appearance={4} color="dark">
                           (2021 to 2024)
                        </Heading>
                        <Text color="gray" size="lg">
                           I spent almost four years at ZenBusiness working on
                           the public website, customer-facing apps, internal
                           tools, APIs, microservices, experiments and more.
                        </Text>
                        <Button
                           ariaLabel="Navigate to Experience page"
                           inverted
                           link="/experience">
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
                  <ProjectGrid
                     before={2025}
                     onOrAfter={2021}
                     projects={projectsToPass}
                     inverted
                     handleItemClick={handleItemClick}
                  />
               </Section>
               <Section top="lg" bottom="sm" width="lg">
                  <Heading level={2} appearance={2} color="secondary">
                     Clients (2020 &amp; Earlier)
                  </Heading>
                  <Text color="white" size="lg">
                     I&apos;ve worked with a variety of clients, from small
                     businesses to large corporations. I built everything from
                     simple websites to complex web applications.
                  </Text>
               </Section>
               <Section top="md" bottom="lg" width="lg">
                  <ProjectGrid
                     before={2021}
                     type="client"
                     projects={projectsToPass}
                     handleItemClick={handleItemClick}
                  />
               </Section>
               <Section top="sm" bottom="sm" width="lg">
                  <Heading level={2} appearance={2} color="secondary">
                     Apps, Widgets &amp; Components (2020 &amp; Earlier)
                  </Heading>
                  <Text color="white" size="lg">
                     I&apos;ve built countless of components and widgets,
                     including UI libraries and design systems.
                  </Text>
               </Section>
               <Section top="md" bottom="lg" width="lg">
                  <ProjectGrid
                     before={2021}
                     type="app"
                     projects={projectsToPass}
                     handleItemClick={handleItemClick}
                  />
               </Section>
            </>
         )}
         {selectedView === 'table' && (
            <Section width="lg" bottom="lg">
               <ProjectsTable
                  projects={projectsToPass}
                  handleItemClick={handleItemClick}
               />
            </Section>
         )}
         <PrimaryCta />
         <ProjectModal
            project={
               selectedProject
                  ? projectsToPass.find(
                       project => project.name === selectedProject
                    )
                  : null
            }
            isOpen={!!selectedProject}
            onOpenChange={open => {
               if (!open) {
                  setSelectedProject(null);
               }
            }}
         />
      </>
   );
};

export default Projects;
