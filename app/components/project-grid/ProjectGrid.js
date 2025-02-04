'use client';
import { useState } from 'react';
import { projects } from '../../data';
import { TwoColumnSection } from '../layout';
import { ProjectGridCard, ProjectGridModal } from './index';

const ProjectGridWithModal = () => {
   const [modalData, setModalData] = useState(null);

   return (
      <>
         <TwoColumnSection
            columns={projects.map(project => ({
               content: <ProjectGridCard project={project} />,
               handleClick: () => setModalData(project)
            }))}
         />
         <ProjectGridModal
            modalData={modalData}
            closeModal={() => setModalData(null)}
         />
      </>
   );
};

export default ProjectGridWithModal;
