import Link from 'next/link';
import {
   HeroSection,
   OneColumnSection,
   TwoColumnSection
} from '@/app/components/layout';
import {
   HeadingOne,
   HeadingTwo,
   HeadingThree,
   SubtleText,
   P,
   UL
} from '@/app/components/typography';
import { CodeLink, Cta } from '@/app/components/common';
import content from './content.js';

/*
 * todo:
 * fun heading colors
 * add link somewhere on homepage
 * make some content truncated and/or collapsible/expandable, or tabbed
 * add images
 */

const Things = () => {
   const {
      heading,
      subheading,
      mainSections,
      ctaOne,
      feBeSections,
      moreSections,
      ctaBottom
   } = content;

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
         <Cta data={ctaOne} bigBottom />
         <TwoColumnSection
            bigBottom
            columns={feBeSections.map((section, index) => {
               const { heading, stack, codeLink, content } = section;
               return {
                  content: (
                     <div>
                        <HeadingTwo>{heading}</HeadingTwo>
                        <div className="mb-8">
                           <UL items={stack} />
                           <CodeLink codeLink={codeLink} />
                        </div>
                        {content.map((section, index) => {
                           const { heading, subheading, list } = section;
                           return (
                              <div key={index}>
                                 <HeadingThree color="yellow">
                                    {heading}
                                 </HeadingThree>
                                 {subheading && <P>{subheading}</P>}
                                 <UL items={list} />
                              </div>
                           );
                        })}
                     </div>
                  )
               };
            })}
         />
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
                              return <UL key={index} items={item} />;
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

export default Things;
