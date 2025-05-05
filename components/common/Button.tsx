import { ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps {
   link: string;
   children: ReactNode;
   inverted?: boolean;
   yellow?: boolean;
}

const Button = ({
   link,
   children,
   inverted = false,
   yellow = false
}: ButtonProps) => (
   <Link href={link}>
      <div
         className={`hover-delay hover-brightness mt-12 rounded-md sm:w-[100%] md:min-w-10 md:max-w-max ${
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
