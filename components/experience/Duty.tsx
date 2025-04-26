'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Collapsible, Trigger, Content } from '@radix-ui/react-collapsible';
import { IconBar } from '@/components/common';
import { Heading, Text, List } from '@/components/typography';
import { ChevronIcon } from '@/components/icons';
import { skillIcons } from '@/app/data';
import clsx from 'clsx';

interface DutyProps {
   duty: {
      name: string;
      skillNames?: string[];
      description: string;
      moreInfo?: (string | string[])[]; // Allow the array to contain strings and arrays of strings
      moreInfoLink?: {
         text: string;
         href: string;
      };
   };
}

const Duty = ({ duty }: DutyProps) => {
   const { name, skillNames, description, moreInfo, moreInfoLink } = duty;

   const [open, setOpen] = useState(false);
   const handleToggle = () => {
      setOpen(prev => !prev);
   };

   const DutyMain = () => {
      return (
         <>
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
            <span>
               {description}
               {moreInfo && (
                  <span className="px-2 text-bb-teal">
                     {open ? 'Show less' : 'Show more'}
                     <span className="inline-block h-6 w-6 align-middle">
                        <ChevronIcon direction={open ? 'up' : 'down'} />
                     </span>
                  </span>
               )}
            </span>
            {moreInfoLink && (
               <Link
                  className="inline text-sm text-bb-teal"
                  href={moreInfoLink.href}>
                  {moreInfoLink.text}
               </Link>
            )}
         </>
      );
   };

   return (
      <li className="mb-6">
         {moreInfo && moreInfo.length > 0 ? (
            <Collapsible onOpenChange={handleToggle} className="mt-2">
               <Trigger className="text-left">
                  <DutyMain />
               </Trigger>
               <Content
                  className={clsx(
                     'rounded-md border border-bb-teal bg-bb-gray-900 p-4',
                     open ? 'animate-slide-down' : 'animate-slide-up'
                  )}>
                  {moreInfo.map((info, index) => (
                     <div key={index}>
                        {Array.isArray(info) ? (
                           <List items={info} bottom="no" />
                        ) : (
                           <Text>{info}</Text>
                        )}
                     </div>
                  ))}
               </Content>
            </Collapsible>
         ) : (
            <DutyMain />
         )}
      </li>
   );
};

export default Duty;
