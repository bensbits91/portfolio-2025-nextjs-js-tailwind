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
   handleClick?: (projectName: string) => void;
}> = ({ project, handleClick }) => {
   const [isHovered, setIsHovered] = useState(false);
   const handleMouseEnter = () => {
      setIsHovered(true);
   };
   const handleMouseLeave = () => {
      setIsHovered(false);
   };

   const { name, tech, description } = project;
   const featuredImage = project.getFeaturedImage();

   // const imageElement = (
   //    <CloudinaryImage
   //       cloudinaryId={featuredImage.name}
   //       alt={name}
   //       width={300}
   //       height={300}
   //       full={true}
   //    />
   // );

   // const clickableImageElement = (
   //    <div
   //       onClick={() => handleClick && handleClick(name)}
   //       className="hover-delay hover-scale inline-block h-40 w-[100%] overflow-hidden rounded-sm border-2 border-l-0 border-r-0 border-t-0 border-b-bb-gray-900 lg:cursor-pointer">
   //       {imageElement}
   //    </div>
   // );

   // const nonClickableImageElement = <div className="mb-4">{imageElement}</div>;

   // const imageToDisplay = handleClick
   //    ? clickableImageElement
   //    : nonClickableImageElement;

   const { newString: truncatedName } = name ? truncateString(name, 20) : {};

   const { newString: truncatedDescription } = description
      ? truncateString(description, 80)
      : {};

   return (
      <div
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
         onClick={() => handleClick && handleClick(name)}
         className="hover-delay overflow-hidden rounded-lg border shadow-dark-card hover:border-bb-teal md:cursor-pointer md:hover:bg-bb-gray-800">
         {featuredImage && (
            <div
               className={clsx(
                  'hover-delay mb-4 inline-block h-40 w-full overflow-hidden rounded-sm border border-l-0 border-r-0 border-t-0 border-b-bb-gray-900',
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
                        (icon): icon is { src: string; altText: string } =>
                           icon.src !== undefined
                     )}
                  />
               </div>
            )}
            {description && (
               <p className="mb-4 text-sm text-bb-gray-300">
                  {truncatedDescription}
               </p>
            )}
            {/* {handleClick && (
               <button
                  onClick={() => handleClick && handleClick(name)}
                  className="hover-delay hover-brightness w-full rounded-sm bg-bb-teal p-4 text-center font-roboto-sans text-sm tracking-wide text-bb-gray">
                  View Project Details
               </button>
            )} */}
         </div>
      </div>
   );
};

export default ProjectGridCard;
