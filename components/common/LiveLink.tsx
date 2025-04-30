import Link from 'next/link';
import { NewTabIcon } from '@/components/icons';

interface LiveLinkProps {
   liveLink: {
      href: string;
      text?: string;
   };
}

const LiveLink = ({ liveLink }: LiveLinkProps) => {
   if (!liveLink || !liveLink.href) {
      return null;
   }
   const { href, text } = liveLink;
   return (
      <Link
         href={href}
         className="hover-delay hover-brightness text-bb-teal"
         target="_blank">
         <div className="flex items-center gap-2">
            <div>{text}</div>
            <div className="h-4 w-4">
               <NewTabIcon />
            </div>
         </div>
      </Link>
   );
};

export default LiveLink;
