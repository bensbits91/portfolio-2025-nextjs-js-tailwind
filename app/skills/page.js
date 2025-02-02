'use client';
import Image from 'next/image';
import { createColumnHelper } from '@tanstack/react-table';
import DataTable from '../components/Table';
import { skillsForTable } from '../data.js';
import { generateStars, generateYearIcon } from '../utils.js';

const columnHelper = createColumnHelper();
const columns = [
   columnHelper.accessor('cloudinary', {
      header: 'Icon',
      cell: info => {
         const { name } = info.row.original;
         return (
            <div className='relative flex justify-center mr-2 h-[32px] w-full min-w-[32px]'>
               <Image
                  src={`https://res.cloudinary.com/ddfrx5278/image/upload/c_limit,w_32,h_32,q_auto/v1738447608/${info.getValue()}`}
                  width={32}
                  height={32}
                  alt={name}
                  className='w-full h-auto'
               />
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
               src='https://res.cloudinary.com/ddfrx5278/image/upload/c_limit,w_24,h_24,q_auto/v1738447608/chair-office_ivsvtp'
               alt='Office chair'
               width='24'
               height='24'
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
               src='https://res.cloudinary.com/ddfrx5278/image/upload/c_limit,w_24,h_24,q_auto/v1738447608/chair-comfy_wx9oj4'
               alt='Comfy chair'
               width='24'
               height='24'
            />
         ) : (
            <></>
         )
   })
];

const Skills = () => {
   return (
      <>
         <h1>Skills</h1>
         <DataTable columns={columns} data={skillsForTable} />
      </>
   );
};

export default Skills;
