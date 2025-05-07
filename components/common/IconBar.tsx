import Icon from './Icon';
import { SkillPopper } from '@/components/skills';
import clsx from 'clsx';

interface IconBarProps {
   icons: {
      src: string;
      altText: string;
      link?: string;
      iconName?: string;
   }[];
   centered?: boolean;
   size?: number;
   wrap?: boolean;
   pop?: boolean;
}

const IconBar = ({
   icons,
   centered = false,
   size = 24,
   wrap = false,
   pop = false
}: IconBarProps) => {
   // Ensure icons array is stable and deterministic
   if (!icons || icons.length === 0) {
      return null;
   }

   return (
      <ul
         className={clsx(
            'flex items-center gap-2',
            { 'justify-center': centered },
            { 'flex-wrap': wrap }
         )}>
         {icons.map((icon, index) => (
            <li key={index}>
               {pop ? (
                  <SkillPopper skillName={icon.altText} size={size} />
               ) : (
                  <Icon
                     src={icon.src}
                     iconName={icon.iconName}
                     altText={icon.altText}
                     size={size}
                  />
               )}
            </li>
         ))}
      </ul>
   );
};

export default IconBar;
