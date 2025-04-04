import { CloudinaryImage } from '@/app/components/image';
import { generateStars } from '@/app/utils';

const SkillItem = ({ item }) => {
   const { name, cloudinary, rating, years } = item;
   return (
      <li className="py-1">
         <div className="grid h-10 grid-cols-[1fr,3fr,3fr,3fr] items-center gap-4">
            {cloudinary && (
               <div className="mr-2 flex h-4 w-4">
                  <CloudinaryImage
                     cloudinaryId={cloudinary}
                     alt={name}
                     width={32}
                     height={32}
                  />
               </div>
            )}
            <div className="text-[0.7rem] md:text-sm">{name}</div>
            <div className="min-w-24 whitespace-nowrap text-[0.7rem] md:text-sm">
               ~ {years} years
            </div>
            <div className="flex h-4">{generateStars(rating)}</div>
         </div>
      </li>
   );
};

export default SkillItem;
