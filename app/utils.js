import dayjs from 'dayjs';
import CloudinaryImage from './components/CloudinaryImage';

export const camelToTitle = str =>
   // todo: don't capitalize if 'and' or 'or'...
   // todo: Ui Ux -> UI/UX (toUpper, separator='/'
   str.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());

export const makeKey = str => str.replace(/ /g, '-').toLowerCase();

export const generateStars = rating => {
   const fullStars = Math.floor(rating / 2);
   const halfStar = rating % 2 === 1;
   const stars = [];
   for (let i = 0; i < fullStars; i++) {
      stars.push(
         <div key={`full-${i}`} className="h-4 w-4">
            <CloudinaryImage
               cloudinaryId="star-white_ehbqmh"
               alt="Star"
               width="16"
               height="16"
            />
         </div>
      );
   }

   if (halfStar) {
      // todo: better half-star implementation
      stars.push(
         <div key="half" className="ml-[-4px] h-4 w-4">
            <CloudinaryImage
               cloudinaryId="star-white-half_bfoszw"
               alt="Half star"
               width="16"
               height="16"
            />
         </div>
      );
   }

   return stars;
};

export const generateYearIcon = years => {
   return (
      <div className="row flex h-6 w-6 items-center">
         <CloudinaryImage
            cloudinaryId={`yrs-${years}`}
            alt="Number of years icon"
            width="24"
            height="24"
         />
         <span className="text-teal-400">years</span>
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

export const getPrettyDate = date => dayjs(date).format('MMM YYYY');

export const duration = (start, end, style) => {
   const { years, months } = getYearsAndMonths(start, end);
   const pretty = `${getPrettyDate(start)} to ${getPrettyDate(end)}`;
   const yoMo = `${years} years ${months} months`;
   const approxYears = `~ ${Math.round(years + months / 12)} years`;

   switch (style) {
      case 'pretty':
         return pretty;
      case 'yoMo':
         return yoMo;
      case 'approxYears':
         return approxYears;
      default:
         return `${pretty} (${yoMo})`;
   }
};
