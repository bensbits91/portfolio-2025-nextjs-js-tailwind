import Link from 'next/link';
import { CloudinaryImage } from '@/app/components/image';

const Icon = ({ src, altText, link }) => {
   const IconImage = () => (
    <div title={altText}>
      <CloudinaryImage
         cloudinaryId={src}
         alt={altText}
         width={32}
         height={32}
      /></div>
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
