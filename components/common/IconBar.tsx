import Icon from './Icon';
import { SkillPopper } from '@/components/skills';
import clsx from 'clsx';

interface IconBarProps {
   icons: {
      src: string;
      altText: string;
      link?: string;
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
   return (
      <div
         className={clsx(
            'flex items-center gap-2',
            { 'justify-center': centered },
            { 'flex-wrap': wrap }
         )}>
         {icons.map((icon, index) =>
            pop ? (
               <SkillPopper key={index} skillName={icon.altText} size={size} />
            ) : (
               <Icon
                  key={index}
                  src={icon.src}
                  altText={icon.altText}
                  size={size}
               />
            )
         )}
      </div>
   );
};

export default IconBar;
