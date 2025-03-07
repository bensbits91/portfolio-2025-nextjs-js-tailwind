import { HeadingTwo, P } from '@/app/components/typography';
import { Button } from '@/app/components/common';
import { maxWidthCode } from '@/app/utils';

const Cta = ({ data, size = 'narrow', bigBottom = false }) => (
   <section className='bg-bb-gray-800'>
      <div className={`container mx-auto pt-10 md:pt-16 pb-20 md:pb-32 ${maxWidthCode(size)} ${
               bigBottom ? 'mb-20 md:mb-32' : 'mb-0'
            }`}>
         <HeadingTwo>{data.heading}</HeadingTwo>
         {data.content.map((text, index) => (
            <P key={index}>
               {text}
            </P>
         ))}
         <Button link={data.link.href}>{data.link.text}</Button>
      </div>
   </section>
);

export default Cta;
