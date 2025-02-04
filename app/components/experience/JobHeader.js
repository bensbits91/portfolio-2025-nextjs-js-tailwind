import { HeadingTwo, SubtleText } from '@/app/components/typography';
import { duration } from '@/app/utils.js';

const JobHeader = ({ job }) => {
   const { company, role, start, end, location } = job;
   return (
      <div className="mb-4">
         <HeadingTwo>{role}</HeadingTwo>
         <div className="text-lg font-semibold">
            {company} in {location}
         </div>
         <SubtleText>{duration(start, end)}</SubtleText>
      </div>
   );
};

export default JobHeader;
