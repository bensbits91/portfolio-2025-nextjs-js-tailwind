import { HeadingTwo, SubtleText } from '@/app/components/typography';
import { duration } from '@/app/utils.js';

const JobHeader = ({ job }) => {
   const { company, role, start, end, location } = job;
   return (
      <div className="mb-4">
         <HeadingTwo>{role}</HeadingTwo>
         <div className="text-lg font-semibold">
            {company}
            <span className="text-bb-gray-300"> in {location}</span>
         </div>
         <SubtleText>{duration(start, end)}</SubtleText>
      </div>
   );
};

export default JobHeader;
