import { HeadingTwo, P } from '@/app/components/typography';
import { duration } from '@/app/utils.js';

const JobHeader = ({ job }) => {
   const { company, role, start, end, location } = job;
   return (
      <div className="mb-8">
         <HeadingTwo>{role}</HeadingTwo>
         <div className="md:pl-2 text-lg font-semibold">
            {company}
            <span className="text-bb-gray-300"> in {location}</span>
         </div>
         <div className="md:pl-2">
            <P>{duration(start, end)}</P>
         </div>
      </div>
   );
};

export default JobHeader;
