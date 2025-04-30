import { Cell, flexRender } from '@tanstack/react-table';
import clsx from 'clsx';

interface SkillsTableCellProps<TData> {
   cell: Cell<TData, unknown>;
   colsToHideOnMobile: string[] | null;
}

export default function SkillsTableCell<TData>({
   cell,
   colsToHideOnMobile
}: SkillsTableCellProps<TData>) {
   const hideOnMobile = colsToHideOnMobile
      ? colsToHideOnMobile.includes(cell.column.id)
      : false;
   return (
      <td
         key={cell.id}
         className={clsx('p-2', hideOnMobile && 'hidden md:table-cell')}>
         {flexRender(cell.column.columnDef.cell, cell.getContext())}
      </td>
   );
}
