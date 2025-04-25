import Link from 'next/link';

const Button = ({ link, children, inverted = false, yellow = false }) => (
   <Link href={link}>
      <div
         className={`hover-delay hover-brightness mt-12 rounded-sm sm:w-[100%] md:min-w-10 md:max-w-max ${
            inverted ? 'bg-bb-gray' : 'bg-bb-teal'
         } p-4 text-center font-roboto-sans text-sm tracking-wide ${
            inverted
               ? yellow
                  ? 'text-bb-yellow'
                  : 'text-bb-teal'
               : 'text-bb-gray'
         }`}>
         {children}
      </div>
   </Link>
);

export default Button;
