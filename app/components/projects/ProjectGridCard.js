import { CloudinaryImage } from '@/app/components/image';
import { HeadingThree } from '@/app/components/typography';
import { IconBar } from '@/app/components/common';
import { skillIcons } from '@/app/data';

const ProjectGridCard = ({ project, handleClick }) => {
   const { name, tech } = project;
   const featuredImage = project.getFeaturedImage();

   const imageElement = (
      <CloudinaryImage
         cloudinaryId={featuredImage.name}
         alt={name}
         width={200}
         height={200}
         frame={featuredImage.frame}
      />
   );

   const clickableImageElement = (
      <div
         onClick={handleClick}
         className="hover-delay hover-brightness hover-scale mb-4 inline-block overflow-hidden rounded-sm border-2 border-bb-gray-900 lg:cursor-pointer">
         {imageElement}
      </div>
   );

   const nonClickableImageElement = <div className="mb-4">{imageElement}</div>;

   const imageToDisplay = handleClick
      ? clickableImageElement
      : nonClickableImageElement;

   return (
      <div className="rounded-lg border-2 border-bb-gray-900 p-8 shadow-dark-card bg-gradient">
         <HeadingThree>{name}</HeadingThree>
         {featuredImage && imageToDisplay}
         {tech.length > 0 && (
            <div className="my-2">
               <IconBar icons={skillIcons(tech)} />
            </div>
         )}
         {handleClick && (
            <button
               onClick={handleClick}
               className="hover-delay hover-brightness hover-scale mt-12 w-full rounded-sm bg-bb-teal p-4 text-center font-roboto-sans text-sm tracking-wide text-bb-gray md:w-max">
               View Project Details
            </button>
         )}
      </div>
   );
};

export default ProjectGridCard;
