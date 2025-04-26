import { ContactLinks } from '@/components/contact';
import NavLinks from './NavLinks';

const Navbar = () => (
   <div className="fixed left-0 right-0 top-0 z-10 hidden border-b-2 border-b-gray-800 bg-background md:block">
      <nav className="flex w-full items-center justify-between p-4">
         <ContactLinks isNavbar />
         <NavLinks />
      </nav>
   </div>
);

export default Navbar;
