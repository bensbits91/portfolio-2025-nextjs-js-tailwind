import Button from '@/app/components/common/Button';
// import SkillsCardListItem from './SkillsCardListItem';
import { SkillItem } from '@/app/components/skills';
import ExperienceCardListItem from './ExperienceCardListItem';
import ProjectsCardListItem from './ProjectsCardListItem';
import { HeadingTwo } from '../typography';

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
               case 'project':
                  return <ProjectsCardListItem key={index} project={item} />;
               default:
                  return <li key={key}>Unkown Type</li>;
            }
         })}
      </ul>
      {buttonText && <Button link={link}>{buttonText}</Button>}
   </div>
);

export default HomeCard;
