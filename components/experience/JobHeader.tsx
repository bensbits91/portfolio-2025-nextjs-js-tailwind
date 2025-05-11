import { Heading } from '@/components/typography';
import { duration } from '@/utils/date';
import { HeaderJob } from '@/types/Job';

interface JobHeaderProps {
   job: HeaderJob;
   id?: string;
}

const JobHeader = ({ job, id }: JobHeaderProps) => {
   const { company, role, start, end, location } = job;
   return (
      <div
         id={id}
         className="flex flex-col gap-1 md:flex-row md:justify-between mb-4 bg-bg">
         <div className="flex flex-col gap-1 md:flex-row md:gap-0">
            <Heading weight="bold" bottom="no" level={2} appearance={6}>
               {role}
            </Heading>
            <Heading bottom="no" level={3} appearance={6}>
               <span className="hidden md:inline">, </span>
               {company}
               <span> &mdash; </span>
               {location}
            </Heading>
         </div>
         <div>
            <Heading bottom="no" level={3} appearance={6}>
               <span className="sr-only">Job duration: </span>
               {duration(start, end, 'pretty')}
            </Heading>
         </div>
      </div>
   );
};

export default JobHeader;
