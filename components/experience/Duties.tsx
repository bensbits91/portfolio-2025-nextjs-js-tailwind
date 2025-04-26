import Duty from './Duty';

interface DutiesProps {
   duties: {
      name: string;
      skillNames?: string[];
      description: string;
      moreInfoLink?: {
         text: string;
         href: string;
      };
   }[];
}

const Duties = ({ duties }: DutiesProps) => {
   if (!duties || duties.length === 0) {
      return null;
   }
   return (
      <div className="md:ml-8">
         <ul>
            {duties.map((duty, index) => (
               <Duty key={index} duty={duty} />
            ))}
         </ul>
      </div>
   );
};
export default Duties;
