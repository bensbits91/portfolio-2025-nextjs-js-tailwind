import Duty from './Duty';
import { BaseDuty } from '@/types/Job';

interface DutiesProps {
   duties: BaseDuty[];
}

const Duties = ({ duties }: DutiesProps) => {
   if (!duties || duties.length === 0) {
      return null;
   }
   return (
      <div>
         <ul>
            {duties.map((duty, index) => (
               <Duty key={index} duty={duty} />
            ))}
         </ul>
      </div>
   );
};
export default Duties;
