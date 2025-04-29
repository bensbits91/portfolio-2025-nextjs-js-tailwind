import { CloudinaryImage } from '@/components/image';
import { generateStars, truncateString } from '@/app/utils';
import { BaseSkill } from '@/types/Skill';

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

            return (
               <div
                  key={index}
                  className="flex items-center justify-center gap-4 rounded-lg border p-4 shadow-md hover:border-bb-teal hover:bg-bb-gray-800 md:cursor-pointer"
                  onClick={() => handleItemClick(name)}>
                  <div className="relative h-12 w-12">
                     <CloudinaryImage
                        cloudinaryId={cloudinary as string}
                        alt={name}
                        width={48}
                        height={48}
                     />
                  </div>
                  <div>
                     <div>{truncateString(name, 15).newString}</div>
                     <div className="flex h-4">{generateStars(rating)}</div>
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
