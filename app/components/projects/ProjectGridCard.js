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
            <div
               onClick={handleClick}
               className="cursor-pointer inline-block overflow-hidden rounded-sm border-2 border-[--bb-dark-gray-900] transition-all duration-700 hover:brightness-125 ease-in-out hover:scale-110">
               <CloudinaryImage
                  cloudinaryId={featuredImage.name}
                  alt={name}
                  width={200}
                  height={200}
                  frame={featuredImage.frame}
               />
            </div>
         )}
         {tech.length > 0 && (
            <p className="text-sm text-gray-500">
               {(project?.tech).join(' | ')}
            </p>
         )}
         <button
            onClick={handleClick}
            className="mt-12 cursor-pointer rounded-sm bg-[--bb-teal] p-4 text-center font-roboto-sans text-sm tracking-wide text-[--bb-dark-gray] transition duration-700 hover:brightness-125 ease-in-out hover:scale-110">
            View Project Details
         </button>
      </div>
   );
};

export default ProjectGridCard;
