import { HeroSection, OneColumnSection } from '@/app/components/layout';
import {
   HeadingOne,
   HeadingTwo,
   HeadingThree,
   SubtleText,
   P,
   UL
} from '@/app/components/typography';
import { Cta } from '@/app/components/common';
import content from './content.js';

const Seo = () => {
   const { heading, subheading, mainSections, moreSections, ctaBottom } =
      content;

   return (
      <>
         <HeroSection>
            <HeadingOne>{heading}</HeadingOne>
            <SubtleText textCenter>{subheading}</SubtleText>
         </HeroSection>
         <OneColumnSection bigBottom>
            {mainSections.map((section, index) => {
               const { heading, content } = section;
               return (
                  <div key={index}>
                     <HeadingTwo>{heading}</HeadingTwo>
                     <P>{content}</P>
                  </div>
               );
            })}
         </OneColumnSection>
         {moreSections.map((section, index) => {
            const { heading, sections } = section;
            return (
               <OneColumnSection key={index} bigBottom>
                  <HeadingTwo color="purple">{heading}</HeadingTwo>
                  {sections.map((section, index) => {
                     const { heading, content } = section;
                     return (
                        <div key={index}>
                           <HeadingThree color="yellow">{heading}</HeadingThree>
                           {content.map((item, index) => {
                              if (typeof item === 'string') {
                                 return <P key={index}>{item}</P>;
                              }
                              return (
                                 <UL key={index} items={item} />
                              );
                           })}
                        </div>
                     );
                  })}
               </OneColumnSection>
            );
         })}
         <Cta data={ctaBottom} />
      </>
   );
};

export default Seo;
