import Link from 'next/link';
import { CloudinaryImage } from '@/components/image';

interface IconProps {
   src: string;
   altText: string;
   link?: string;
   size?: number;
}

const Icon = ({ src, altText, link, size = 24 }: IconProps) => {
   const IconImage = () => (
      <div title={altText} className="flex items-center">
         <CloudinaryImage
            cloudinaryId={src}
            alt={altText}
            width={size}
            height={size}
         />
      </div>
   );

   return (
      <div className="flex">
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
