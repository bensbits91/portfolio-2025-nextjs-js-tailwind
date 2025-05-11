import Duty from './Duty';
import { BaseDuty } from '@/types/Job';

interface DutiesProps {
   duties: BaseDuty[];
}

const Duties = ({ duties }: DutiesProps) => {
   if (!duties || duties.length === 0) {
      return <p>No duties available for this job.</p>;
   }
   return (
      <ul aria-label="Job responsibilities">
         {duties.map((duty, index) => (
            <Duty key={index} duty={duty} />
         ))}
      </ul>
   );
};
export default Duties;
