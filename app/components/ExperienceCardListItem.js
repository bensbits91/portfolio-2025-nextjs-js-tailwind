import { makeKey, duration } from '../utils';

const ExperienceCardListItem = ({ item }) => {
   const { role, company, start, end } = item;
   const key = makeKey(role);
   // const { years, months } = getYearsAndMonths(start, end);
   // const yearsRounded = Math.round(years + months / 12);
   return (
      <li key={key} className='mb-4'>
         <div className='text-lg'>{role}</div>
         <div className='grid grid-cols-[1fr,3fr] justify-items-start gap-1'>
            <div className='text-sm text-gray-400'>@ {company}</div>
            <div className='flex row'>
               <span className='text-sm text-teal-300'>
                  {duration(start, end)}
               </span>
            </div>
            {/* <div className='flex row'>{generateYearIcon(yearsRounded)}</div> */}
         </div>
      </li>
   );
};
export default ExperienceCardListItem;
