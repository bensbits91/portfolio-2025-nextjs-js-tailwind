import { TwoColumnSection, Section } from '@/components/layout';
import {
   HeadingOne,
   HeadingTwo,
   HeadingThree,
   Text,
   UL
} from '@/components/typography';
import { Breadcrumb, Cta, CodeLink, IconBar } from '@/components/common';
import { skillIcons } from '@/app/data';

const BasicPage = ({ content }) => {
   const { heading, subheading, skillNames, sections } = content;

   const ContentItem = ({ item }) => {
      if (typeof item === 'string') {
         return <Text>{item}</Text>;
      }

      return <UL items={item} />;
   };

   return (
      <div key="basic-page">
         <Breadcrumb />

         {heading && (
            <Section top="xl" bottom="lg" width="md">
               <HeadingOne>{heading}</HeadingOne>
               <Text>{subheading}</Text>

               {skillNames && (
                  <div className="my-2">
                     <IconBar icons={skillIcons(skillNames)} />
                  </div>
               )}
            </Section>
         )}

         {sections &&
            sections.map((section, index) => {
               const {
                  layout = 'OneColumnSection',
                  heading,
                  content,
                  subsections,
                  bigBottom
               } = section;

               if (layout === 'Cta') {
                  return (
                     <Cta
                        key={index}
                        data={section}
                        bigBottom={bigBottom}
                        bg="teal"
                     />
                  );
               }

               if (layout === 'TwoColumnSection') {
                  return (
                     <TwoColumnSection
                        key={index}
                        bigBottom
                        columns={subsections.map((section, SubsectionIndex) => {
                           const { heading, stack, codeLink, content } =
                              section;
                           return {
                              content: (
                                 <div key={SubsectionIndex}>
                                    <HeadingTwo>{heading}</HeadingTwo>
                                    <div className="mb-8">
                                       <UL items={stack} />
                                       <CodeLink codeLink={codeLink} />
                                    </div>
                                    {content.map((section, contentIndex) => {
                                       const { heading, subheading, list } =
                                          section;
                                       return (
                                          <div key={contentIndex}>
                                             <HeadingThree color="yellow">
                                                {heading}
                                             </HeadingThree>
                                             {subheading && <Text>{subheading}</Text>}
                                             <UL items={list} />
                                          </div>
                                       );
                                    })}
                                 </div>
                              )
                           };
                        })}
                     />
                  );
               }

               return (
                  <Section key={index}>
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
                  </Section>
               );
            })}
      </div>
   );
};

export default BasicPage;
