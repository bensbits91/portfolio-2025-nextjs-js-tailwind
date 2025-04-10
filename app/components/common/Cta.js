import { HeadingTwo, P } from '@/app/components/typography';
import { Button } from '@/app/components/common';
import { maxWidthCode } from '@/app/utils';

// todo: Cta should be a non-layout component
// todo: Full width with max width in the direct child should be a layout component
// maybe it should be the default layout (OneColumnSection by default doesn't have a bg)
// which allows us to add bg to any section

const Cta = ({
   data,
   size = 'narrow',
   bigBottom = false,
   bg = 'transparent'
}) => (
   <section
      className={bg === 'transparent' ? 'bg-transparent' : `bg-gradient-${bg}`}>
      <div
         className={`container mx-auto px-10 pb-20 pt-10 md:px-0 md:pb-32 md:pt-16 ${maxWidthCode(size)} ${
            bigBottom ? 'mb-20 md:mb-32' : 'mb-0'
         }`}>
         <HeadingTwo color={bg === 'transparent' ? '' : 'gray'}>
            {data.heading}
         </HeadingTwo>
         {data.content.map((text, index) => (
            <P key={index} color="gray">
               {text}
            </P>
         ))}
         <Button inverted link={data.link.href}>
            {data.link.text}
         </Button>
      </div>
   </section>
);

export default Cta;
