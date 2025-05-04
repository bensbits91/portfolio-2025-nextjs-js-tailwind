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
               'hover-delay',
               pad && 'p-2',
               isActive
                  ? 'link-active'
                  : 'link'
            )}
            href={link}>
            {text}
         </Link>
      </li>
   );
};

export default NavLink;
