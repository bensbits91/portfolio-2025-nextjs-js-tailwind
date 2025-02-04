import CloudinaryImage from '../CloudinaryImage';

const ProjectGridCard = ({ project }) => ( // todo: typography and layout components
    <div>
       <h2>{project.name}</h2>
       {project.images.length > 0 && (
          <CloudinaryImage
             cloudinaryId={project.images[0]}
             alt={project.name}
             width={200}
             height={200}
          />
       )}
       <p>{project.description}</p>
       {project.tech.length > 0 && (
          <p className="text-sm text-gray-500">{(project?.tech).join(' | ')}</p>
       )}
    </div>
 );

 export default ProjectGridCard;
