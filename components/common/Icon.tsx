import Link from 'next/link';
import { CloudinaryImage } from '@/components/image';
import { Icon as DynamicIcon } from '@/components/icons';

interface IconProps {
   src: string;
   iconName?: string;
   altText: string;
   link?: string;
   size?: number;
}

const Icon = ({ src, iconName, altText, link, size = 24 }: IconProps) => {
   const IconImage = () => (
      <div title={altText} className="flex items-center">
         {iconName && (
            <div style={{ width: size, height: size }}>
               <DynamicIcon name={iconName} />
            </div>
         )}
         {!iconName && src && (
            <CloudinaryImage
               cloudinaryId={src}
               alt={altText}
               width={size}
               height={size}
            />
         )}
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
