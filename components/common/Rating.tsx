import { CloudinaryImage } from '@/components/image';
interface RatingProps {
   rating: number;
}

export default function Rating({ rating }: RatingProps) {
   const fullStars = Math.floor(rating / 2);
   const halfStar = rating % 2 === 1;
   const stars = [];
   for (let i = 0; i < fullStars; i++) {
      stars.push(
         <div key={`full-${i}`} className="h-3 w-3">
            <CloudinaryImage
               cloudinaryId="star-white_ehbqmh"
               alt="Star"
               width={16}
               height={16}
            />
         </div>
      );
   }

   if (halfStar) {
      // todo: better half-star implementation
      stars.push(
         <div key="half" className="ml-[-4px] h-3 w-3">
            <CloudinaryImage
               cloudinaryId="star-white-half_bfoszw"
               alt="Half star"
               width={16}
               height={16}
            />
         </div>
      );
   }

   return stars;
}
