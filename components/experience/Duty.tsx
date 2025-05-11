'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Collapsible, Trigger, Content } from '@radix-ui/react-collapsible';
import { IconBar } from '@/components/common';
import { Heading, Text, List } from '@/components/typography';
import { ChevronIcon } from '@/components/icons';
import { skillIcons } from '@/data/skills';
import { BaseDuty } from '@/types/Job';
import { replaceNonAphanumeric } from '@/utils/string';

interface DutyProps {
   duty: BaseDuty;
}

const Duty = ({ duty }: DutyProps) => {
   const { name, skillNames, details, moreInfo, moreInfoLink } = duty;
   const ariaText = replaceNonAphanumeric(`duty-content-${duty.name}`);

   const [open, setOpen] = useState(false);
   const handleToggle = () => {
      setOpen(prev => !prev);
   };

   const DutyHeader = () => {
      return (
         <>
            {name && (
               <Heading level={4} appearance={5} color="secondary">
                  {name}
               </Heading>
            )}
            {skillNames && (
               <div className="my-2">
                  <IconBar
                     wrap
                     pop
                     icons={skillIcons(skillNames).filter(
                        (
                           icon
                        ): icon is {
                           src: string;
                           altText: string;
                           iconName: string;
                        } => icon.src !== undefined
                     )}
                     size={18}
                  />
               </div>
            )}
         </>
      );
   };

   const DutyMain = () => {
      return (
         <>
            {details && details.length > 0 && (
               <List
                  items={details}
                  bottom="no"
                  ariaLabel="List of responsibilities and accomplishments"
               />
            )}
            {moreInfoLink && (
               <Link className="link inline text-sm" href={moreInfoLink.href}>
                  {moreInfoLink.text}
               </Link>
            )}
         </>
      );
   };

   return (
      <li className="mb-6">
         <DutyHeader />
         <DutyMain />

         {moreInfo && moreInfo.length > 0 ? (
            <Collapsible onOpenChange={handleToggle}>
               <Content
                  id={ariaText}
                  aria-hidden={!open}
                  /* className={clsx(
                     // 'rounded-md border border-bb-teal bg-bb-gray-900 p-4 light:bg-[var(--bb-gray-10)]',
                     open ? 'animate-slide-down' : 'animate-slide-up'
                  )} */
               >
                  <Trigger
                  className="text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bb-teal"
                  aria-expanded={open}
                  aria-controls={ariaText}>
                  {moreInfo.map((info, index) => (
                     <div key={index}>
                        {Array.isArray(info) ? (
                           <List
                              items={info}
                              bottom="no"
                              ariaLabel="More responsibilities and accomplishments"
                           />
                        ) : (
                           <Text>{info}</Text>
                        )}
                     </div>
                  ))}</Trigger>
               </Content>
               <Trigger
                  className="text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bb-teal"
                  aria-expanded={open}
                  aria-controls={ariaText}>
                  {/* <DutyMain /> */}
                  <span className="link px-2">
                     {open ? 'Show less' : 'Show more'}
                     <span className="inline-block h-6 w-6 align-middle">
                        <ChevronIcon direction={open ? 'up' : 'down'} />
                     </span>
                  </span>
               </Trigger>
            </Collapsible>
         ) : (
            <DutyMain />
         )}
      </li>
   );
};

export default Duty;
