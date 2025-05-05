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

interface ContactPopperProps {
   children?: React.ReactNode;
   side?: 'top' | 'right' | 'bottom' | 'left';
   sideOffset?: number;
   align?: 'start' | 'center' | 'end';
   alignOffset?: number;
}

export default function ContactPopper({
   children,
   side = 'bottom',
   sideOffset = 0,
   align = 'center',
   alignOffset = 0
}: ContactPopperProps) {
   return (
      <Popover>
         <Trigger asChild>{children || <div>Contact</div>}</Trigger>
         <Content
            side={side}
            sideOffset={sideOffset}
            align={align}
            alignOffset={alignOffset}
            className="elevation-1 light:border-[var(--bb-gray-10)] z-50 mx-auto w-[calc(100vw-8px)] rounded-lg border border-[var(--bg-elevation-1)] p-4 md:mx-0 md:w-96">
            <Close className="absolute right-2 top-2 cursor-pointer">
               <div className="link h-4 w-4">
                  <CloseIcon />
               </div>
            </Close>
            <Heading level={2} appearance={4} bottom="md">
               Contact me
            </Heading>

            <ContactForm />
            {/* <ContactLinks /> */}
            <Arrow className="light:fill-[var(--bb-gray-10)] h-2 w-4 fill-[var(--bg-elevation-1)] z-50" />
         </Content>
      </Popover>
   );
}
