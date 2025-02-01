import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <nav className='w-full bg-gray-800 p-4'>
        <ul className='flex justify-around text-white'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/skills'>Skills</Link>
          </li>
          <li>
            <Link href='/experience'>Experience</Link>
          </li>
          <li>
            <Link href='/projects'>Projects</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
