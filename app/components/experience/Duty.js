import Link from 'next/link';
import { IconBar } from '@/app/components/common';
import { skillIcons } from '@/app/data';

const Duty = ({ duty }) => {
   const { name, skillNames, description, moreInfoLink } = duty;

   return (
      <li className="mb-4">
         <div className="font-bold">{name && `${name}`}</div>
         {skillNames && (
            <div className="my-2">
               <IconBar icons={skillIcons(skillNames)} />
            </div>
         )}
         <div className="text-xs">{description}</div>
         {moreInfoLink && (
            <Link
               className="inline text-sm text-bb-teal"
               href={moreInfoLink.href}>
               {moreInfoLink.text}
            </Link>
         )}
      </li>
   );
};

export default Duty;
