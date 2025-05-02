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

   const nameLength = name.length;
   console.log('bb ~ SkillModal.tsx:43 ~ nameLength:', nameLength);
   const titleSize =
      nameLength > 30
         ? 'text-xl md:text-2xl lg:text-4xl'
         : nameLength > 12
           ? 'text-xl md:text-4xl'
           : nameLength > 8
             ? 'text-3xl md:text-4xl'
             : 'text-4xl';

   return (
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
         <Overlay className="fixed inset-0 bg-black/70" />
         <Content className="fixed left-2 right-2 top-20 z-20 h-[calc(100vh-100px)] overflow-hidden rounded-lg bg-bb-gray-900 p-2 md:p-4 shadow-lg md:left-12 md:right-12 md:top-20">
            <div className="flex h-36 md:h-48 flex-col gap-2 pt-8 md:gap-4 md:p-4">
               <Close
                  className="fixed right-6 top-24 h-6 w-6 cursor-pointer transition duration-500 ease-in-out hover:text-[yellow] md:right-16 md:top-24"
                  aria-label="Close"
                  onClick={() => onOpenChange(false)}>
                  <CloseIcon />
               </Close>
               <div className="flex items-center gap-6 px-4 md:gap-12 md:p-4">
                  <div className="relative h-24 w-24 md:h-32 md:w-32">
                     <CloudinaryImage
                        cloudinaryId={cloudinary as string}
                        alt={name}
                        width={208}
                        height={208}
                     />
                  </div>
                  <div>
                     <Title className={titleSize}>{name}</Title>
                     <Description className="hidden">{name}</Description>
                     <div className="flex flex-col sm:flex-row sm:items-center md:gap-4">
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
            <div className="relative h-[calc(100%-148px)] md:h-[calc(100%-196px)] overflow-y-auto rounded-md bg-[var(--bb-gray-dark-100)] p-4">
               <div className="pt-4 md:px-8 md:pb-4">
                  <Heading level={3} appearance={4}>
                     My experience with {name}
                  </Heading>
                  <div className="flex flex-col gap-4 pt-4 md:flex-row md:gap-12 md:px-4">
                     {jobs && jobs.length > 0 && (
                        <div className="mb-4 flex-1 border-t border-bb-gray-500 pt-8 md:mb-0 md:border-t-0 md:pt-0">
                           <Heading level={4} appearance={6}>
                              Full-Time Roles
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
                        <div className="mb-4 flex-1 border-t border-bb-gray-500 pt-8 md:mb-0 md:border-t-0 md:pt-0">
                           <Heading level={4} appearance={6}>
                              Contracts
                           </Heading>
                           <List
                              items={clientProjects.map(
                                 project => project.name
                              )}
                           />
                           <div>
                              <Link className="text-bb-teal" href="/projects">
                                 View all projects
                              </Link>
                           </div>
                        </div>
                     )}
                     {appProjects && appProjects.length > 0 && (
                        <div className="mb-4 flex-1 border-t border-bb-gray-500 pt-8 md:mb-0 md:border-t-0 md:pt-0">
                           <Heading level={4} appearance={6}>
                              Apps & Components
                           </Heading>
                           <List
                              items={appProjects.map(project => project.name)}
                           />
                           <div>
                              <Link className="text-bb-teal" href="/projects">
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
