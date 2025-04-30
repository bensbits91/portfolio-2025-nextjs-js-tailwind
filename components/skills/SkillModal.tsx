import {
   Dialog,
   Overlay,
   Content,
   Title,
   Description,
   Close
} from '@radix-ui/react-dialog';
import Link from 'next/link';
import { Heading, Text, List } from '@/components/typography';
import { Rating } from '@/components/common';
import { CloseIcon } from '@/components/icons';
import { CloudinaryImage } from '@/components/image';
import { ModalSkill } from '@/types/Skill';

interface SkillModalProps {
   skill: ModalSkill | null | undefined;
   isOpen: boolean;
   onOpenChange: (open: boolean) => void;
}

export default function SkillModal({
   skill,
   isOpen,
   onOpenChange
}: SkillModalProps) {
   if (!skill) return null;
   const {
      name,
      cloudinary,
      years,
      rating,
      getJobsWithSkill,
      getProjectsWithSkill
   } = skill;
   const jobs = getJobsWithSkill ? getJobsWithSkill() : [];
   const projects = getProjectsWithSkill ? getProjectsWithSkill() : [];

   const appProjects = projects.filter(project => project.type !== 'client');
   const clientProjects = projects.filter(project => project.type === 'client');

   return (
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
         <Overlay className="fixed inset-0 bg-black/30" />
         <Content className="fixed bottom-6 left-6 right-6 top-20 z-20 overflow-hidden rounded-lg bg-bb-gray-900 p-6 shadow-lg md:bottom-6 md:left-12 md:right-12 md:top-20">
            <div className="flex h-52 flex-col gap-2 pt-8 md:gap-4 md:p-4">
               <Close
                  className="fixed right-6 top-20 h-6 w-6 cursor-pointer transition duration-500 ease-in-out hover:text-[yellow] md:right-16 md:top-24"
                  aria-label="Close"
                  onClick={() => onOpenChange(false)}>
                  <CloseIcon />
               </Close>
               <div className="flex gap-8 pt-8 md:gap-12 md:p-4 border-b border-bb-gray-500">
                  <div className="relative h-32 w-32 md:h-40 md:w-40">
                     <CloudinaryImage
                        cloudinaryId={cloudinary as string}
                        alt={name}
                        width={208}
                        height={208}
                     />
                  </div>
                  <div className="sm:pt-6 md:pt-12">
                     <Title className="text-4xl">{name}</Title>
                     <Description className="hidden">{name}</Description>
                     <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
                        {rating && (
                           <div className="flex h-4">
                              <Rating rating={rating} />
                           </div>
                        )}
                        <Text top="no" bottom="no">
                           {years}+ years
                        </Text>
                     </div>
                  </div>
               </div>
            </div>
            <div className="relative max-h-full overflow-y-auto pb-52">
               <div className="pt-8 md:p-8">
                  <Heading level={3} appearance={4}>
                     My experience with {name}
                  </Heading>
                  <div className="flex flex-col gap-4 pt-4 md:flex-row md:gap-12 md:px-4">
                     {jobs && jobs.length > 0 && (
                        <div className="flex-1">
                           <Heading level={4} appearance={6}>
                              Jobs
                           </Heading>
                           <List
                              items={jobs.map(
                                 job => job.role + ' at ' + job.company
                              )}
                           />
                           <div>
                              <Link className="text-bb-teal" href="/experience">
                                 View all experience
                              </Link>
                           </div>
                        </div>
                     )}
                     {clientProjects && clientProjects.length > 0 && (
                        <div className="flex-1">
                           <Heading level={4} appearance={6}>
                              Clients
                           </Heading>
                           <List
                              items={clientProjects.map(
                                 project => project.name
                              )}
                           />
                           <div>
                              <Link className="text-bb-teal" href="/work">
                                 View all projects
                              </Link>
                           </div>
                        </div>
                     )}
                     {appProjects && appProjects.length > 0 && (
                        <div className="flex-1">
                           <Heading level={4} appearance={6}>
                              Apps
                           </Heading>
                           <List
                              items={appProjects.map(project => project.name)}
                           />
                           <div>
                              <Link className="text-bb-teal" href="/work">
                                 View all projects
                              </Link>
                           </div>
                        </div>
                     )}
                  </div>
               </div>
            </div>
         </Content>
      </Dialog>
   );
}
