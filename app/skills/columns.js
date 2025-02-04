import CloudinaryImage from '@/app/components/common/CloudinaryImage';
import { createColumnHelper } from '@tanstack/react-table';
import { generateStars, generateYearIcon } from '@/app/utils.js';

const columnHelper = createColumnHelper();
const columns = [
   columnHelper.accessor('cloudinary', {
      header: 'Icon',
      cell: info => {
         const { name } = info.row.original;
         return (
            <div className='relative flex justify-center mr-2 h-8 w-full min-w-8'>
               <CloudinaryImage
                  cloudinaryId={info.getValue()}
                  alt={name}
                  width={32}
                  height={32}
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
            <div className='h-6 w-6'>
               <CloudinaryImage
                  cloudinaryId='chair-office_ivsvtp'
                  alt='Office chair'
                  width={24}
                  height={24}
               />
            </div>
         ) : (
            <></>
         )
   }),
   columnHelper.accessor('haveUsedForFun', {
      header: 'Used for Fun',
      cell: info =>
         info.getValue() ? (
            <div className='h-6 w-6'>
               <CloudinaryImage
                  cloudinaryId='chair-comfy_wx9oj4'
                  alt='Comfy chair'
                  width={24}
                  height={24}
               />
            </div>
         ) : (
            <></>
         )
   })
];

export default columns;
