import { duration } from '@/app/utils';

const ExperienceCardListItem = ({ item }) => {
   const { role, company, start, end } = item;
   return (
      <li className="py-2">
         <h3 className="text-lg">{role}</h3>
         <div className="grid grid-cols-2 justify-between sm:grid-cols-[1fr,2fr] sm:justify-items-start gap-1">
            <div className="text-sm text-bb-yellow whitespace-nowrap">@ {company}</div>
            <div className="text-sm">{duration(start, end, 'approxYears')}</div>
         </div>
      </li>
   );
};
export default ExperienceCardListItem;
