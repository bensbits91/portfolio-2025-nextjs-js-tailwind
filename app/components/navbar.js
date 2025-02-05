'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const links = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

const NavLink = ({ text }) => { // todo: move to separate file
   const pathname = usePathname();
   const href = `/${text === 'Home' ? '' : text.toLowerCase()}`;
   const isActive = pathname === href;
   return (
      <li
         className={`cursor-pointer border-b-2 transition duration-700 ${
            isActive
               ? 'border-b-[--bb-yellow] text-[--bb-yellow]'
               : 'border-b-transparent hover:border-b-[--bb-blue] hover:text-[--bb-blue] hover:brightness-125'
         }`}>
         <Link href={href}>{text}</Link>
      </li>
   );
};

const Navbar = () => {
   return (
      <div className="fixed left-0 right-0 top-0 z-10 border-b-2 border-b-gray-800 bg-[--background]">
         <nav className="w-full p-4">
            <ul className="font-roboto-sans flex justify-end space-x-6">
               {links.map(link => (
                  <NavLink key={link} text={link} />
               ))}
            </ul>
         </nav>
      </div>
   );
};

export default Navbar;
