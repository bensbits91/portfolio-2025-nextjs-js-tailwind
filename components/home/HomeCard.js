import Button from '@/components/common/Button';
import { SkillItem } from '@/components/skills';
import ExperienceCardListItem from './ExperienceCardListItem';
import { HeadingTwo } from '@/components/typography';

const HomeCard = ({
   items,
   type,
   heading,
   headingColor = 'jade',
   buttonText,
   link
}) => (
   <div>
      <HeadingTwo color={headingColor}>{heading}</HeadingTwo>
      <ul>
         {items.map((item, index) => {
            switch (type) {
               case 'skill':
                  return <SkillItem key={index} item={item} />;
               case 'experience':
                  return <ExperienceCardListItem key={index} item={item} />;
               default:
                  return <li key={index}>Unkown Type</li>;
            }
         })}
      </ul>
      {buttonText && <Button link={link}>{buttonText}</Button>}
   </div>
);

export default HomeCard;
