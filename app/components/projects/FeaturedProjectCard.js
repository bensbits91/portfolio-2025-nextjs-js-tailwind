import { HeadingThree } from '@/app/components/typography';
import Button from '@/app/components/common/Button';
import { IconBar } from '@/app/components/common';
import { skillIcons } from '@/app/data';

const FeaturedProjectCard = ({ children, skills }) => (
   <section className="container mx-auto mb-12 max-w-[1200px]">
      <div className="px-6 md:px-20">
         <div className="bg-gradient rounded-lg border-2 border-bb-gray-900 p-8 shadow-dark-card">
            <HeadingThree>Things App v2.0</HeadingThree>
            {children}
            {skills.length > 0 && (
               <div className="my-2">
                  <IconBar icons={skillIcons(skills)} />
               </div>
            )}
            <Button link="/projects/things">View Project Details</Button>
         </div>
      </div>
   </section>
);

export default FeaturedProjectCard;
