import CloudinaryImage from '@/app/components/common/CloudinaryImage';
import { createColumnHelper } from '@tanstack/react-table';
import { generateStars } from '@/app/utils.js';

const columnHelper = createColumnHelper();
const columns = [
   columnHelper.accessor('cloudinary', {
      header: '',
      cell: info => {
         const { name } = info.row.original;
         return (
            <div className="relative flex h-6 w-9 justify-center pr-3">
               <CloudinaryImage
                  cloudinaryId={info.getValue()}
                  alt={name}
                  width={24}
                  height={24}
               />
            </div>
         );
      }
   }),
   columnHelper.accessor('name', {
      header: 'Name',
      cell: info => <div className="w-36 pr-3">{info.getValue()}</div>
   }),
   columnHelper.accessor('type', {
      header: 'Type',
      cell: info => <div className="w-40 pr-3">{info.getValue()}</div>
   }),
   columnHelper.accessor('years', {
      header: 'Years',
      cell: info => <div className="pr-3">~ {info.getValue()} years</div>
   }),
   columnHelper.accessor('rating', {
      header: 'Rating',
      cell: info => (
         <div className="row flex w-20 pr-3">
            {generateStars(info.getValue())}
         </div>
      )
   }),
   columnHelper.accessor('haveUsedProfessionally', {
      header: 'Pro',
      cell: info =>
         info.getValue() ? (
            <div className="h-6 w-9 pr-3">
               <CloudinaryImage
                  cloudinaryId="suit_urzso8"
                  alt="Business suit"
                  width={24}
                  height={24}
               />
            </div>
         ) : (
            <></>
         )
   }),
   columnHelper.accessor('haveUsedForFun', {
      header: 'Side',
      cell: info =>
         info.getValue() ? (
            <div className="h-6 w-6">
               <CloudinaryImage
                  cloudinaryId="sweatshirt_eojit3"
                  alt="Sweatshirt"
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
