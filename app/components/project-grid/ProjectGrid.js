'use client';
import { useState, useMemo } from 'react';
import { TwoColumnSection } from '../layout';
import { ProjectGridCard, ProjectGridModal } from './index';
import { projects } from '@/app/data';

const ProjectGridWithModal = () => {
   const projs = useMemo(() => projects, []);
   const [modalData, setModalData] = useState(null);

   return (
      <>
         <TwoColumnSection
            columns={projs.map(project => ({
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
