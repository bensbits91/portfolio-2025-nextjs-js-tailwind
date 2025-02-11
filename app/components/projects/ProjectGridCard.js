import { CloudinaryImage } from '@/app/components/image';
import { HeadingThree } from '@/app/components/typography';

const ProjectGridCard = (
   { project, handleClick }
) => {
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
         className="mb-4 inline-block lg:cursor-pointer overflow-hidden rounded-sm border-2 border-bb-gray-900 hover-delay hover-brightness hover-scale">
         {imageElement}
      </div>
   );

   const nonClickableImageElement = <div className="mb-4">{imageElement}</div>;

   const imageToDisplay = handleClick
      ? clickableImageElement
      : nonClickableImageElement;

   return (
      <div className="rounded-lg p-8 shadow-dark-card border-2 border-bb-gray-900">
         <HeadingThree>{name}</HeadingThree>
         {featuredImage && imageToDisplay}
         {tech.length > 0 && (
            <p className="text-sm text-gray-500">
               {(project?.tech).join('\xA0| ')}
            </p>
         )}
         {handleClick && (
            <button
               onClick={handleClick}
               className="mt-12 rounded-sm bg-bb-teal p-4 text-center font-roboto-sans text-sm tracking-wide text-bb-gray hover-delay hover-brightness hover-scale">
               View Project Details
            </button>
         )}
      </div>
   );
};

export default ProjectGridCard;
