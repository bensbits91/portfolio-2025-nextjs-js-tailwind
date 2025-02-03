import CloudinaryImage from '../components/CloudinaryImage';
import { makeKey } from '../utils';

const ProjectsCardListItem = ({ project }) => {
   const { name } = project;
   const key = makeKey(name);
   return (
      <li key={key}>
         <div>
            <h2>{project.name}</h2>
            {project.images.length > 0 && (
               <CloudinaryImage
                  cloudinaryId={project.images[0]}
                  alt={name}
                  width={200}
                  height={200}
               />
            )}
            <p>{project.description}</p>
            {project.tech.length > 0 && (
               <p className="text-sm text-gray-500">
                  {(project?.tech).join(' | ')}
               </p>
            )}
         </div>
      </li>
   );
};

export default ProjectsCardListItem;
