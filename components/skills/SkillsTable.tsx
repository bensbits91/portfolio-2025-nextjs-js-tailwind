import { ReactNode } from 'react';
import {
   useReactTable,
   ColumnDef,
   getCoreRowModel,
   getSortedRowModel,
   getFilteredRowModel,
   CellContext
} from '@tanstack/react-table';
import { CloudinaryImage } from '@/components/image';
import { Icon } from '@/components/icons';
import SkillsTableHeader from './SkillsTableHeader';
import SkillsTableCell from './SkillsTableCell';
import { Rating } from '@/components/common';
import { BaseSkill } from '@/types/Skill';

interface SkillsTableProps {
   skills: BaseSkill[];
   handleItemClick: (thingId: string) => void;
}

const colsToHideOnMobile = null;

export default function SkillsTable({
   skills = [],
   handleItemClick
}: SkillsTableProps) {
   const columns: ColumnDef<
      BaseSkill,
      string | unknown | number | Date | ReactNode
   >[] = [
      {
         accessorKey: 'name',
         header: 'Name',
         enableColumnFilter: false,
         cell: (info: CellContext<BaseSkill, unknown>) => {
            const iconName = info.row.original.iconName;
            return (
               <div className="mr-2 flex items-center gap-2">
                  <div className="mr-2 flex h-4 w-4">
                     {iconName ? (
                        <Icon name={iconName} />
                     ) : (
                        <CloudinaryImage
                           cloudinaryId={info.row.original.cloudinary as string}
                           alt={info.row.original.name}
                           width={32}
                           height={32}
                        />
                     )}
                  </div>
                  <div>{info.getValue() as string}</div>
               </div>
            );
         }
      },
      {
         accessorKey: 'years',
         header: 'Years',
         enableColumnFilter: false,
         cell: (info: CellContext<BaseSkill, unknown>) => {
            const years = info.getValue() as number;
            return (
               <div className="whitespace-nowrap text-sm">{years}+ years</div>
            );
         }
      },
      {
         accessorKey: 'rating',
         header: 'Rating',
         enableColumnFilter: false,
         cell: (info: CellContext<BaseSkill, unknown>) => {
            const rating = info.getValue() as number;
            return <Rating rating={rating} />;
         }
      }
   ];

   const table = useReactTable({
      data: skills,
      columns,
      initialState: {
         sorting: [
            {
               id: 'rating', // The column ID to sort by
               desc: true // Set to `true` for descending, `false` for ascending
            }
         ]
      },
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel() // needed for client-side filtering
   });

   if (!skills || skills.length === 0) {
      return <div>No skills available</div>;
   }

   return (
      <div className="md:px-4">
         <table className="w-full table-auto">
            <caption className="hidden">Skills Table</caption>
            <thead>
               {table.getHeaderGroups().map(headerGroup => (
                  <tr key={headerGroup.id}>
                     {headerGroup.headers.map(header => (
                        <SkillsTableHeader
                           key={header.id}
                           header={header}
                           colsToHideOnMobile={colsToHideOnMobile}
                        />
                     ))}
                  </tr>
               ))}
            </thead>
            <tbody>
               {table.getRowModel().rows.map(row => (
                  <tr
                     key={row.id}
                     tabIndex={0} // Make the row focusable
                     role="button"
                     aria-label={`View details about ${row.original.name}`}
                     onClick={() => {
                        handleItemClick(row.original.name);
                     }}
                     onKeyDown={e => {
                        if (e.key === 'Enter' || e.key === ' ') {
                           e.preventDefault();
                           handleItemClick(row.original.name);
                        }
                     }}
                     className="wcag-focus table-row">
                     {row.getVisibleCells().map(cell => (
                        <SkillsTableCell
                           key={cell.id}
                           cell={cell}
                           colsToHideOnMobile={colsToHideOnMobile}
                        />
                     ))}
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
}
