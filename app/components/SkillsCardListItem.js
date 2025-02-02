import CloudinaryImage from './CloudinaryImage';
import { makeKey, generateStars, generateYearIcon } from '../utils';

const SkillsCardListItem = ({ item }) => {
   const { name, cloudinary, rating, years } = item;
   const key = makeKey(name);
   return (
      <li key={key}>
         <div className='flex'>
            <div className='flex items-center mb-4'>
               {cloudinary && (
                  <div className='relative flex justify-center mr-2 h-[32px] w-full min-w-[32px]'>
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
            <div className='relative flex justify-center mr-2 h-[24px] w-full'>
               <div className='flex row h-[16px]'>{generateStars(rating)}</div>
               <div className='flex row'>{generateYearIcon(years)}</div>
            </div>
         </div>
      </li>
   );
};

export default SkillsCardListItem;
