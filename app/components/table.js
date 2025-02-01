import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';

const DataTable = ({ columns, data }) => {
    console.log('bb ~ data:', data);
    console.log('bb ~ columns:', columns);
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    });

    return (
        <div className='overflow-x-auto'>
            <table className='min-w-full'>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td
                                    key={cell.id}
                                    className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
