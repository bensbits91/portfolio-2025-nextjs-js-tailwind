'use client';
import { useState, useMemo } from 'react';
import { TwoColumnSection } from '../layout';
import { ProjectGridCard, ProjectGridModal } from './index';
import { recentProjects, olderProjects } from '@/app/data';

const ProjectGridWithModal = () => {
   const recentProjs = useMemo(() => recentProjects, []);
   const olderProjs = useMemo(() => olderProjects, []);
   const [modalData, setModalData] = useState(null);

   return (
      <>
         <TwoColumnSection
            heading="Recent Projects"
            columns={recentProjs.map(project => ({
               content: (
                  <ProjectGridCard
                     project={project}
                     handleClick={() => setModalData(project)}
                  />
               )
            }))}
         />
         <TwoColumnSection
            heading="Older Projects"
            columns={olderProjs.map(project => ({
               content: (
                  <ProjectGridCard
                     project={project}
                     handleClick={() => setModalData(project)}
                  />
               )
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
