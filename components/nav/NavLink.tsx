'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

interface NavLinkProps {
   text: string;
   link: string;
   pad?: boolean;
}

const NavLink = ({ text, link, pad = false }: NavLinkProps) => {
   const pathname = usePathname();
   const isActive = pathname === link;
   return (
      <li className={pad ? 'p-2' : ''}>
         <Link
            className={clsx(
               'hover-delay text-bb-teal',
               pad && 'p-2',
               isActive
                  ? 'text-bb-yellow'
                  : 'lg:hover:text-bb-yellow'
            )}
            href={link}>
            {text}
         </Link>
      </li>
   );
};

export default NavLink;
