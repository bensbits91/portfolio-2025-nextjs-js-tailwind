import clsx from 'clsx';

interface TextProps {
   children: React.ReactNode;
   color?: 'white' | 'jade' | 'gray' | 'teal' | 'yellow';
   top?: 'no' | 'sm' | 'md' | 'lg' | 'xl';
   bottom?: 'no' | 'sm' | 'md' | 'lg' | 'xl';
   size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Text = ({
   children,
   color = 'white',
   top = 'md',
   bottom = 'md',
   size = 'md'
}: TextProps) => (
   <p
      className={clsx(
         { 'mt-0': top === 'no' },
         { 'mt-2': top === 'sm' },
         { 'mt-4': top === 'md' },
         { 'mt-8': top === 'lg' },
         { 'mt-12': top === 'xl' },
         { 'mb-0': bottom === 'no' },
         { 'mb-2': bottom === 'sm' },
         { 'mb-4': bottom === 'md' },
         { 'mb-8': bottom === 'lg' },
         { 'mb-12': bottom === 'xl' },
         { 'text-sm': size === 'sm' },
         { 'text-base tracking-wide': size === 'md' },
         { 'text-lg/6 tracking-wide': size === 'lg' },
         { 'text-lg/8 tracking-wide': size === 'xl' },
         `text-bb-${color}`
      )}>
      {children}
   </p>
);

export default Text;
