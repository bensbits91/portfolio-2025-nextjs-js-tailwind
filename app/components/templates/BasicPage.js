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

const BasicPage = ({ content }) => {
   const { heading, subheading, sections } = content;

   const ContentItem = ({ item }) => {
      if (typeof item === 'string') {
         return <P>{item}</P>;
      }
      return <UL items={item} />;
   };

   return (
      <>
         {heading && (
            <HeroSection>
               <HeadingOne>{heading}</HeadingOne>
               <SubtleText textCenter>{subheading}</SubtleText>
            </HeroSection>
         )}

         {sections &&
            sections.map((section, index) => {
               const {
                  layout = 'OneColumnSection',
                  heading,
                  content,
                  subsections
               } = section;

               if (layout === 'Cta') {
                  return <Cta key={index} data={section} />;
               }

               return (
                  <OneColumnSection key={index} bigBottom>
                     <HeadingTwo>{heading}</HeadingTwo>

                     {content &&
                        content.map((item, index) => (
                           <ContentItem key={index} item={item} />
                        ))}

                     {subsections &&
                        subsections.map((section, index) => {
                           const { heading, content } = section;
                           return (
                              <div key={index} className="mb-8 md:ml-4">
                                 <HeadingThree color="yellow">
                                    {heading}
                                 </HeadingThree>
                                 {content.map((item, index) => (
                                    <ContentItem key={index} item={item} />
                                 ))}
                              </div>
                           );
                        })}
                  </OneColumnSection>
               );
            })}
      </>
   );
};

export default BasicPage;
