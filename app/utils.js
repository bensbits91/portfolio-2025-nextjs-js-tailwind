import dayjs from 'dayjs';
// import relativeTime from "dayjs/plugin/relativeTime";
// dayjs.extend(relativeTime);
import Image from 'next/image';

export const camelToTitle = str =>
   // todo: don't capitalize if "and" or "or"...
   // todo: Ui Ux -> UI/UX (toUpper, separator='/'
   str.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());

export const makeKey = str => str.replace(/ /g, '-').toLowerCase();

export const generateStars = rating => {
   const fullStars = Math.floor(rating / 2);
   const halfStar = rating % 2 === 1;
   const stars = [];
   for (let i = 0; i < fullStars; i++) {
      stars.push(
         <Image
            key={`full-${i}`}
            src='/star-fill.svg'
            alt='Star'
            width={16}
            height={16}
         />
      );
   }

   if (halfStar) {
      stars.push(
         <Image
            key='half'
            src='/star-half-fill.svg'
            alt='Half Star'
            width={8}
            height={16}
         />
      );
   }

   return stars;
};

export const generateYearIcon = years => {
   return (
      <div className='flex row'>
         <Image
            src={`/yrs-${years}.svg`}
            alt='number of years icon'
            width={24}
            height={24}
            className='mr-2'
         />
         <span className='text-teal-400'>years</span>
      </div>
   );
};

export const getYearsAndMonths = (start, end) => {
   const startDate = dayjs(start);
   const endDate = end ? dayjs(end) : dayjs();
   const years = endDate.diff(startDate, 'year');
   const months = endDate.diff(startDate, 'month') % 12;
   return { years, months };
};
