import { Popover, Trigger, Content, Arrow } from '@radix-ui/react-popover';
import { Rating } from '@/components/common';
import { CloudinaryImage } from '@/components/image';
import { BaseSkill } from '@/types/Skill';
import { skillsForTable } from '@/data/skills';

export default function SkillPopper({
   skillName,
   size = 24
}: {
   skillName: string;
   size?: number;
}) {
   const skillToShow = skillsForTable.find(
      skill => skill.name === skillName
   ) as BaseSkill;

   if (!skillToShow) return null;
   const { cloudinary, name, rating, years } = skillToShow;
   if (!cloudinary) return null;

   return (
      <Popover>
         <Trigger className="cursor-pointer">
            {cloudinary && (
               <div className={`relative h-[${size}px] w-[${size}px]`}>
                  <CloudinaryImage
                     cloudinaryId={cloudinary}
                     alt={name}
                     width={size}
                     height={size}
                  />
               </div>
            )}
         </Trigger>
         <Content className="z-50 flex items-center justify-center gap-4 rounded-lg border border-bb-teal bg-bb-gray p-4 shadow-lg">
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
               <div>{name}</div>
               {rating && (
                  <div className="flex h-4">
                     <Rating rating={rating} />
                  </div>
               )}
               <div className="min-w-24 whitespace-nowrap text-[0.7rem] md:text-sm">
                  {years}+ years
               </div>
            </div>
            <Arrow className="h-2 w-4 fill-bb-teal" />
         </Content>
      </Popover>
   );
}
