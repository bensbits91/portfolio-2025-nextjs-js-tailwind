import { useMemo } from 'react';
import Link from 'next/link';
import { ResumeIcon } from '@/components/icons';
import { Job } from '@/components/experience';
import { Section } from '@/components/layout';
import { Heading } from '@/components/typography';
import { PrimaryCta } from '@/components/common';
import { experience } from '@/data/experience';

const Experience = () => {
   const xp = useMemo(() => experience, []);
   return (
      <>
         <Section top="xl" width="sm">
            <Heading level={1} appearance={1} bottom="lg">
               Experience
            </Heading>
            <div className="mb-8 lg:mb-12">
               <Link
                  href="https://res.cloudinary.com/ddfrx5278/image/upload/v1739151148/Ben_Brooks_Resume_vqqprw.pdf"
                  target="_blank"
                  title="Download Resume"
                  className="flex w-max items-center gap-2 link">
                  <div className="h-5 w-5">
                     <ResumeIcon />
                  </div>
                  <span>Download R&eacute;sum&eacute;</span>
               </Link>
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
