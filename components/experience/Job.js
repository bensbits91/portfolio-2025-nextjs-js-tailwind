import { Section } from '@/components/layout';
import { Duties, JobHeader } from './index';

const Job = ({ job }) => (
   <Section width='sm' bottom='lg'>
      <JobHeader job={job} />
      <Duties duties={job.duties} />
   </Section>
);
export default Job;
