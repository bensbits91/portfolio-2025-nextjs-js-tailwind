import Link from 'next/link';
import SkillsCardListItem from './SkillsCardListItem';
import ExperienceCardListItem from './ExperienceCardListItem';

const HomeCard = ({ items, type, heading, allText, link }) => (
    <div>
       <div>{heading}</div>
       <ul key={type}>
          {items.map((item, index) => {
             switch (type) {
                case 'skill':
                   return <SkillsCardListItem key={index} item={item} />;
                case 'experience':
                   return <ExperienceCardListItem key={index} item={item} />;
                default:
                   return <li key={key}>Unkown Type</li>;
             }         
          })}
       </ul>
       {allText && (
          <Link href={link}>
             <div>{allText}</div>
          </Link>
       )}
    </div>
 );

 export default HomeCard;