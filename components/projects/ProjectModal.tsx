import {
   Dialog,
   Overlay,
   Content,
   Title,
   Description,
   Close
} from '@radix-ui/react-dialog';
import Link from 'next/link';
import ProjectModalToolbar from './ProjectModalToolbar';
import { ImageGallery } from '@/components/image';
import { Text } from '@/components/typography';
import { CloseIcon } from '@/components/icons';
import { IconBar } from '@/components/common';
import { skillIcons } from '@/data/skills';
import { ModalProject } from '@/types/Project';

// todo: height and padding of modal content is hacky; implement better solution

interface ProjectModalProps {
   project: ModalProject | null | undefined;
   isOpen: boolean;
   onOpenChange: (open: boolean) => void;
}

export default function ProjectModal({
   project,
   isOpen,
   onOpenChange
}: ProjectModalProps) {
   if (!project) return null;
   const {
      name,
      year,
      description,
      tech,
      liveLink,
      codeLink,
      moreInfoLink,
      motivation,
      outcome
   } = project;
   const images = project?.getModalImages
      ? project.getModalImages()?.map(image => ({
           type: image.type || ('image' as const),
           name: image.name || '',
           caption: image.caption || ''
        })) || [] // Fallback to an empty array if getModalImages() returns undefined
      : [];

   return (
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
         <Overlay className="fixed inset-0 bg-black/70" />
         <Content className="fixed left-2 right-2 top-20 z-20 h-[calc(100vh-100px)] overflow-hidden rounded-lg bg-bb-gray-900 p-6 shadow-lg md:left-12 md:right-12 md:top-20">
            <div className="flex h-40 flex-col gap-4 border-b border-bb-gray-500 md:h-48 md:p-4">
               <Close
                  className="fixed right-6 top-24 h-6 w-6 cursor-pointer transition duration-500 ease-in-out hover:text-bb-yellow md:right-16 md:top-24"
                  aria-label="Close"
                  onClick={() => onOpenChange(false)}>
                  <CloseIcon />
               </Close>
               <Title className="text-4xl">{name}</Title>
               <Description className="hidden">{name}</Description>
               <div className="flex items-center gap-8">
                  {tech && tech.length > 0 && (
                     <IconBar
                        icons={skillIcons(tech).filter(
                           (icon): icon is { src: string; altText: string } =>
                              icon.src !== undefined
                        )}
                     />
                  )}
                  {year && (
                     <Text top="no" bottom="no">
                        {year}
                     </Text>
                  )}
               </div>
               {(codeLink || liveLink) && (
                  <ProjectModalToolbar
                     codeLink={codeLink}
                     liveLink={liveLink}
                  />
               )}
            </div>
            <div className="relative h-[calc(100%-140px)] overflow-hidden overflow-y-auto pt-4 md:h-[calc(100%-170px)] md:px-8 md:pt-8">
               {description && (
                  <Text top="md" bottom="no">
                     {description}
                  </Text>
               )}
               {motivation && (
                  <Text top="md" bottom="no">
                     Motivation: {motivation}
                  </Text>
               )}
               {outcome && (
                  <Text top="md" bottom="no">
                     Outcome: {outcome}
                  </Text>
               )}
               {moreInfoLink && (
                  <div className="mt-4">
                     <Link href={moreInfoLink} className="text-bb-teal">
                        Read more about this project
                     </Link>
                  </div>
               )}
               {images.length > 0 && <ImageGallery images={images} />}
            </div>
         </Content>
      </Dialog>
   );
}
