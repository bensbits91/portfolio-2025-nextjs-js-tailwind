import { Heading, Text } from '@/components/typography';
import { duration } from '@/utils/date';
import { HeaderJob } from '@/types/Job';

interface JobHeaderProps {
   job: HeaderJob;
}

const JobHeader = ({ job }: JobHeaderProps) => {
   const { company, role, start, end, location } = job;
   return (
      <div className="mb-8">
         <Heading level={2} appearance={2} bottom="md" color="secondary">
            {role}
         </Heading>
         <Heading level={3} appearance={4} color="white">
            {company}
            <span className="text-bb-gray-300 light:text-bb-gray-500"> in {location}</span>
         </Heading>
         <Text>{duration(start, end)}</Text>
      </div>
   );
};

export default JobHeader;
