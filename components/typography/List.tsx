import clsx from 'clsx';

interface ListProps {
   items: string[];
   bottom?: 'no' | 'sm' | 'md' | 'lg' | 'xl';
   size?: 'sm' | 'md';
   ariaLabel?: string;
}

const List = ({ items, bottom = 'md', size = 'md', ariaLabel = 'List of items' }: ListProps) => {
   return (
      <ul
         aria-label={ariaLabel}
         className={clsx(
            'ml-6 list-outside list-disc',
            { 'text-sm': size === 'sm' },
            { 'mb-0': bottom === 'no' },
            { 'mb-2': bottom === 'sm' },
            { 'mb-4': bottom === 'md' },
            { 'mb-8': bottom === 'lg' },
            { 'mb-12': bottom === 'xl' }
         )}>
         {items.map((item, index) => (
            <li key={index} className="mb-1">
               {item}
            </li>
         ))}
      </ul>
   );
};

export default List;
