import { TwoColumnSection, Section } from '@/components/layout';
import {
   HeadingOne,
   HeadingTwo,
   HeadingThree,
   Text,
   List
} from '@/components/typography';
import { Breadcrumb, Cta, CodeLink, IconBar } from '@/components/common';
import { skillIcons } from '@/app/data';

interface SectionProps {
   layout?: string;
   heading?: string;
   content?: (
      | string
      | string[]
      | { heading: string; subheading: string; list: string[] }
   )[]; // Allow nested objects
   subsections?: {
      heading?: string;
      subheading?: string | string[];
      list?: string[];
      stack?: string[];
      codeLink?: {
         text: string;
         href: string;
      };
      content?: (
         | string
         | string[]
         | { heading: string; subheading: string; list: string[] }
      )[]; // Allow nested objects
   }[];
   bigBottom?: boolean;
   stack?: string[];
   link?: {
      text: string;
      href: string;
   };
   skillNames?: string[];
}

interface BasicPageProps {
   content: {
      heading?: string;
      subheading?: string;
      skillNames?: string[];
      sections?: SectionProps[];
   };
}

interface ContentItemProps {
   item: string | string[] | { heading: string; subheading: string; list: string[] };
}

const BasicPage = ({ content }: BasicPageProps) => {
   const { heading, subheading, skillNames, sections } = content;

   const ContentItem = ({ item }: ContentItemProps) => {
      if (typeof item === 'string') {
         return <Text>{item}</Text>;
      }

      if (Array.isArray(item)) {
         return <List items={item} />;
      }

      return (
         <div>
            <HeadingThree>{item.heading}</HeadingThree>
            <Text>{item.subheading}</Text>
            <List items={item.list} />
         </div>
      );
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
                        data={{
                           ...section,
                           content: section.content?.flatMap(item =>
                              typeof item === 'string'
                                 ? [item]
                                 : Array.isArray(item)
                                 ? item
                                 : item.list
                           )
                        }}
                        bigBottom={bigBottom}
                        bg="teal"
                     />
                  );
               }

               if (layout === 'TwoColumnSection') {
                  if (!subsections || subsections.length === 0) return null;

                  return (
                     <TwoColumnSection
                        key={index}
                        columns={subsections
                           .map((section, SubsectionIndex) => {
                              const { heading, stack, codeLink, content } =
                                 section;

                              if (!content) return null;

                              return {
                                 content: (
                                    <div key={SubsectionIndex}>
                                       <HeadingTwo>{heading}</HeadingTwo>
                                       <div className="mb-8">
                                          {stack && <List items={stack} />}
                                          {codeLink && (
                                             <CodeLink codeLink={codeLink} />
                                          )}
                                       </div>
                                       {content.map((item, contentIndex) => {
                                          if (typeof item === 'string') {
                                             return (
                                                <Text key={contentIndex}>
                                                   {item}
                                                </Text>
                                             );
                                          }

                                          if (Array.isArray(item)) {
                                             return (
                                                <List
                                                   key={contentIndex}
                                                   items={item}
                                                />
                                             );
                                          }

                                          return null;
                                       })}
                                    </div>
                                 )
                              };
                           })
                           .filter(column => column !== null)}
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
                                 {content &&
                                    content.map((item, index) => (
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
