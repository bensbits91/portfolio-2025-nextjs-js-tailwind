import { CloudinaryImage } from '@/app/components/image';
import { HeadingThree } from '../typography';

const ProjectGridCard = (
   { project, handleClick } // todo: typography and layout components
) => {
   const { name, tech, year } = project;
   const featuredImage = project.getFeaturedImage();

   return (
      <div className="rounded-lg p-8 shadow-dark-card">
         <HeadingThree>{name}</HeadingThree>
         {featuredImage && (
            <CloudinaryImage
               cloudinaryId={featuredImage.name}
               alt={name}
               width={200}
               height={200}
               suppressAnimation={featuredImage.suppressAnimation}
            />
         )}
         {year && <p className="text-sm text-gray-500">{year}</p>}
         {tech.length > 0 && (
            <p className="text-sm text-gray-500">
               {(project?.tech).join(' | ')}
            </p>
         )}
         <button
            onClick={handleClick}
            className="mt-12 cursor-pointer rounded-sm bg-[--bb-teal] p-4 text-center font-roboto-sans text-sm tracking-wide text-[--bb-dark-gray] transition duration-700 hover:brightness-125">
            View Project Details
         </button>
      </div>
   );
};

export default ProjectGridCard;
