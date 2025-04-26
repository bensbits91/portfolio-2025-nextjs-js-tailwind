import Icon from './Icon';
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
}

const IconBar = ({
   icons,
   centered = false,
   size = 24,
   wrap = false
}: IconBarProps) => (
   <div
      className={clsx(
         'flex items-center gap-2',
         { 'justify-center': centered },
         { 'flex-wrap': wrap }
      )}>
      {icons.map((icon, index) => (
         <Icon key={index} src={icon.src} altText={icon.altText} size={size} />
      ))}
   </div>
);

export default IconBar;
