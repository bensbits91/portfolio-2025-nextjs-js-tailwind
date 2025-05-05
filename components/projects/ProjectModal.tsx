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
import clsx from 'clsx';

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

   const nameLength = name.length;
   const hasToolbar = codeLink || liveLink;
   const titleSize =
      nameLength > 30
         ? 'text-xl md:text-2xl lg:text-4xl'
         : nameLength > 21
           ? 'text-xl md:text-4xl'
           : nameLength > 16
             ? 'text-3xl md:text-4xl'
             : 'text-4xl';
   const headerHeight = hasToolbar ? 'h-42 md:h-34' : 'h-32 md:h-24';
   const scrollableHeight = hasToolbar
      ? 'h-[calc(100%-236px)] md:h-[calc(100%-216px)]'
      : 'h-[calc(100%-172px)] md:h-[calc(100%-142px)]';

   return (
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
         <Overlay className="fixed inset-0 bg-black/70" />
         <Content className="elevation-1 fixed left-2 right-2 top-20 z-20 h-[calc(100vh-100px)] overflow-hidden rounded-lg p-2 shadow-lg md:left-12 md:right-12 md:top-20">
            <div className={clsx('flex flex-col gap-4', headerHeight)}>
               <Close
                  className="link fixed right-6 top-24 h-6 w-6 md:right-16 md:top-24"
                  aria-label="Close"
                  onClick={() => onOpenChange(false)}>
                  <CloseIcon />
               </Close>
               <div className="flex flex-col gap-4 pt-12 md:pt-8">
                  <Title className={clsx('px-4', titleSize)}>{name}</Title>
                  <Description className="hidden">{name}</Description>
                  <div className="flex items-center gap-8 px-4">
                     {tech && tech.length > 0 && (
                        <IconBar
                           pop
                           size={18}
                           icons={skillIcons(tech).filter(
                              (
                                 icon
                              ): icon is {
                                 src: string;
                                 altText: string;
                                 iconName: string;
                              } => icon.src !== undefined
                           )}
                        />
                     )}
                     {year && (
                        <div className="hidden sm:block">
                           <Text top="no" bottom="no">
                              {year}
                           </Text>
                        </div>
                     )}
                  </div>
                  {hasToolbar && (
                     <div className="px-2">
                        <ProjectModalToolbar
                           codeLink={codeLink}
                           liveLink={liveLink}
                        />
                     </div>
                  )}
               </div>
            </div>
            <div
               className={clsx(
                  'asdf-well relative mx-2 mt-8 overflow-hidden overflow-y-auto rounded-md px-2',
                  'md:px-8 md:pt-8',
                  scrollableHeight
               )}>
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
                     <Link href={moreInfoLink} className="link">
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
