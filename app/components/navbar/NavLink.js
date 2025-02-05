import Link from 'next/link';

const NavLink = ({ text, pathname }) => {
   // derive the href from the display text
   const href = `/${text === 'Home' ? '' : text.toLowerCase()}`;
   const isActive = pathname === href;
   return (
      <li
         className={`cursor-pointer border-b-2 transition duration-700 ${
            isActive
               ? 'border-b-[--bb-yellow] text-[--bb-yellow]'
               : 'border-b-transparent hover:border-b-[--bb-teal] hover:text-[--bb-teal] hover:brightness-125'
         }`}>
         <Link href={href}>{text}</Link>
      </li>
   );
};

export default NavLink;
