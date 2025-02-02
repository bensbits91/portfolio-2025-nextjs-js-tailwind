import dayjs from 'dayjs';
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
            src='https://res.cloudinary.com/ddfrx5278/image/upload/c_limit,w_16,h_16,q_auto/v1738447608/star-fill_lyszfd'
            alt='Star'
            width='16'
            height='16'
         />
      );
   }

   if (halfStar) {
      stars.push(
         <Image
            key='half'
            src='https://res.cloudinary.com/ddfrx5278/image/upload/c_limit,w_8,h_16,q_auto/v1738447608/star-half-fill_a932md'
            alt='Half star'
            width='8'
            height='16'
         />
      );
   }

   return stars;
};

export const generateYearIcon = years => {
   return (
      <div className='flex row'>
         <Image
            src={`https://res.cloudinary.com/ddfrx5278/image/upload/c_limit,w_8,h_16,q_auto/v1738447608/yrs-${years}`}
            alt='Number of years icon'
            width='24'
            height='24'
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
