import { Heading, Text } from '@/components/typography';
import { duration } from '@/utils/date';
import { HeaderJob } from '@/types/Job';

interface JobHeaderProps {
   job: HeaderJob;
   id?: string;
}

const JobHeader = ({ job, id }: JobHeaderProps) => {
   const { company, role, start, end, location } = job;
   return (
      <div id={id} className="mb-8">
         <Heading level={2} appearance={2} bottom="md" color="secondary">
            {role}
         </Heading>
         <Heading level={3} appearance={4} color="white">
            {company}
            <span className="light:text-bb-gray-500 text-bb-gray-300">
               {' '}
               in {location}
            </span>
         </Heading>
         <Text>
            <span className="sr-only">Job duration: </span>
            {duration(start, end)}
         </Text>
      </div>
   );
};

export default JobHeader;
