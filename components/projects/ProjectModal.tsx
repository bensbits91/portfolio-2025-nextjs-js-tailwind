import {
   Dialog,
   Overlay,
   Content,
   Title,
   Description,
   Close
} from '@radix-ui/react-dialog';
import Link from 'next/link';
import { Text } from '@/components/typography';
import { CloseIcon } from '@/components/icons';
import { ImageGallery } from '@/components/image';
import { skillIcons } from '@/data/skills';
import { CodeLink, IconBar } from '@/components/common';

import { ModalProject } from '@/types/Project';

interface SkillModalProps {
   project: ModalProject | null | undefined;
   isOpen: boolean;
   onOpenChange: (open: boolean) => void;
}

export default function SkillModal({
   project,
   isOpen,
   onOpenChange
}: SkillModalProps) {
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
         <Overlay className="fixed inset-0 bg-black/30" />
         <Content className="fixed bottom-6 left-6 right-6 top-20 z-20 overflow-scroll rounded-lg bg-bb-gray-900 p-6 shadow-lg md:bottom-6 md:left-12 md:right-12 md:top-20">
            <Close
               className="absolute right-4 top-4 h-4 w-4 cursor-pointer transition duration-500 ease-in-out hover:text-[yellow]"
               aria-label="Close"
               onClick={() => onOpenChange(false)}>
               <CloseIcon />
            </Close>
            <div className="flex flex-col gap-2 pt-8 md:gap-4 md:p-4">
               <div>
                  <Title className="text-4xl">{name}</Title>
                  <Description className="hidden">{name}</Description>
                  {description && (
                     <Text top="no" bottom="no">
                        {description}
                     </Text>
                  )}
                  {tech && tech.length > 0 && (
                     <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row">
                        <IconBar
                           icons={skillIcons(tech).filter(
                              (
                                 icon
                              ): icon is { src: string; altText: string } =>
                                 icon.src !== undefined
                           )}
                        />
                        {codeLink && (
                           <CodeLink
                              codeLink={{
                                 href: codeLink,
                                 text: 'View Code'
                              }}
                           />
                        )}
                     </div>
                  )}
                  {liveLink && (
                     <Link href={liveLink} className="text-bb-teal">
                        {liveLink}
                     </Link>
                  )}
                  {/* {codeLink && (
                        <Text top="no" bottom="no">
                           {codeLink}
                        </Text>
                     )} */}
                  {moreInfoLink && (
                     <Link href={moreInfoLink} className="text-bb-teal">
                        Read more about this project
                     </Link>
                  )}
                  {motivation && (
                     <Text top="no" bottom="no">
                        {motivation}
                     </Text>
                  )}
                  {outcome && (
                     <Text top="no" bottom="no">
                        {outcome}
                     </Text>
                  )}
                  {year && (
                     <Text top="no" bottom="no">
                        {year}
                     </Text>
                  )}
                  {images.length > 0 && <ImageGallery images={images} />}
               </div>
            </div>
         </Content>
      </Dialog>
   );
}
