import { makeKey, generateYearIcon, getYearsAndMonths } from '../utils';

const ExperienceCardListItem = ({ item }) => {
   const { role, company, start, end } = item;
   const key = makeKey(role);
   const { years, months } = getYearsAndMonths(start, end);
   const yearsRounded = Math.round(years + months / 12);
   return (
      <li key={key}>
         <div className='flex'>
            <h3>{role}</h3>
            <h4>{company}</h4>
            <div className='flex row'>{generateYearIcon(yearsRounded)}</div>
         </div>
      </li>
   );
};
export default ExperienceCardListItem;
