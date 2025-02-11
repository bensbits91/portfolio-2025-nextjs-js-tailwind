import Link from 'next/link';

const Button = ({ link, children }) => (
   <Link href={link}>
      <div className="hover-delay hover-brightness mt-12 rounded-sm bg-bb-teal p-4 text-center font-roboto-sans text-sm tracking-wide text-bb-gray">
         {children}
      </div>
   </Link>
);

export default Button;
