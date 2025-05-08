import {
   Popover,
   Trigger,
   Content,
   Arrow,
   Close
} from '@radix-ui/react-popover';
import { Heading } from '@/components/typography';
import { ContactForm /* ContactLinks */ } from '@/components/contact';
import { CloseIcon } from '@/components/icons';
import clsx from 'clsx';

interface ContactPopperProps {
   children?: React.ReactNode;
   side?: 'top' | 'right' | 'bottom' | 'left';
   sideOffset?: number;
   align?: 'start' | 'center' | 'end';
   alignOffset?: number;
   dark?: boolean;
}

export default function ContactPopper({
   children,
   side = 'bottom',
   sideOffset = 0,
   align = 'center',
   alignOffset = 0,
   dark = false
}: ContactPopperProps) {
   return (
      <Popover>
         <Trigger asChild aria-label="Open contact form">
            {children || <div>Contact</div>}
         </Trigger>
         <Content
            side={side}
            sideOffset={sideOffset}
            align={align}
            alignOffset={alignOffset}
            aria-labelledby="contact-heading"
            aria-describedby="contact-description"
            className={clsx(
               'z-40 mx-auto w-[calc(100vw-8px)] rounded-lg p-4 shadow-2xl md:mx-0 md:w-96',
               dark ? 'bg-gradient-dark' : 'bg-gradient-teal'
            )}>
            <Close
               aria-label="Close contact form"
               className="absolute right-2 top-2 cursor-pointer wcag-focus">
               <div
                  className={clsx(
                     'hover-delay hover-brightness h-4 w-4',
                     dark ? 'link' : 'text-bb-gray'
                  )}>
                  <CloseIcon />
               </div>
            </Close>
            <Heading
               id="contact-heading"
               level={2}
               appearance={4}
               bottom="md"
               color={dark ? 'light' : 'dark'}>
               Contact me
            </Heading>
            <p id="contact-description" className="sr-only">
               Use this form to send me a message.
            </p>
            <ContactForm dark={dark} />
            <Arrow
               className={clsx(
                  'z-50 h-2 w-4',
                  dark
                     ? 'fill-[var(--bb-gray-800)]'
                     : 'fill-[var(--bb-teal-dark-300)]'
               )}
            />
         </Content>
      </Popover>
   );
}
