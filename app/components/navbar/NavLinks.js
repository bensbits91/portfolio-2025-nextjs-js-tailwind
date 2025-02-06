import NavLink from './NavLink';

const NavLinks = ({ links, pathname }) => (
   <ul className="flex h-7 justify-end space-x-6 font-roboto-sans">
      {links.map(link => (
         <NavLink key={link} text={link} pathname={pathname} />
      ))}
   </ul>
);

export default NavLinks;
