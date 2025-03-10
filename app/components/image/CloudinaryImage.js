import Image from 'next/image';

const CloudinaryImage = ({
   cloudinaryId,
   alt,
   width,
   height,
   full = false,
   frame = 0
}) => {
   const cloudName = 'ddfrx5278';
   const baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload`;
   const standardParams = 'c_limit,q_auto';
   const widthParam = `,w_${width}`;
   const heightParam = `,h_${height}`;
   const frameParam = frame ? `,pg_${frame}` : ''; // if needed, can pass gif frame number as pg_${num}
   const url = `${baseUrl}/${standardParams}${widthParam}${heightParam}${frameParam}/v1738447608/${cloudinaryId}`;

   // c_fill,g_west,h_150,w_75

   return (
      <Image
         src={url}
         width={width}
         height={height}
         alt={alt}
         className={full ? 'h-auto w-full' : ''}
         //  unoptimized={true} // todo: add param to disable optimization for animated images
      />
   );
};

export default CloudinaryImage;
