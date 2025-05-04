import { Popover, Trigger, Content, Arrow } from '@radix-ui/react-popover';
import { Rating } from '@/components/common';
import { CloudinaryImage } from '@/components/image';
import { Icon } from '@/components/icons';
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
   const { cloudinary, iconName, name, rating, years } = skillToShow;
   if (!cloudinary) return null;

   return (
      <Popover>
         <Trigger className="cursor-pointer">
            <div className="relative" style={{ width: size, height: size }}>
               {iconName && <Icon name={iconName} />}
               {!iconName && cloudinary && (
                  <CloudinaryImage
                     cloudinaryId={cloudinary}
                     alt={name}
                     width={size}
                     height={size}
                  />
               )}
            </div>
         </Trigger>
         <Content className="bg-elevation-1 z-50 flex items-center justify-center gap-4 rounded-lg border border-bb-teal p-4">
            <div className="relative h-12 w-12">
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
