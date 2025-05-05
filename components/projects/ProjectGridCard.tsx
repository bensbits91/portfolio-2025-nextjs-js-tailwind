'use client';
import { useState } from 'react';
import { CloudinaryImage } from '@/components/image';
import { Heading } from '@/components/typography';
import { IconBar } from '@/components/common';
import { skillIcons } from '@/data/skills';
import { truncateString } from '@/utils/string';
import { GridProject } from '@/types/Project';
import clsx from 'clsx';

const ProjectGridCard: React.FC<{
   project: GridProject;
   inverted?: boolean;
   handleClick?: (projectName: string) => void;
}> = ({ project, inverted, handleClick }) => {
   const [isHovered, setIsHovered] = useState(false);
   const handleMouseEnter = () => {
      setIsHovered(true);
   };
   const handleMouseLeave = () => {
      setIsHovered(false);
   };

   const { name, tech, description } = project;
   const featuredImage = project.getFeaturedImage();
   const { newString: truncatedName } = name ? truncateString(name, 25) : {};
   const { newString: truncatedDescription } = description
      ? truncateString(description, 70)
      : {};

   return (
      <div
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
         onClick={() => handleClick && handleClick(name)}
         className={clsx(
            'overflow-hidden',
            {
               'card-elevated-force-dark card-clickable-force-dark': inverted
            },
            { 'card-clickable': !inverted }
         )}>
         {featuredImage &&
            featuredImage.name &&
            featuredImage.name !== 'default' &&
            !featuredImage.hideFromGridCard === true && (
               <div
                  className={clsx(
                     'hover-delay mb-4 inline-block h-40 w-full overflow-hidden rounded-md border border-l-0 border-r-0 border-t-0 border-b-bb-gray-900',
                     { 'md:scale-110': isHovered }
                  )}>
                  <CloudinaryImage
                     cloudinaryId={featuredImage.name}
                     alt={name}
                     width={300}
                     height={300}
                     full={true}
                  />
               </div>
            )}
         <div className="p-4">
            <Heading level={3} appearance={4} color="white">
               {truncatedName}
            </Heading>
            {tech.length > 0 && (
               <div className="mb-4 mt-2">
                  <IconBar
                     size={16}
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
               </div>
            )}
            {description && (
               <p className="mb-4 text-sm">{truncatedDescription}</p>
            )}
         </div>
      </div>
   );
};

export default ProjectGridCard;
