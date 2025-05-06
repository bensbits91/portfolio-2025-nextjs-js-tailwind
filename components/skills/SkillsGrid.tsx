import { CloudinaryImage } from '@/components/image';
import { Rating } from '@/components/common';
import { BaseSkill } from '@/types/Skill';
import { truncateString } from '@/utils/string';
import { Icon } from '@/components/icons';

interface SkillsGridProps {
   skills: BaseSkill[];
   handleItemClick: (thingId: string) => void;
}
export default function SkillsGrid({
   skills = [],
   handleItemClick
}: SkillsGridProps) {
   if (!skills || skills.length === 0) {
      return <div>No skills available</div>;
   }
   return (
      <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
         {skills.map((skill, index) => {
            const { cloudinary, iconName, name, rating, years } = skill;
            const { newString: truncatedName } = truncateString(name, 14);

            return (
               <li
                  key={index}
                  className="card-elevated card-clickable"
               >
                  <button
                     onClick={() => handleItemClick(name)}
                     className="flex w-full items-center justify-start gap-4 p-4 md:justify-center focus:outline-none focus:ring-2 focus:ring-bb-teal"
                     aria-label={`View details about ${name}`}>
                     <div className="h-12 w-12">
                        {iconName && <Icon name={iconName} />}
                        {!iconName && cloudinary && (
                           <CloudinaryImage
                              cloudinaryId={cloudinary}
                              alt={name}
                              width={48}
                              height={48}
                           />
                        )}
                     </div>
                     <div className='flex flex-col justify-start items-start'>
                        <div className="hidden md:block">{truncatedName}</div>
                        <div className="block md:hidden">{name}</div>
                        {rating && (
                           <div className="flex h-4">
                              <Rating rating={rating} />
                           </div>
                        )}
                        <div className="whitespace-nowrap text-sm">
                           {years}+ years
                        </div>
                     </div>
                  </button>
               </li>
            );
         })}
      </ul>
   );
}
