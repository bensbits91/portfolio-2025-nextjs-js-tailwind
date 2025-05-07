import Link from 'next/link';
import { NewTabIcon, Icon } from '@/components/icons';

interface StyledLinkProps {
   href: string;
   icon?: string;
   text?: string;
   showText?: boolean;
   newTab?: boolean;
   ariaLabel?: string;
}

export default function StyledLink({
   href,
   icon,
   text,
   showText = true,
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
         title={showText ? undefined : text}
         aria-label={!showText ? ariaLabel || `${text} link` : undefined}
         rel={newTab ? 'noopener noreferrer' : undefined}
         className="link wcag-focus flex items-center gap-2">
         <div className="flex items-center gap-1">
            {icon && (
               <div className="mr-1 h-4 w-4" aria-hidden="true">
                  <Icon name={icon} />
               </div>
            )}
            {text && showText && <div>{text}</div>}
            {newTab && showText && (
               <div className="h-3 w-3 pb-6 opacity-70" aria-hidden="true">
                  <NewTabIcon />
               </div>
            )}
         </div>
      </Link>
   );
}
