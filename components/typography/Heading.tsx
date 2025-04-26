import clsx from 'clsx';
import { JSX } from 'react';
import { colorCode } from '@/app/utils';

interface HeadingProps {
   className?: string;
   children: React.ReactNode;
   level?: 1 | 2 | 3 | 4 | 5 | 6;
   appearance?: 1 | 2 | 3 | 4 | 5 | 6;
   color?: 'white' | 'black' | 'gray' | 'blue' | 'red' | 'jade' | 'yellow';
   weight?: 'normal' | 'bold' | 'light';
   top?: 'sm' | 'md' | 'lg' | 'no';
   bottom?: 'sm' | 'md' | 'lg' | 'no';
}

const Heading = ({
   children,
   appearance = 1, // styling
   level = 1, // symantic HTML tag
   color = 'white',
   weight = 'normal',
   top = 'no',
   bottom = 'no'
}: HeadingProps) => {
   const Tag = `h${level}` as keyof JSX.IntrinsicElements;

   return (
      <Tag
         className={clsx(
            // `h${appearance}`,
            { 'mt-0': top === 'no' },
            { 'mt-2': top === 'sm' },
            { 'mt-4': top === 'md' },
            { 'mt-8': top === 'lg' },
            { 'mb-0': bottom === 'no' },
            { 'mb-2': bottom === 'sm' },
            { 'mb-4': bottom === 'md' },
            { 'mb-8': bottom === 'lg' },
            colorCode(color),
            `font-${weight}`,
            {
               'font-roboto-mono text-4xl/[50px] tracking-tight md:text-6xl/[50px]':
                  appearance === 1
            },
            { 'text-3xl md:text-4xl': appearance === 2 },
            { 'text-2xl/7 md:text-3xl/9': appearance === 3 },
            { 'text-xl md:text-2xl': appearance === 4 },
            { 'text-lg md:text-xl': appearance === 5 },
            { 'text-base md:text-lg': appearance === 6 }
         )}>
         {children}
      </Tag>
   );
};

export default Heading;
