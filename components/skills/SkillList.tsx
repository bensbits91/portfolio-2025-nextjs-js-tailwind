import { skillsForTable } from '@/app/data.js';
import SkillItem from './SkillItem';

const SkillList = ({ items = skillsForTable }) => {
   return (
      <div>
         <ul>
            {items.map(skill => (
               <SkillItem key={skill.name} item={skill} />
            ))}
         </ul>
      </div>
   );
};

export default SkillList;
