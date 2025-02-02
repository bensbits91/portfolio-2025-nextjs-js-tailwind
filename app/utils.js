import dayjs from 'dayjs';
import CloudinaryImage from './components/CloudinaryImage';

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
         <div key={`full-${i}`} className='h-[16px] w-[16px]'>
            <CloudinaryImage
               cloudinaryId='star-fill_lyszfd'
               alt='Star'
               width='16'
               height='16'
            />
         </div>
      );
   }

   if (halfStar) {
      stars.push(
         <div key='half' className='h-[16px] w-[16px]'>
            <CloudinaryImage
               cloudinaryId='star-half-fill_a932md' // todo: move to constants
               alt='Half star'
               width='8'
               height='16'
            />
         </div>
      );
   }

   return stars;
};

export const generateYearIcon = years => {
   return (
      <div className='flex row h-[24px]'>
         <CloudinaryImage
            cloudinaryId={`yrs-${years}`} // todo: move to constants
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
