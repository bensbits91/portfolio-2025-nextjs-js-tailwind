'use client';
import { useInView } from 'react-intersection-observer';
import { Section } from '@/components/layout';
import { Duties, JobHeader } from './index';
import { DetailsJob } from '@/types/Job';
import { replaceNonAphanumeric } from '@/utils/string';

interface JobProps {
   job: DetailsJob;
}

const Job = ({ job }: JobProps) => {
   const { ref, inView } = useInView({
      threshold: 0,
      rootMargin: '-54px 0px 0px 0px' // adjust for main nav bar height
   });

   const ariaText = replaceNonAphanumeric(
      `job-title-${`${job.role}-${job.company}`}`
   );
   return (
      <Section width="md" bottom="md" ariaLabelledby={ariaText}>
         <div
            ref={ref}
            className={inView ? 'bg-bg sticky top-[54px] z-10' : 'bg-bg'}>
            <JobHeader job={job} id={ariaText} />
         </div>
         <Duties duties={job.duties} />
      </Section>
   );
};

export default Job;
