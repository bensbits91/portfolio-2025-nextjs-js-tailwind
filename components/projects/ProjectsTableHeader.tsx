import { Header, flexRender } from '@tanstack/react-table';
import { ChevronIcon, DoubleChevronIcon } from '@/components/icons';
import clsx from 'clsx';

interface SkillsTableHeaderProps<TData> {
   header: Header<TData, unknown>;
   colsToHideOnMobile: string[] | null;
}

export default function SkillsTableHeader<TData>({
   header,
   colsToHideOnMobile
}: SkillsTableHeaderProps<TData>) {
   const hideOnMobile = colsToHideOnMobile
      ? colsToHideOnMobile.includes(header.id)
      : false;

   return (
      <th
         className={clsx(
            header.column.getCanSort()
               ? 'cursor-pointer pl-2 text-left align-top'
               : 'pl-2 text-left align-top',
            hideOnMobile && 'hidden md:table-cell'
         )}
         key={header.id}>
         <div
            onClick={header.column.getToggleSortingHandler()}
            className="flex">
            {header.isPlaceholder
               ? null
               : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                 )}
            {header.column.getIsSorted() === 'asc' && (
               <div className="h-6 w-6">
                  <ChevronIcon direction={'up'} />
               </div>
            )}
            {header.column.getIsSorted() === 'desc' && (
               <div className="h-6 w-6">
                  <ChevronIcon direction={'down'} />
               </div>
            )}
            {header.column.getCanSort() && !header.column.getIsSorted() && (
               <div className="h-6 w-6">
                  <DoubleChevronIcon />
               </div>
            )}
         </div>
         {header.column.getCanFilter() && (
            <input
               className="mt-2 w-full"
               type="text"
               value={(header.column.getFilterValue() as string) || ''}
               onChange={e => {
                  header.column.setFilterValue(e.target.value);
               }}
               placeholder={`Filter ${header.column.columnDef.header}`}
            />
         )}
      </th>
   );
}
