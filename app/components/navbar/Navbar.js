'use client';
import { usePathname } from 'next/navigation';
import { ContactLinks } from '../contact';
import NavLinks from './NavLinks';

const Navbar = () => {
   const pathname = usePathname();

   return (
      <div className="fixed left-0 right-0 top-0 z-10 hidden border-b-2 border-b-gray-800 bg-[--background] md:block">
         {pathname !== '/contact' ? (
            <nav className="flex w-full items-center justify-between p-4">
               <>
                  <ContactLinks isNavbar />
                  <NavLinks pathname={pathname} />
               </>
            </nav>
         ) : (
            <nav className="flex w-full items-center justify-end p-4">
               <NavLinks pathname={pathname} />
            </nav>
         )}
      </div>
   );
};

export default Navbar;
