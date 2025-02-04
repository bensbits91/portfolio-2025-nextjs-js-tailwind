import { OneColumnSection } from '@/app/components/layout';
import { Duties, JobHeader } from './index';

const Job = ({ job }) => (
   <OneColumnSection size="normal" bigBottom>
      <JobHeader job={job} />
      <Duties duties={job.duties} />
   </OneColumnSection>
);
export default Job;
