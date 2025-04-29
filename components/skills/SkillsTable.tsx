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
import SkillsTableHeader from './SkillsTableHeader';
import SkillsTableCell from './SkillsTableCell';
import { generateStars } from '@/app/utils';
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
         accessorKey: 'cloudinary',
         header: '',
         enableSorting: false,
         enableColumnFilter: false,
         cell: (info: CellContext<BaseSkill, unknown>) => {
            const imageUrl = info.getValue() as string;
            return (
               <div className="mr-2 flex h-4 w-4">
                  <CloudinaryImage
                     cloudinaryId={imageUrl}
                     alt={getCoreRowModel.name}
                     width={32}
                     height={32}
                  />
               </div>
            );
         }
      },
      {
         accessorKey: 'name',
         header: 'Name',
         enableColumnFilter: false
      },
      {
         accessorKey: 'years',
         header: 'Years',
         enableColumnFilter: false,
         cell: (info: CellContext<BaseSkill, unknown>) => {
            const years = info.getValue() as number;
            return (
               <div className="min-w-24 whitespace-nowrap text-[0.7rem] md:text-sm">
                  {years}+ years
               </div>
            );
         }
      },
      {
         accessorKey: 'rating',
         header: 'Rating',
         enableColumnFilter: false,
         cell: (info: CellContext<BaseSkill, unknown>) => {
            const rating = info.getValue() as number;
            return <div className="flex h-4">{generateStars(rating)}</div>;
         }
      }
   ];

   const table = useReactTable({
      data: skills,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel() // needed for client-side filtering
   });

   if (!skills || skills.length === 0) {
      return <div>No skills available</div>;
   }

   return (
      <div>
         <table>
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
                     className="border-y-solid cursor-pointer border-b-0 border-t border-transparent odd:bg-[var(--bb-surface-a10)] hover:border-b hover:border-y-yellow-200"
                     onClick={() => {
                        handleItemClick(row.original.name);
                     }}>
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
