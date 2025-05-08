import { StarIcon, StarHalfIcon } from '@/components/icons';

interface RatingProps {
   rating: number;
}

export default function Rating({ rating }: RatingProps) {
   const fullStars = Math.floor(rating / 2);
   const halfStar = rating % 2 === 1;
   const stars = [];
   for (let i = 0; i < fullStars; i++) {
      stars.push(
         <div key={`full-${i}`} className="h-3 w-3" aria-hidden="true">
            <StarIcon />
         </div>
      );
   }

   if (halfStar) {
      stars.push(
         <div key="half" className="h-3 w-3" aria-hidden="true">
            <StarHalfIcon />
         </div>
      );
   }

   return (
      <div
         role="group"
         aria-label={`I rate myself ${rating} out of ten for this skill`}
         className="flex">
         {stars}
      </div>
   );
}
