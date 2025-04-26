import { HeadingTwo, Text } from '@/components/typography';
import { Button } from '@/components/common';
import { maxWidthCode } from '@/app/utils';
import clsx from 'clsx';

// todo: Cta should be a non-layout component
// todo: Full width with max width in the direct child should be a layout component
// maybe it should be the default layout (OneColumnSection by default doesn't have a bg)
// which allows us to add bg to any section

interface CtaProps {
   data: {
      heading?: string;
      content?: string[];
      link?: {
         href: string;
         text: string;
      };
   };
   size?: 'narrow' | 'wide';
   bigBottom?: boolean;
   bg?: 'transparent' | 'gray' | 'teal' | 'yellow';
}

const Cta = ({
   data,
   size = 'narrow',
   bigBottom = false,
   bg = 'transparent'
}: CtaProps) => (
   <section
      className={bg === 'transparent' ? 'bg-transparent' : `bg-gradient-${bg}`}>
      <div
         className={clsx(
            'container mx-auto px-10 pb-20 pt-10 md:px-0 md:pb-32 md:pt-16',
            maxWidthCode(size),
            bigBottom ? 'mb-20 md:mb-32' : 'mb-0'
         )}>
         <HeadingTwo color={bg === 'transparent' ? '' : 'gray'}>
            {data.heading}
         </HeadingTwo>
         {data.content && data.content.map((text, index) => (
            <Text key={index} color="gray">
               {text}
            </Text>
         ))}
         {data.link && (
            <Button inverted link={data.link.href}>
               {data.link.text}
            </Button>
         )}
      </div>
   </section>
);

export default Cta;
