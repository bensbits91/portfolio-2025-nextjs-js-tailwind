import Link from 'next/link';
import SkillsCardListItem from './SkillsCardListItem';
import ExperienceCardListItem from './ExperienceCardListItem';
import ProjectsCardListItem from './ProjectsCardListItem';

const HomeCard = ({ items, type, heading, allText, link }) => (
   <div>
      <div>{heading}</div>
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
      {allText && (
         <Link href={link}>
            <div className="border border-white bg-red-500 p-2 transition duration-300 hover:bg-teal-500">
               {allText}
            </div>
         </Link>
      )}
   </div>
);

export default HomeCard;
