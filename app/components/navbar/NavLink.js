'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavLink = ({ text, link, pad = false }) => {
   const pathname = usePathname();
   const isActive = pathname === link;
   return (
      <li
         className={`cursor-pointer border-b-2 transition duration-700 ${
            pad ? 'p-2' : ''
         } ${
            isActive
               ? 'border-b-[--bb-yellow] text-[--bb-yellow]'
               : 'border-b-transparent hover:border-b-[--bb-teal] hover:text-[--bb-teal] hover:brightness-125'
         }`}>
         <Link href={link}>{text}</Link>
      </li>
   );
};

export default NavLink;
