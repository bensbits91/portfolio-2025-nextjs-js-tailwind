'use client';
import Image from 'next/image';
import { createColumnHelper } from '@tanstack/react-table';
import DataTable from '../components/table';
import { skills, skillsForTable } from '../data.js';
import { generateStars, generateYearIcon } from '../utils.js';

const columnHelper = createColumnHelper();
const columns = [
   columnHelper.accessor('icon', {
      header: 'Icon',
      cell: info => {
         const { name } = info.row.original;
         return (
            <div className='relative flex justify-center mr-2 h-[32px] w-full min-w-[32px]'>
               <Image src={info.getValue()} alt={name} fill contain='true' />
            </div>
         );
      }
   }),
   columnHelper.accessor('name', {
      header: 'Name',
      cell: info => info.getValue()
   }),
   columnHelper.accessor('type', {
      header: 'Type',
      cell: info => info.getValue()
   }),
   columnHelper.accessor('years', {
      header: 'Years',
      cell: info => (
         <div className='flex row'>{generateYearIcon(info.getValue())}</div>
      )
   }),
   columnHelper.accessor('rating', {
      header: 'Rating',
      cell: info => (
         <div className='flex row'>{generateStars(info.getValue())}</div>
      )
   }),
   columnHelper.accessor('haveUsedProfessionally', {
      header: 'Used Professionally',
      cell: info =>
         info.getValue() ? (
            <Image
               src='/chair-office.svg'
               alt='Office chair'
               width={24}
               height={24}
            />
         ) : (
            <></>
         )
   }),
   columnHelper.accessor('haveUsedForFun', {
      header: 'Used for Fun',
      cell: info =>
         info.getValue() ? (
            <Image
               src='chair-comfy.svg'
               alt='Comfy chair'
               width={24}
               height={24}
            />
         ) : (
            <></>
         )
   })
];

const Skills = () => {
   console.log('bb ~ skills:', skills);

   return (
      <>
         <h1>Skills</h1>
         <DataTable columns={columns} data={skillsForTable} />
      </>
   );
};

export default Skills;
