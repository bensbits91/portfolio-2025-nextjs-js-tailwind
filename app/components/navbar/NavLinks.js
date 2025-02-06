import NavLink from './NavLink';
import { navLinkDefs } from '@/app/constants';

const NavLinks = ({ pathname }) => (
   <ul className="flex h-7 justify-end space-x-6 font-roboto-sans">
      {navLinkDefs.map(def => {
         const { text, link } = def;
         return <NavLink key={text} text={text} link={link} pathname={pathname} />;
      })}
   </ul>
);

export default NavLinks;
