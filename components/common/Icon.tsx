import Link from 'next/link';
import { CloudinaryImage } from '@/components/image';
import { Icon as DynamicIcon } from '@/components/icons';

interface IconProps {
   src: string;
   iconName?: string;
   altText: string;
   link?: string;
   size?: number;
   dark?: boolean;
}

const Icon = ({
   src,
   iconName,
   altText,
   link,
   size = 24,
   dark = false
}: IconProps) => {
   const IconImage = () => (
      <div title={altText} className="flex items-center">
         {iconName && (
            <div style={{ width: size, height: size }}>
               <DynamicIcon name={iconName} dark={dark} />
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
            <Link href={link} aria-label={altText}>
               <IconImage />
            </Link>
         ) : (
            <IconImage />
         )}
      </div>
   );
};

export default Icon;
