import { CloudinaryImage } from '@/components/image';
import { Rating } from '@/components/common';
import { BaseSkill } from '@/types/Skill';
import { truncateString } from '@/utils/string';

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
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
         {skills.map((skill, index) => {
            const { cloudinary, name, rating, years } = skill;
            const { newString: truncatedName } = truncateString(name, 14);

            return (
               <div
                  key={index}
                  className="flex items-center justify-center gap-4 rounded-lg border p-4 shadow-md hover:border-bb-teal hover:bg-bb-gray-800 md:cursor-pointer"
                  onClick={() => handleItemClick(name)}>
                  {cloudinary && (
                     <div className="relative h-12 w-12">
                        <CloudinaryImage
                           cloudinaryId={cloudinary}
                           alt={name}
                           width={48}
                           height={48}
                        />
                     </div>
                  )}
                  <div>
                     <div>{truncatedName}</div>
                     {rating && (
                        <div className="flex h-4">
                           <Rating rating={rating} />
                        </div>
                     )}
                     <div className="min-w-24 whitespace-nowrap text-[0.7rem] md:text-sm">
                        {years}+ years
                     </div>
                  </div>
               </div>
            );
         })}
      </div>
   );
}
