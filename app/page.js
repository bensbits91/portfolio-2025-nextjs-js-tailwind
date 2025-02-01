import Image from 'next/image';
import Link from 'next/link';
import { getTopSkills, about, expertise, experience } from './data';
import {
   makeKey,
   generateStars,
   generateYearIcon,
   getYearsAndMonths
} from './utils';

// todo: replace flex with grid
const Home = () => {
   const SkillItem = ({ item }) => {
      const { name, icon, rating, years } = item;
      const key = makeKey(name);
      return (
         <li key={key}>
            <div className='flex'>
               <div className='flex items-center mb-4'>
                  {icon && (
                     <div className='relative flex justify-center mr-2 h-[32px] w-full min-w-[32px]'>
                        <Image src={icon} alt={name} fill contain='true' />
                     </div>
                  )}
                  <h3>{name}</h3>
               </div>
               <div className='relative flex justify-center mr-2 h-[32px] w-full'>
                  <div className='flex row'>{generateStars(rating)}</div>
                  <div className='flex row'>{generateYearIcon(years)}</div>
               </div>
            </div>
         </li>
      );
   };
   const ExperienceItem = ({ item }) => {
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

   const HomeCardItem = ({ item, type }) => {
      switch (type) {
         case 'skill':
            return <SkillItem item={item} />;
         case 'experience':
            return <ExperienceItem item={item} />;
         default:
            return <li key={key}>{name}</li>;
      }
   };

   const HomeCard = ({ items, type, heading, allText, link }) => (
      <div>
         <div>{heading}</div>
         <ul>
            {items.map(item => {
               return <HomeCardItem item={item} type={type} />;
            })}
         </ul>
         {allText && (
            <Link href={link}>
               <div>{allText}</div>
            </Link>
         )}
      </div>
   );

   return (
      <>
         <div>Hi I'm Ben</div>
         <p className='text-sm text-center'>{about.overview}</p>
         <p className='text-sm text-center text-gray-400'>
            {expertise.join(' | ')}
         </p>
         <div className='grid grid-cols-2 gap-4 my-12'>
            <HomeCard
               items={getTopSkills(8)}
               type='skill'
               heading='Top skills'
               allText='View all skills'
               link='/skills'
            />
            <HomeCard
               items={experience}
               type='experience'
               heading='Professional experience'
               allText='View detailed experience'
               link='/experience'
            />
         </div>
         <div>Projects Mini Card</div>
         <div>Contact Mini Card</div>
      </>
   );
};

export default Home;
