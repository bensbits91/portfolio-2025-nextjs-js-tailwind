import CloudinaryImage from './CloudinaryImage';
import { makeKey, generateStars } from '../utils';

const SkillsCardListItem = ({ item }) => {
   const { name, cloudinary, rating, years } = item;
   const key = makeKey(name);
   return (
      <li key={key}>
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
            <div className="h-4 text-sm">{name}</div>
            <div className="flex h-4">{generateStars(rating)}</div>
            <div className="h-4 text-sm text-teal-300">{years} years</div>
         </div>
      </li>
   );
};

export default SkillsCardListItem;
