import { CloudinaryImage } from '@/components/image';
import { Heading } from '@/components/typography';
import { IconBar } from '@/components/common';
import { skillIcons } from '@/app/data';
import { truncateString } from '@/app/utils';

interface Project {
   name: string;
   tech: string[];
   description: string;
   year: number;
   getFeaturedImage: () => { name: string; frame: string };
}

const ProjectGridCard: React.FC<{ project: Project; handleClick?: () => void }> = ({ project, handleClick }) => {
   const { name, tech, description } = project;
   const featuredImage = project.getFeaturedImage();

   const imageElement = (
      <CloudinaryImage
         cloudinaryId={featuredImage.name}
         alt={name}
         width={300}
         height={300}
         // frame={featuredImage.frame}
         full={true}
         // className="h-full w-full object-cover object-top"
      />
   );

   const clickableImageElement = (
      <div
         onClick={handleClick}
         className="hover-delay hover-scale inline-block h-40 w-[100%] overflow-hidden rounded-sm border-2 border-l-0 border-r-0 border-t-0 border-b-bb-gray-900 lg:cursor-pointer">
         {imageElement}
      </div>
   );

   const nonClickableImageElement = <div className="mb-4">{imageElement}</div>;

   const imageToDisplay = handleClick
      ? clickableImageElement
      : nonClickableImageElement;

   const { newString: truncatedName } = name
      ? truncateString(name, 20)
      : {};

   const { newString: truncatedDescription } = description
      ? truncateString(description, 80)
      : {};

   return (
      <div className="bg-gradient-dark overflow-hidden rounded-lg border-2 border-bb-gray-900 shadow-dark-card">
         {featuredImage && imageToDisplay}
         <div className="p-4">
            <Heading level={3} appearance={4} color='white'>{truncatedName}</Heading>
            {tech.length > 0 && (
               <div className="mt-2 mb-4">
                  <IconBar icons={skillIcons(tech)} />
               </div>
            )}
            {description && (
               <p className="mb-4 text-sm text-bb-gray-300">
                  {truncatedDescription}
               </p>
            )}
            {handleClick && (
               <button
                  onClick={handleClick}
                  className="hover-delay hover-brightness w-full rounded-sm bg-bb-teal p-4 text-center font-roboto-sans text-sm tracking-wide text-bb-gray">
                  View Project Details
               </button>
            )}
         </div>
      </div>
   );
};

export default ProjectGridCard;
