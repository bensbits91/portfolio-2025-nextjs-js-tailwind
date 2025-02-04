import {
   useReactTable,
   getCoreRowModel,
   flexRender
} from '@tanstack/react-table';

// todo: move to a separate files
const HeaderRow = ({ headerGroup }) => (
   <tr key={headerGroup.id}>
      {headerGroup.headers.map(header => (
         <th
            key={header.id}
            className="py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
            {flexRender(header.column.columnDef.header, header.getContext())}
         </th>
      ))}
   </tr>
);

const Row = ({ row }) => (
   <tr key={row.id} className='border-b-2 border-b-gray-600'>
      {row.getVisibleCells().map(cell => (
         <td key={cell.id} className="py-3 text-sm text-gray-400">
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
         </td>
      ))}
   </tr>
);

const DataTable = ({ columns, data }) => {
   const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel()
   });

   return (
      <div className="flex justify-center overflow-x-auto">
         <table className='border-collapse'>
            <thead>
               {table.getHeaderGroups().map(headerGroup => (
                  <HeaderRow key={headerGroup.id} headerGroup={headerGroup} />
               ))}
            </thead>
            <tbody>
               {table.getRowModel().rows.map(row => (
                  <Row key={row.id} row={row} />
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default DataTable;
