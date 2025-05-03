import { ContactLinks } from '@/components/contact';
import NavLinks from './NavLinks';
import clsx from 'clsx';

interface NavBarProps {
   vertical?: boolean;
   top?: boolean;
   showText?: boolean;
}

const NavBar = ({
   vertical = false,
   top = false,
   showText = false
}: NavBarProps) => (
   <div
      className={clsx(
         'bg-bg',
         top
            ? 'light:border-b-gray-300 fixed left-0 right-0 top-0 z-10 hidden border-b-2 border-b-gray-800 md:block'
            : 'light:border-t-gray-300 border-t-2 border-t-gray-800 py-10'
      )}>
      <nav
         className={clsx(
            'flex w-full',
            vertical
               ? 'items-start justify-center gap-12'
               : 'items-center justify-between p-4'
         )}>
         <ContactLinks vertical={vertical} showText={showText} />
         <NavLinks vertical={vertical} />
         </nav>
   </div>
);

export default NavBar;
