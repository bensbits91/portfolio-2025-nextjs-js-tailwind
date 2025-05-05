import NavLink from './NavLink';
import { navLinkDefs } from '@/data/nav';
import { ContactPopper } from '@/components/contact';
import ThemeChanger from '@/components/ThemeChanger';
import clsx from 'clsx';

interface NavLinksProps {
   vertical?: boolean;
}

const NavLinks = ({ vertical = false }: NavLinksProps) => (
   <ul
      className={clsx(
         'flex text-sm',
         vertical ? 'flex-col justify-start gap-2' : 'h-5 gap-4'
      )}>
      {navLinkDefs.map(def => {
         const { text, link } = def;
         return <NavLink key={text} text={text} link={link} />;
      })}
         <li>
            <ContactPopper align='start' alignOffset={-300} sideOffset={15}>
               <button className='link'>Contact</button>
            </ContactPopper>
         </li>
      {!vertical && (
         <li>
            <ThemeChanger />
         </li>
      )}
   </ul>
);

export default NavLinks;
