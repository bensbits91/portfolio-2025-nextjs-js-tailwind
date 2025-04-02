import { HeadingThree } from '@/app/components/typography';
import Button from '@/app/components/common/Button';

const FeaturedProjectCard = ({ children }) => (
   <section className="container mx-auto mb-12 max-w-[1200px]">
      <div className="px-6 md:px-20">
         <div className="rounded-lg border-2 border-bb-gray-900 p-8 shadow-dark-card bg-gradient">
            <HeadingThree>Things App v2.0</HeadingThree>
            {children}
            <Button link="/projects/things">View Project Details</Button>
         </div>
      </div>
   </section>
);

export default FeaturedProjectCard;
