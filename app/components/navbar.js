import Link from 'next/link';

const links = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];
// todo: make full width -- maybe use a container? maybe add a photo? maybe subtle border buttom?
const NavLink = ({ text }) => ( // todo: move to separate file
   <li className="cursor-pointer border-b-2 border-b-transparent transition duration-700 hover:border-b-white hover:brightness-125">
      <Link href={`/${text === 'Home' ? '' : text.toLowerCase()}`}>
         {text}
      </Link>
   </li>
);

const Navbar = () => {
   return (
      <div className="fixed right-0 top-0 bg-[--background]">
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
