import { Section } from '@/components/layout';
import { Duties, JobHeader } from './index';
import { DetailsJob } from '@/types/Job';
import { replaceNonAphanumeric } from '@/utils/string';

interface JobProps {
   job: DetailsJob;
}

const Job = ({ job }: JobProps) => {
   const ariaText = replaceNonAphanumeric(
      `job-title-${`${job.role}-${job.company}`}`
   );
   return (
      <Section width="sm" bottom="lg" ariaLabelledby={ariaText}>
         <JobHeader job={job} id={ariaText} />
         <Duties duties={job.duties} />
      </Section>
   );
};

export default Job;
