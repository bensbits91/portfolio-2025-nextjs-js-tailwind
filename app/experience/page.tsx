import { useMemo } from 'react';
import { Job } from '@/components/experience';
import { CloudinaryImage } from '@/components/image';
import { Section } from '@/components/layout';
import { HeadingOne } from '@/components/typography';
import { PrimaryCta } from '@/components/common';
import { experience } from '@/app/data.js';
// todo: make this <a> a reusable button component (need component/button folder and index.js)

const Experience = () => {
   const xp = useMemo(() => experience, []);
   return (
      <>
         <Section top="xl" width="sm">
            <HeadingOne textCenter={false}>Experience</HeadingOne>
            <div className="mb-8 lg:mb-12">
               <a
                  href="https://res.cloudinary.com/ddfrx5278/image/upload/v1739151148/Ben_Brooks_Resume_vqqprw.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="hover-delay hover-brightness block w-52 rounded-sm border-2 border-transparent text-sm tracking-wide text-bb-teal">
                  <div className="flex items-center gap-2">
                     <CloudinaryImage
                        cloudinaryId="resume_o5rgfa"
                        alt="Resume"
                        width={20}
                        height={20}
                     />
                     <p>Download R&eacute;sum&eacute;</p>
                  </div>
               </a>
            </div>
         </Section>
         {xp.map((job, index) => (
            <Job key={index} job={job} />
         ))}
         <PrimaryCta />
      </>
   );
};

export default Experience;
