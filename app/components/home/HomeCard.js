import Button from '@/app/components/common/Button';
import SkillsCardListItem from './SkillsCardListItem';
import ExperienceCardListItem from './ExperienceCardListItem';
import ProjectsCardListItem from './ProjectsCardListItem';
import { HeadingTwo } from '../typography';

const HomeCard = ({
   items,
   type,
   heading,
   headingColor = 'green',
   buttonText,
   link
}) => (
   <div>
      <HeadingTwo color={headingColor}>{heading}</HeadingTwo>
      <ul>
         {items.map((item, index) => {
            switch (type) {
               case 'skill':
                  return <SkillsCardListItem key={index} item={item} />;
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
