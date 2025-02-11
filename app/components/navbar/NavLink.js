'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavLink = ({ text, link, pad = false }) => {
   const pathname = usePathname();
   const isActive = pathname === link;
   return (
      <li className={pad ? 'p-2' : ''}>
         <Link
            className={`hover-delay border-b-2 ${pad ? 'p-2' : ''} ${
               isActive
                  ? 'border-b-bb-yellow text-bb-yellow'
                  : 'hover-brightness border-b-transparent lg:hover:border-b-bb-teal lg:hover:text-bb-teal'
            }`}
            href={link}>
            {text}
         </Link>
      </li>
   );
};

export default NavLink;
