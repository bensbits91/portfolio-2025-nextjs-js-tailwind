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
import ProjectsTableHeader from './ProjectsTableHeader';
import ProjectsTableCell from './ProjectsTableCell';
import { IconBar } from '@/components/common';
import { GridProject } from '@/types/Project';
import { truncateString } from '@/utils/string';
import { skillIcons } from '@/data/skills';

interface ProjectsTableProps {
   projects: GridProject[];
   handleItemClick: (thingId: string) => void;
}

const colsToHideOnMobile = ['year', 'liveLink', 'codeLink', 'description'];

export default function ProjectsTable({
   projects = [],
   handleItemClick
}: ProjectsTableProps) {
   const columns: ColumnDef<
      GridProject,
      string | unknown | number | Date | ReactNode
   >[] = [
      {
         accessorKey: 'getFeaturedImage',
         header: '',
         enableSorting: false,
         enableColumnFilter: false,
         cell: (info: CellContext<GridProject, unknown>) => {
            const imageUrl = info.row.original.getFeaturedImage().name;
            if (!imageUrl || imageUrl === 'default') return null;
            return (
               <div className="mr-2 flex h-8 w-8">
                  <CloudinaryImage
                     cloudinaryId={imageUrl}
                     alt={`Thumbnail for ${info.row.original.name}`}
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
         enableColumnFilter: false,
         cell: (info: CellContext<GridProject, unknown>) => {
            const description = info.getValue() as string;
            const { newString: truncatedDescription } = description
               ? truncateString(description, 20)
               : {};

            return truncatedDescription;
         }
      },
      {
         accessorKey: 'year',
         header: 'Year',
         enableColumnFilter: false
      },
      {
         accessorKey: 'tech',
         header: 'Stack',
         enableSorting: false,
         enableColumnFilter: false,
         cell: (info: CellContext<GridProject, unknown>) => {
            return (
               <div className="mb-4 mt-2">
                  <IconBar
                     size={16}
                     wrap
                     icons={skillIcons(info.getValue() as string[]).filter(
                        (
                           icon
                        ): icon is {
                           src: string;
                           altText: string;
                           iconName: string;
                        } => icon.src !== undefined
                     )}
                  />
               </div>
            );
         }
      },
      {
         accessorKey: 'description',
         header: 'Description',
         enableSorting: false,
         enableColumnFilter: false,
         cell: (info: CellContext<GridProject, unknown>) => {
            const description = info.getValue() as string;
            const { newString: truncatedDescription } = description
               ? truncateString(description, 40)
               : {};
            return truncatedDescription;
         }
      }
   ];

   const table = useReactTable({
      data: projects,
      columns,
      initialState: {
         sorting: [
            {
               id: 'year', // The column ID to sort by
               desc: true // Set to `true` for descending, `false` for ascending
            }
         ]
      },
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel() // needed for client-side filtering
   });

   if (!projects || projects.length === 0) {
      return <div>No projects available</div>;
   }

   return (
      <table className="mx-auto">
         <thead>
            {table.getHeaderGroups().map(headerGroup => (
               <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                     <ProjectsTableHeader
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
                  className="table-row focus:outline-none focus:ring-2 focus:ring-bb-teal">
                  {row.getVisibleCells().map(cell => (
                     <ProjectsTableCell
                        key={cell.id}
                        cell={cell}
                        colsToHideOnMobile={colsToHideOnMobile}
                     />
                  ))}
               </tr>
            ))}
         </tbody>
      </table>
   );
}
