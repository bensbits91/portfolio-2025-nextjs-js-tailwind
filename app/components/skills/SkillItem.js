import { CloudinaryImage } from '@/app/components/image';
import { generateStars } from '@/app/utils';

const SkillItem = ({ item }) => {
   const { name, cloudinary, rating, years } = item;
   return (
      <li className='border-b border-[--bb-dark-gray-800] py-2'>
         <div className="grid h-10 grid-cols-[1fr,3fr,3fr,3fr] items-center gap-4">
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
            <div className="min-w-24 text-sm whitespace-nowrap">~ {years} years</div>
            <div className="flex h-4">{generateStars(rating)}</div>
         </div>
      </li>
   );
};

export default SkillItem;
