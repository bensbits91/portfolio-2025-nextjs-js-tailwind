import { Section } from '@/components/layout';
import { Duties, JobHeader } from './index';
import { DetailsJob } from '@/types/Job';

interface JobProps {
   job: DetailsJob;
}

const Job = ({ job }: JobProps) => (
   <Section width="sm" bottom="lg">
      <JobHeader job={job} />
      <Duties duties={job.duties} />
   </Section>
);

export default Job;
