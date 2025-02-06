import CloudinaryImage from '@/app/components/common/CloudinaryImage';

const ProjectGridCard = (
   { project, handleClick } // todo: typography and layout components
) => (
   <div className="shadow-dark-card rounded-lg p-8">
      <h2>{project.name}</h2>
      {project.images.length > 0 && (
         <CloudinaryImage
            cloudinaryId={project.images[0]}
            alt={project.name}
            width={200}
            height={200}
         />
      )}
      {/* <p>{project.description}</p> */}
      {project.tech.length > 0 && (
         <p className="text-sm text-gray-500">{(project?.tech).join(' | ')}</p>
      )}
      <button
         onClick={handleClick}
         className="font-roboto-sans mt-12 cursor-pointer rounded-sm bg-[--bb-teal] p-4 text-center text-sm tracking-wide text-[--bb-dark-gray] transition duration-700 hover:brightness-125">
         View Project Details
      </button>
   </div>
);

export default ProjectGridCard;
