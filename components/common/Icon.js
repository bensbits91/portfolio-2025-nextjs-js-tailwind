import Link from 'next/link';
import { CloudinaryImage } from '@/components/image';

const Icon = ({ src, altText, link, size = '32' }) => {
   const IconImage = () => (
      <div title={altText} className='flex items-center'>
         <CloudinaryImage
            cloudinaryId={src}
            alt={altText}
            width={size}
            height={size}
         />
      </div>
   );

   return (
      <div className="mr-2 flex h-6 w-6">
         {link ? (
            <Link href={link}>
               <IconImage />
            </Link>
         ) : (
            <IconImage />
         )}
      </div>
   );
};

export default Icon;
