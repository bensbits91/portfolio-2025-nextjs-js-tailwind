import { Popover, Trigger, Content, Arrow } from '@radix-ui/react-popover';
import { Rating } from '@/components/common';
import { CloudinaryImage } from '@/components/image';
import { Icon } from '@/components/icons';
import { BaseSkill } from '@/types/Skill';
import { skillsForTable } from '@/data/skills';

interface SkillPopperProps {
   skillName: string;
   size?: number;
   dark?: boolean;
}

export default function SkillPopper({
   skillName,
   size = 24,
   dark = false
}: SkillPopperProps) {
   const skillToShow = skillsForTable.find(
      skill => skill.name === skillName
   ) as BaseSkill;

   if (!skillToShow) return null;
   const { cloudinary, iconName, name, rating, years } = skillToShow;
   if (!cloudinary) return null;

   return (
      <Popover>
         <Trigger asChild className="cursor-pointer">
            <button
               className="wcag-focus relative"
               aria-label={`More information about ${name}`}
               style={{ width: size, height: size }}>
               {iconName && <Icon name={iconName} dark={dark} />}
               {!iconName && cloudinary && (
                  <CloudinaryImage
                     cloudinaryId={cloudinary}
                     alt={name}
                     width={size}
                     height={size}
                  />
               )}
            </button>
         </Trigger>
         <Content
            id="skill-popper-content"
            aria-labelledby="skill-popper-title"
            aria-describedby="skill-popper-description"
            className="elevation-1 z-50 flex items-center justify-center gap-4 rounded-lg border border-bb-teal p-4 focus:outline-none">
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
               <div id="skill-popper-title">{name}</div>
               {rating && <Rating rating={rating} />}
               <div
                  id="skill-popper-description"
                  className="min-w-24 whitespace-nowrap text-[0.7rem] md:text-sm">
                  {years}+ years
               </div>
            </div>
            <Arrow className="h-2 w-4 fill-bb-teal" />
         </Content>
      </Popover>
   );
}
