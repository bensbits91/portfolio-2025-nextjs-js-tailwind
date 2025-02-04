import CloudinaryImage from './CloudinaryImage';
import { generateStars } from '../utils';

const SkillsCardListItem = ({ item }) => {
   const { name, cloudinary, rating, years } = item;
   return (
      <li>
         <div className="grid h-10 grid-cols-[1fr,3fr,2fr,4fr] items-center gap-4">
            {cloudinary && (
               <div className="mr-2 flex h-6">
                  <CloudinaryImage
                     cloudinaryId={cloudinary}
                     alt={name}
                     width={32}
                     height={32}
                  />
               </div>
            )}
            <div className="text-sm">{name}</div>
            <div className="text-sm">~ {years} years</div>
            <div className="flex h-4">{generateStars(rating)}</div>
         </div>
      </li>
   );
};

export default SkillsCardListItem;
