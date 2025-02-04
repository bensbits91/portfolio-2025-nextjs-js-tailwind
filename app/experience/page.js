import { useMemo } from 'react';
import { Job } from '@/app/components/experience';
import { HeroSection } from '@/app/components/layout';
import { HeadingOne } from '@/app/components/typography';
import { experience } from '@/app/data.js';

const Experience = () => {
   const xp = useMemo(() => experience, []);
   return (
      <>
         <HeroSection bigBottom={false}>
            <HeadingOne>Experience</HeadingOne>
         </HeroSection>
         {xp.map((job, index) => (
            <Job key={index} job={job} />
         ))}
      </>
   );
};

export default Experience;
