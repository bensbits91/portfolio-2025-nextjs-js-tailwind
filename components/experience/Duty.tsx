import Link from 'next/link';
import { IconBar } from '@/components/common';
import { Heading, Text } from '@/components/typography';
import { skillIcons } from '@/app/data';

interface DutyProps {
   duty: {
      name: string;
      skillNames?: string[];
      description: string;
      moreInfoLink?: {
         text: string;
         href: string;
      };
   };
}

const Duty = ({ duty }: DutyProps) => {
   const { name, skillNames, description, moreInfoLink } = duty;

   return (
      <li className="mb-6">
         {name && (
            <Heading level={4} appearance={5} color="jade">
               {name}
            </Heading>
         )}
         {skillNames && (
            <div className="my-2">
               <IconBar icons={skillIcons(skillNames)} size={18} />
            </div>
         )}
         <Text>{description}</Text>
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
