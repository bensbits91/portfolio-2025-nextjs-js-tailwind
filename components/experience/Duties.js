import Duty from './Duty';

const Duties = ({ duties }) => (
   <div className="md:ml-8">
      <ul>
         {duties.map((duty, index) => (
            <Duty key={index} duty={duty} />
         ))}
      </ul>
   </div>
);
export default Duties;
