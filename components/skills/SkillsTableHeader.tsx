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

   const { id, column, isPlaceholder, getContext } = header;
   const {
      getIsSorted,
      getCanSort,
      getToggleSortingHandler,
      columnDef,
      getCanFilter,
      getFilterValue,
      setFilterValue
   } = column;

   const isSorted = getIsSorted();
   const isSortedAsc = isSorted === 'asc';
   const isSortedDesc = isSorted === 'desc';

   const canSort = getCanSort();
   const canFilter = getCanFilter();

   return (
      <th
         key={id}
         scope="col"
         aria-sort={
            isSortedAsc ? 'ascending' : isSortedDesc ? 'descending' : 'none'
         }
         className={clsx(
            canSort
               ? 'cursor-pointer pl-2 text-left align-top'
               : 'pl-2 text-left align-top',
            hideOnMobile && 'hidden md:table-cell'
         )}>
         <div
            onClick={getToggleSortingHandler()}
            className="wcag-focus flex"
            role={canSort ? 'button' : undefined} // Make it a button for sorting
            tabIndex={canSort ? 0 : undefined} // Make it focusable if sortable
            aria-label={`Sort by ${columnDef.header}`}
            onKeyDown={e => {
               if (canSort && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  getToggleSortingHandler()?.(e);
               }
            }}>
            {isPlaceholder ? null : flexRender(columnDef.header, getContext())}
            {isSortedAsc && (
               <div className="h-6 w-6">
                  <ChevronIcon direction={'up'} />
               </div>
            )}
            {isSortedDesc && (
               <div className="h-6 w-6">
                  <ChevronIcon direction={'down'} />
               </div>
            )}
            {canSort && !isSorted && (
               <div className="h-6 w-6">
                  <DoubleChevronIcon />
               </div>
            )}
         </div>
         {canFilter && (
            <input
               className="mt-2 w-full"
               type="text"
               value={(getFilterValue() as string) || ''}
               onChange={e => {
                  setFilterValue(e.target.value);
               }}
               placeholder={`Filter ${columnDef.header}`}
            />
         )}
      </th>
   );
}
