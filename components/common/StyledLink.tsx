import Link from 'next/link';
import { NewTabIcon, GithubIcon, PlayIcon } from '@/components/icons';

interface StyledLinkProps {
   href: string;
   text?: string;
   icon?: string;
   newTab?: boolean;
}

export default function StyledLink({
   href,
   text,
   icon,
   newTab
}: StyledLinkProps) {
   if (!href) {
      return null;
   }
   // const { href, text } = liveLink;

   const Icon = () => {
      switch (icon) {
         case 'Play':
            return <PlayIcon />;
         case 'GitHub':
            return <GithubIcon />;
         default:
            return null;
      }
   };

   return (
      <Link
         href={href}
         className="hover-delay hover-brightness text-bb-teal"
         target={newTab ? '_blank' : '_self'}>
         <div className="flex items-center gap-1">
            {icon && (
               <div className="h-4 w-4">
                  <Icon />
               </div>
            )}
            <div>{text}</div>
            {newTab && (
               <div className="h-3 w-3 pb-6">
                  <NewTabIcon />
               </div>
            )}
         </div>
      </Link>
   );
}
