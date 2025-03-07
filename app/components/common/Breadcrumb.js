'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Breadcrumb = () => {
   const pathname = usePathname();
   const pathParts = pathname.split('/').filter(part => part); // removes empty strings
   return (
      <div className="absolute top-20 bg-background pl-4 text-xs">
         <span>
            <Link
               className="hover-delay hover-brightness border-b-transparent text-bb-teal lg:hover:border-b-bb-teal lg:hover:text-bb-teal"
               href="/">
               ben
            </Link>{' '}
            /{' '}
         </span>
         {pathParts.map((part, index) => {
            const href = '/' + pathParts.slice(0, index + 1).join('/');
            const isLast = index === pathParts.length - 1;
            const isActive = pathname === href;

            return (
               <span key={index}>
                  {isActive ? (
                     part
                  ) : (
                     <Link
                        className="hover-delay hover-brightness border-b-transparent text-bb-teal lg:hover:border-b-bb-teal lg:hover:text-bb-teal"
                        href={href}>
                        {part}
                     </Link>
                  )}
                  {isLast ? '' : ' / '}
               </span>
            );
         })}
      </div>
   );
};

export default Breadcrumb;
