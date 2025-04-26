import { HeadingTwo, Text } from '@/components/typography';
import { duration } from '@/app/utils.js';

interface JobHeaderProps {
   job: {
      company: string;
      role: string;
      start: string;
      end: string;
      location: string;
   };
}

const JobHeader = ({ job }: JobHeaderProps) => {
   const { company, role, start, end, location } = job;
   return (
      <div className="mb-8">
         <HeadingTwo>{role}</HeadingTwo>
         <div className="text-lg font-semibold md:pl-2">
            {company}
            <span className="text-bb-gray-300"> in {location}</span>
         </div>
         <div className="md:pl-2">
            <Text>{duration(start, end)}</Text>
         </div>
      </div>
   );
};

export default JobHeader;
