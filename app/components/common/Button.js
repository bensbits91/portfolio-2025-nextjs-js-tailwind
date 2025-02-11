import Link from 'next/link';

const Button = ({ link, children }) => (
   <Link href={link}>
      <div className="font-roboto-sans mt-12 rounded-sm bg-[--bb-teal] p-4 text-center text-sm tracking-wide text-[--bb-dark-gray] lg:transition lg:duration-700 lg:hover:brightness-125">
         {children}
      </div>
   </Link>
);

export default Button;
