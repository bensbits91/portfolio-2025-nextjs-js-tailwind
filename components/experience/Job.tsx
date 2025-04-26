import { Section } from '@/components/layout';
import { Duties, JobHeader } from './index';

interface JobProps {
   job: {
      company: string;
      role: string;
      location: string;
      start: string;
      end: string;
      duties: {
         name: string;
         skillNames?: string[];
         description: string;
         moreInfoLink?: {
            text: string;
            href: string;
         };
      }[];
   };
}

const Job = ({ job }: JobProps) => (
   <Section width="sm" bottom="lg">
      <JobHeader job={job} />
      <Duties duties={job.duties} />
   </Section>
);

export default Job;
