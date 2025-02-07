import { CloudinaryImage } from '@/app/components/image';
import { makeKey } from '@/app/utils';

const ProjectsCardListItem = ({ project }) => {
   const { name, description, tech } = project;
   const key = makeKey(name);
   const featuredImage = project.getFeaturedImage();

   // todo: typography and layout components; better classes/style
   return (
      <li key={key}>
         <div>
            <h2>{name}</h2>
            {featuredImage && (
               <CloudinaryImage
                  cloudinaryId={featuredImage.name}
                  alt={name}
                  width={200}
                  height={200}
                  suppressAnimation={featuredImage.suppressAnimation}
               />
            )}
            <p>{description}</p>
            {tech.length > 0 && (
               <p className="text-sm text-gray-500">{tech.join(' | ')}</p>
            )}
         </div>
      </li>
   );
};

export default ProjectsCardListItem;
