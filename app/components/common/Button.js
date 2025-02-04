import Link from 'next/link';

const Button = ({ link, children }) => (
   <Link href={link}>
      <div className="font-roboto-sans mt-12 cursor-pointer rounded-sm bg-[--bb-teal] p-4 text-center text-sm tracking-wide text-[--bb-dark-gray] transition duration-700 hover:brightness-125">
         {children}
      </div>
   </Link>
);

export default Button;
