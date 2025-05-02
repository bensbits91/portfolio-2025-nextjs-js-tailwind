import NavLink from './NavLink';
import { navLinkDefs } from '@/data/nav';
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
   </ul>
);

export default NavLinks;
