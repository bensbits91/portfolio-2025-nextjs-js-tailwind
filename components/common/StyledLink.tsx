import Link from 'next/link';
import { NewTabIcon, Icon } from '@/components/icons';

interface StyledLinkProps {
   href: string;
   text?: string;
   icon?: string;
   newTab?: boolean;
   ariaLabel?: string;
}

export default function StyledLink({
   href,
   text,
   icon,
   newTab,
   ariaLabel
}: StyledLinkProps) {
   if (!href) {
      return null;
   }

   return (
      <Link
         href={href}
         target={newTab ? '_blank' : '_self'}
         aria-label={ariaLabel || `${text} link`}
         rel={newTab ? 'noopener noreferrer' : undefined}
         className="link focus-visible:outline-none focus-visible:ring-2">
         <div className="flex items-center gap-1">
            {icon && (
               <div className="h-4 w-4" aria-hidden="true">
                  <Icon name={icon} />
               </div>
            )}
            <div>{text}</div>
            {newTab && (
               <div className="h-3 w-3 pb-6" aria-hidden="true">
                  <NewTabIcon />
               </div>
            )}
         </div>
      </Link>
   );
}
