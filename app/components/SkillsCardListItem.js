import CloudinaryImage from './CloudinaryImage';
import { makeKey, generateStars, generateYearIcon } from '../utils';

const SkillsCardListItem = ({ item }) => {
   const { name, cloudinary, rating, years } = item;
   const key = makeKey(name);
   return (
      <li key={key}>
         <div className='grid grid-cols-2 gap-4'>
            <div className='grid grid-cols-2 gap-4'>
               {cloudinary && (
                  <div className='flex mr-2 h-6'>
                     <CloudinaryImage
                        cloudinaryId={cloudinary}
                        alt={name}
                        width={32}
                        height={32}
                     />
                  </div>
               )}
               <h3>{name}</h3>
            </div>
            <div className='grid grid-cols-2 gap-4 justify-center mr-2 h-6 w-full'>
               <div className='flex h-4'>{generateStars(rating)}</div>
               <div className='h-4'>{generateYearIcon(years)}</div>
            </div>
         </div>
      </li>
   );
};

export default SkillsCardListItem;
